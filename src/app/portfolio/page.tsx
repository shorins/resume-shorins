"use client";

import React, { useState } from 'react';
import FeaturedProjectSection from '@/app/components/FeaturedProjectSection';
import OtherProjectsSection from '@/app/components/OtherProjectsSection';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('Все проекты');

  const filters = [
    'Все проекты',
    'Computer Vision',
    'NLP',
    'Backend',
    'Визуализация данных',
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и Подзаголовок */}
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
          Моя цифровая лаборатория
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Здесь я экспериментирую с технологиями, превращая идеи в работающие прототипы. Большинство проектов можно попробовать в действии.
        </p>

        {/* Панель фильтров */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-5 py-2 rounded-full text-lg font-medium transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-sky-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-sky-500 hover:text-sky-600'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Главный экспонат */}
        <FeaturedProjectSection />

        {/* Другие проекты */}
        <OtherProjectsSection activeFilter={activeFilter} />
      </div>
    </div>
  );
};

export default PortfolioPage;