// src/app/components/EducationSection.tsx
"use client";
import { Award, GraduationCap, Download, Eye, FileText } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";
import { useState, useEffect } from "react";
import GradesModal from "./GradesModal";
import PDFModal from "./PDFModal";
import * as XLSX from "xlsx";

const EducationSection = () => {
  const { title, intro, main, courses } = resumeData.education;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiplomaModalOpen, setIsDiplomaModalOpen] = useState(false);
  const [selectedDiploma, setSelectedDiploma] = useState<{ url: string; title: string } | null>(null);
  const [gpa, setGpa] = useState<string | null>(null);

  useEffect(() => {
    const calculateGpa = async () => {
      try {
        const response = await fetch("/univer.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const sheetData: (string | number | boolean | null)[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const headerRowIndex = sheetData.findIndex(row => row.includes("Оценка"));

        if (headerRowIndex === -1) {
          setGpa("N/A");
          console.error("Header row with 'Оценка' not found.");
          return;
        }

        const headerRow = sheetData[headerRowIndex];
        const gradeColumnIndex = headerRow.findIndex(
          (header) => String(header).trim() === "Оценка"
        );

        console.log("Header Row found at index:", headerRowIndex, "Content:", headerRow);
        console.log("Found 'Оценка' at index:", gradeColumnIndex);

        if (gradeColumnIndex === -1) {
          setGpa("N/A");
          console.error("Column 'Оценка' not found in the identified header row.");
          return;
        }

        const grades = sheetData
          .slice(headerRowIndex + 1) // Start from the row after the header
          .map((row) => row[gradeColumnIndex])
          .filter((grade) => [3, 4, 5].includes(Number(grade)))
          .map(Number);

        if (grades.length > 0) {
          const sum = grades.reduce((acc, grade) => acc + grade, 0);
          const average = sum / grades.length;
          setGpa(`${average.toFixed(2)}/5.0`);
        } else {
          setGpa("N/A");
        }
      } catch (error) {
        console.error("Error calculating GPA:", error);
        setGpa("Ошибка");
      }
    };

    calculateGpa();
  }, []);

  const openDiplomaModal = (url: string, title: string) => {
    setSelectedDiploma({ url, title });
    setIsDiplomaModalOpen(true);
  };

  return (
    <section id="education" className="section-anchor py-8">
      <h2 className="section-title mb-12">{title}</h2>
      <p className="max-w-3xl text-slate-600 mb-12 text-lg leading-relaxed">
        {intro}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <p className="text-sm font-medium text-sky-600 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            ОСНОВНОЕ ОБРАЗОВАНИЕ
          </p>
          <h3 className="text-2xl font-bold mt-2">{main.university}</h3>
          <p className="text-lg font-medium text-slate-500 mt-1">{main.faculty}</p>
          <div className="mt-4 text-slate-600 space-y-2">
            <p><strong>Направление:</strong> {main.details.direction}</p>
            <p><strong>Степень:</strong> {main.details.degree}</p>
            <p>
              <strong>Средний балл (GPA):</strong>{" "}
              <span className="font-bold text-slate-800">
                {gpa || main.details.gpa}
              </span>
              <a
                href="/univer.xlsx"
                download
                className="ml-2 inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors duration-200 translate-y-[2.5px]"
                title="Скачать таблицу оценок"
              >
                <Download className="w-4 h-4 mr-1" />
                <span>Скачать оценки</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-2 inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors duration-200 translate-y-[2.5px]"
                title="Просмотреть таблицу оценок"
              >
                <Eye className="w-4 h-4 mr-1" />
                <span>Просмотреть оценки</span>
              </button>
            </p>
          </div>
        </div>
        <div className="card p-6 flex flex-col">
          <p className="text-sm font-medium text-sky-600 flex items-center gap-2">
            <Award className="w-4 h-4" />
            КУРСЫ И ДОСТИЖЕНИЯ
          </p>
          <div className="mt-4 text-slate-600 space-y-4 flex-grow flex flex-col justify-center">
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center">
                  <h4 className="font-bold text-slate-800">{course.name}</h4>
                  {course.diploma && (
                    <button
                      onClick={() => openDiplomaModal(course.diploma!, `Диплом курса ${course.name}`)}
                      className="ml-2 inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors duration-200"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      <span>Диплом</span>
                    </button>
                  )}
                </div>
                <p className="text-sm">{course.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GradesModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {selectedDiploma && (
        <PDFModal 
          isOpen={isDiplomaModalOpen} 
          setIsOpen={setIsDiplomaModalOpen} 
          pdfUrl={selectedDiploma.url} 
          title={selectedDiploma.title} 
        />
      )}
    </section>
  );
};

export default EducationSection;