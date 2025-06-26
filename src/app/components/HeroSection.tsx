"use client";
// src/app/components/HeroSection.tsx

import Link from 'next/link';
import { Github, Send, MapPin } from 'lucide-react';
import { resumeData } from '@/app/data/resumeData'; // Импортируем наши данные
import { useEffect, useRef } from 'react';



const HeroSection = () => {
  const { name, title, summary, links } = resumeData.hero;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Проверяем, есть ли уже скрипт
    if (typeof window !== 'undefined' && !window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = () => {
        
        window.ymaps.ready(() => {
          if (mapRef.current && window.ymaps) {
            
            const map = new window.ymaps.Map(mapRef.current, {
              center: [55.7558, 37.6176], // Москва
              zoom: 10,
              controls: [], // убираем все контролы
              suppressMapOpenBlock: true,
              suppressYandexSearch: true
            });
            // НЕ отключаем behaviors — карта интерактивна
            // Добавляем метку
            
            const placemark = new window.ymaps.Placemark([55.7558, 37.6176], {
              balloonContent: 'Я живу здесь — Москва',
              hintContent: 'Моё местоположение'
            }, {
              preset: 'islands#redDotIcon'
            });
            map.geoObjects.add(placemark);
          }
        });
      };
      document.body.appendChild(script);
    } else if (window.ymaps && mapRef.current) {
      window.ymaps.ready(() => {
        if (mapRef.current) {
          const map = new window.ymaps.Map(mapRef.current, {
          center: [55.7558, 37.6176],
          zoom: 10,
          controls: [], // убираем все контролы
          suppressMapOpenBlock: true,
          suppressYandexSearch: true
        });
        // НЕ отключаем behaviors — карта интерактивна
        // Добавляем метку
        
        const placemark = new window.ymaps.Placemark([55.7558, 37.6176], {
          balloonContent: 'Я живу здесь — Москва',
          hintContent: 'Моё местоположение'
        }, {
          preset: 'islands#redDotIcon'
        });
        map.geoObjects.add(placemark);
        }
      });
    }
  }, []);

  return (
    <section id="home" className="section-anchor flex flex-col md:flex-row justify-between items-start text-left gap-8">
      <div className="flex-1">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
          {name}
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-sky-500 mt-2 mb-6">
          {title}
        </h2>
        
        <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
          {summary[0]}<strong>ML/DL</strong>{summary[1]}<strong>компьютерного зрения</strong>{summary[2]}<strong>Python/FastAPI</strong>{summary[3]}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
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
      </div>
      <div className="hidden md:flex flex-col flex-1 max-w-md min-w-[320px] h-[370px] mt-8 md:mt-0">
        <div className="h-[320px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white dark:bg-slate-800" ref={mapRef}></div>
        <div className="card mt-4 flex items-center gap-3 p-4 text-base">
          <MapPin className="w-6 h-6 text-sky-500 shrink-0" />
          <span>
            <span className="font-semibold text-slate-600 dark:text-sky-400">Живу в России, <span className="text-sky-500 dark:text-sky-400">Москва</span>.</span><br/>
            <span style={{ color: 'rgb(71 85 105)' }}>Не готов к релокации, открыт к <span className="font-medium">удалённой</span> и <span className="font-medium">очной</span> работе.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;