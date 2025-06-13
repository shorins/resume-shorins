// src/app/components/HeroSection.tsx

import Link from 'next/link';
import { Github, Send } from 'lucide-react';
import { resumeData } from '@/app/data/resumeData'; // Импортируем наши данные

const HeroSection = () => {
  const { name, title, summary, links } = resumeData.hero;

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center items-start text-left">
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
        {name}
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-sky-500 mt-2 mb-6">
        {title}
      </h2>
      
      <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
        {summary[0]}<strong>ML/DL</strong>{summary[1]}<strong>компьютерного зрения</strong>{summary[2]}<strong>Python/FastAPI</strong>{summary[3]}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link 
          href={links.contact} 
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
        >
          <Send className="w-5 h-5" />
          Связаться со мной
        </Link>
        <a 
          href={links.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default HeroSection;