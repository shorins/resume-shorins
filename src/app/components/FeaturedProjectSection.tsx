// src/app/components/FeaturedProjectSection.tsx
"use client";

import Image from 'next/image';

import React, { useState } from 'react';
import { portfolioData } from '@/app/data/portfolioData';
import GlowButton from './GlowButton';

const FeaturedProjectSection = () => {
  const { featuredProject } = portfolioData;
  const [activeImage, setActiveImage] = useState(featuredProject.demo.images[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isMaskFadingIn, setIsMaskFadingIn] = useState(false);
  const [analyzedImageSrcs, setAnalyzedImageSrcs] = useState<Set<string>>(new Set());

  const handleAnalyze = () => {
    setIsAnalyzing(true);

    // Simulate scanner animation
    setTimeout(() => {
      setIsMaskFadingIn(true);
      // Simulate analysis completion
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalyzedImageSrcs(prev => new Set(prev).add(activeImage.src));
        setIsMaskFadingIn(false);
      }, 500); // Mask fade-in duration
    }, 1500); // Scanner animation duration
  };

  return (
    <section className="bg-white py-16 md:py-24 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
        {/* Левая часть: Описание проекта */}
        <div className="lg:w-2/5 w-full text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {featuredProject.title}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {featuredProject.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <GlowButton
              href={featuredProject.demoLink}
              className="bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-600 transition duration-300 shadow-sm hover:shadow-md"
            >
              Попробовать демо
            </GlowButton>
            <GlowButton
              href={featuredProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300 shadow-sm hover:shadow-md"
            >
              Код на GitHub
            </GlowButton>
          </div>
        </div>

        {/* Правая часть: Интерактивное демо */}
        <div id="oil-spill-demo" className="lg:w-3/5 w-full bg-gray-50 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {featuredProject.demo.title}
          </h3>
          {/* Галерея выбора */}
          <div className="flex justify-center gap-4 mb-6">
            {featuredProject.demo.images.map((image) => (
              <Image
                key={image.src}
                src={analyzedImageSrcs.has(image.src) ? image.maskSrc : image.src}
                alt={image.alt}
                width={96} // w-24 is 96px
                height={96} // h-auto, but for Image component, fixed height is better for optimization
                className={`w-24 h-auto cursor-pointer rounded-md transition-all duration-300
                  ${activeImage.src === image.src ? 'border-4 border-orange-500 shadow-md' : 'border-4 border-transparent opacity-70 hover:opacity-100'}
                `}
                onClick={() => {
                  setActiveImage(image);
                  setIsAnalyzing(false);
                  setIsMaskFadingIn(false);
                }}
              />
            ))}
          </div>
          {/* Основное окно */}
          <div className="relative w-full aspect-video bg-gray-200 rounded-md overflow-hidden mb-6">
            <Image src={activeImage.src} alt="Основное изображение" className="w-full h-full object-cover" fill />
            {isAnalyzing && <div className="scanner-line"></div>}
            {(isAnalyzing || analyzedImageSrcs.has(activeImage.src)) && (
              <Image
                src={activeImage.maskSrc}
                alt="Маска анализа"
                className={`mask-overlay ${isMaskFadingIn ? '' : 'opacity-100'}`}
                fill
              />
            )}
          </div>
          {/* Кнопка действия */}
          <div className="text-center">
            <GlowButton
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-sky-600 transition duration-300 shadow-md"
            >
              {isAnalyzing ? 'Анализ...' : 'Начать анализ'}
            </GlowButton>
          </div>
          </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;