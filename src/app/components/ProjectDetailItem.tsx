// src/app/components/ProjectDetailItem.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ProjectDetailItemProps = {
  item: {
    title: string;
    content: string;
  };
};

const ProjectDetailItem = ({ item }: ProjectDetailItemProps) => {
  // Логика состояния, точно такая же, как в ExperienceItem
  const [isOpen, setIsOpen] = useState(false);

  const createMarkup = (htmlString: string) => ({ __html: htmlString });

  return (
    <div className="border rounded-lg bg-slate-50/50">
      <button
        className={`details-toggle w-full text-left p-4 font-semibold text-slate-700 flex justify-between items-center hover:bg-slate-100/70 transition ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.title}</span>
        <ChevronDown className="chevron w-5 h-5" />
      </button>
      <div className={`details-content ${isOpen ? 'open' : ''}`}>
        <div className="px-4 pb-4">
            <p 
                className="text-slate-600"
                dangerouslySetInnerHTML={createMarkup(item.content)} 
            />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailItem;