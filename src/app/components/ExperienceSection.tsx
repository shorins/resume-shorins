// src/app/components/ExperienceSection.tsx
import { resumeData } from "@/app/data/resumeData";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-anchor py-8">
      <h2 className="section-title mb-12">Релевантный опыт</h2>
      <p className="max-w-3xl text-slate-600 mb-12 text-lg leading-relaxed">
        Несмотря на статус студента, я уже успел поучаствовать в реальных проектах, где применял свои навыки на практике, включая руководство командой и разработку коммерческих продуктов. Нажмите на карточки ниже, чтобы узнать больше.
      </p>
      <div className="relative pl-12 md:pl-16 border-l-4 border-slate-200">
        {resumeData.experience.map((job, index) => (
          <ExperienceItem key={index} item={job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;