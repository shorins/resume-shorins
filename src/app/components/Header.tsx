"use client"; // Директива для клиентского компонента

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Навыки', href: '#skills' },
    { title: 'Опыт', href: '#experience' },
    { title: 'Проекты', href: '#projects' },
    { title: 'Образование', href: '#education' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-900">
          <Link href="#home">Сергей Шорин</Link>
        </div>
        
        {/* Десктопное меню */}
        <ul className="hidden md:flex space-x-8 text-slate-600 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="bg-sky-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-sky-600 transition duration-300 shadow-sm hover:shadow-md">
              Контакт
            </Link>
          </li>
        </ul>

        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-6 pb-4 flex flex-col space-y-3">
             {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-sky-600 font-medium">
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-sky-600 font-medium">
                Контакт
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;