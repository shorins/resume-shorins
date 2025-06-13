// src/app/components/ExperienceItem.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Определяем тип для данных, которые компонент будет получать
type ExperienceItemProps = {
  item: {
    period: string;
    title: string;
    company: string;
    details: string[];
    result?: string;
  };
};

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  // Состояние для каждой отдельной карточки
  const [isOpen, setIsOpen] = useState(false);

  // Функция для безопасной вставки HTML из наших данных
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className="mb-12 timeline-item">
      <div className="card p-6">
        <p className="text-sm font-medium text-sky-600">{item.period}</p>
        <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
        <p className="text-lg font-medium text-slate-500 mt-1">{item.company}</p>

        <button 
          className={`details-toggle w-full text-left mt-4 font-semibold text-sky-600 hover:text-sky-700 flex justify-between items-center ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Подробнее</span>
          <ChevronDown className="chevron w-5 h-5" />
        </button>

        <div className={`details-content ${isOpen ? 'open' : ''}`}>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
            {item.details.map((detail, index) => (
              <li key={index} dangerouslySetInnerHTML={createMarkup(detail)} />
            ))}
            {item.result && (
              <li className="font-semibold text-slate-700 mt-2" dangerouslySetInnerHTML={createMarkup(item.result)} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;