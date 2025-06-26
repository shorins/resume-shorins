// src/app/components/ProjectsSection.tsx
import { Trophy } from "lucide-react";
import { resumeData } from "@/app/data/resumeData";
import ProjectDetailItem from "./ProjectDetailItem";
import ColabIcon from "./icons/ColabIcon";
import GlowButton from "./GlowButton";

const ProjectsSection = () => {
  const { title, badge, description, details, colabLink } = resumeData.projects;

  return (
    <section id="projects" className="section-anchor py-16 md:py-24">
      <h2 className="section-title mb-12">Проекты и Соревнования</h2>
      <p className="max-w-3xl text-slate-600 mb-12 text-lg leading-relaxed">
        Я верю, что лучшие навыки демонстрируются на практике. Мой самый значимый соревновательный проект — классификация персонажей Симпсонов на Kaggle, где я применил комплексный подход для достижения высокого результата.
      </p>

      <div className="card overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex items-center flex-wrap gap-4">
              <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
              <p className="bg-sky-100 text-sky-800 font-bold py-2 px-4 rounded-full flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                {badge}
              </p>
            </div>
            {colabLink && (
              <GlowButton
                href={colabLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 self-start whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 bg-slate-100 text-slate-600 hover:bg-orange-500 hover:text-white transition-colors duration-200"
              >
                <ColabIcon className="w-5 h-5" />
                <span>Посмотреть ноутбук</span>
              </GlowButton>
            )}
          </div>
          <p className="mt-4 text-slate-600">{description}</p>

          <div className="mt-6 space-y-3">
            {details.map((detail, index) => (
              <ProjectDetailItem key={index} item={detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;