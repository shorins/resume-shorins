// src/app/components/ProjectCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import GlowButton from './GlowButton';
import { Github, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    image: string;
    category: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        {project.demoLink && (
          <GlowButton
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300 shadow-sm hover:shadow-md"
          >
            <Eye className="w-4 h-4" />
            <span>Демо</span>
          </GlowButton>
        )}
        {project.githubLink && (
          <GlowButton
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 shadow-sm hover:shadow-md"
          >
            <Github className="w-4 h-4" />
            <span>Код</span>
          </GlowButton>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;