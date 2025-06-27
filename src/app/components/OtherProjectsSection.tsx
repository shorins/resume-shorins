// src/app/components/OtherProjectsSection.tsx
"use client";

import React from 'react';
import { portfolioData } from '@/app/data/portfolioData';
import ProjectCard from './ProjectCard';

interface OtherProjectsSectionProps {
  activeFilter: string;
}

const OtherProjectsSection: React.FC<OtherProjectsSectionProps> = ({ activeFilter }) => {
  const filteredProjects = portfolioData.otherProjects.filter((project) => {
    if (activeFilter === 'Все проекты') {
      return true;
    }
    return project.category === activeFilter;
  });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Другие проекты (раздел в разработке, пока вымышленные)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-8">
            Проекты по выбранной категории не найдены.
          </p>
        )}
      </div>
    </section>
  );
};

export default OtherProjectsSection;