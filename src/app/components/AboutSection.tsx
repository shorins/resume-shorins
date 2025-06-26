// src/app/components/AboutSection.tsx
import { resumeData } from '../data/resumeData';
import { FC } from 'react';

const AboutSection: FC = () => {
  const { title, summary, softSkills } = resumeData.about;

  return (
    <section id="about" className="section-anchor py-12">
      <h2 className="section-title mb-8">{title}</h2>
      <p className="max-w-3xl text-lg text-slate-600 mb-10 leading-relaxed">
        {summary}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <div key={index} className="card p-4 text-center">
            <p className="font-semibold text-slate-800">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;