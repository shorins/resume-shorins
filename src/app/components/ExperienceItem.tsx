// src/app/components/ExperienceItem.tsx
"use client";

import { useState } from "react";
import { ChevronDown, Users, LayoutGrid, Code, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceItemProps = {
  item: {
    period: string;
    title: string;
    company: string;
    details?: string[];
    roles?: readonly {
      type: "leadership" | "architecture" | "development";
      title: string;
      description: string;
    }[];
    result?: string;
    github?: string;
  };
};

const iconMap = {
  leadership: Users,
  architecture: LayoutGrid,
  development: Code,
};

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(item.roles ? item.roles[0].type : '');

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className="mb-12 timeline-item">
      <div className="card p-6">
        <p className="text-sm font-medium text-sky-600">{item.period}</p>
        <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
        <p className="text-lg font-medium text-slate-500 mt-1">{item.company}</p>

        {item.details && (
          <button 
            className={`details-toggle w-full text-left mt-4 font-semibold text-sky-600 hover:text-sky-700 flex justify-between items-center ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Подробнее</span>
            <ChevronDown className="chevron w-5 h-5" />
          </button>
        )}

        {item.details && (
          <div className={`details-content ${isOpen ? 'open' : ''}`}>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
              {item.details.map((detail, index) => (
                <li key={index} dangerouslySetInnerHTML={createMarkup(detail)} />
              ))}
            </ul>
          </div>
        )}

        {item.roles && (
          <div className="mt-4">
            <div className="flex border-b border-slate-200">
              {item.roles.map((role) => {
                const IconComponent = iconMap[role.type];
                return (
                  <button
                    key={role.type}
                    className={`flex-1 py-3 px-2 text-center text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-all duration-300
                      ${activeTab === role.type
                        ? 'text-sky-600 border-sky-500'
                        : 'text-slate-500 border-transparent hover:bg-slate-50'
                      }`}
                    onClick={() => setActiveTab(role.type)}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {role.title}
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait">
              {item.roles.map((role) =>
                activeTab === role.type && (
                  <motion.div
                    key={role.type}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pb-4 border-b border-slate-200"
                  >
                    <p className="text-slate-600" dangerouslySetInnerHTML={createMarkup(role.description)} />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        )}

        {item.result && (
          <div className="mt-4 pt-4">
            <p className="font-semibold text-slate-700" dangerouslySetInnerHTML={createMarkup(item.result)} />
          </div>
        )}

        {item.github && (
          <div className="mt-4 pt-4 flex items-center">
            <a 
              href={item.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-600 hover:text-sky-700 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="font-semibold">GitHub Repository</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;