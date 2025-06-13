// src/app/components/EducationSection.tsx
import { Award, GraduationCap } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";

const EducationSection = () => {
  const { title, intro, main, courses } = resumeData.education;

  return (
    <section id="education" className="py-16 md:py-24">
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
            <p><strong>Средний балл (GPA):</strong> <span className="font-bold text-slate-800">{main.details.gpa}</span></p>
          </div>
        </div>
        <div className="card p-6 flex flex-col">
          <p className="text-sm font-medium text-sky-600 flex items-center gap-2">
            <Award className="w-4 h-4" />
            КУРСЫ И ДОСТИЖЕНИЯ
          </p>
          <div className="mt-4 text-slate-600 space-y-4 flex-grow flex flex-col justify-center">
            {courses.map((course, index) => (
              <div key={index}>
                <h4 className="font-bold text-slate-800">{course.name}</h4>
                <p className="text-sm">{course.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;