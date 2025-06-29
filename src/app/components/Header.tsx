// src/app/components/Header.tsx
"use client"; 

// 1. Импортируем хуки useState и useEffect
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
        </div>
        
        <ul className="hidden md:flex space-x-8 text-slate-600 font-medium items-center">
          {navLinks.map((link) => {
            const isAnchorLink = link.href.startsWith('#');
            const isCurrentPage = pathname === link.href;
            const isHomePage = pathname === '/';

            const handleClick = (e: React.MouseEvent) => {
              if (isAnchorLink && !isHomePage) {
                e.preventDefault();
                setIsOpen(false); // Close mobile menu if open
                router.push('/');
                setTimeout(() => {
                  const element = document.getElementById(link.href.substring(1));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100); // Small delay to allow page to load
              } else if (isAnchorLink && isHomePage) {
                // Handle smooth scroll on homepage
                e.preventDefault();
                setIsOpen(false); // Close mobile menu if open
                const element = document.getElementById(link.href.substring(1));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                setIsOpen(false); // Close mobile menu if open
              }
            };

            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav-link ${isCurrentPage ? 'active' : ''}`}
                  onClick={handleClick}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/portfolio" className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}>
              Портфолио
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="bg-sky-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-sky-600 transition duration-300 shadow-sm hover:shadow-md"
              onClick={(e) => {
                const isAnchorLink = true; // It's always an anchor link
                const isHomePage = pathname === '/';

                if (isAnchorLink && !isHomePage) {
                  e.preventDefault();
                  setIsOpen(false); // Close mobile menu if open
                  router.push('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100); // Small delay to allow page to load
                } else if (isAnchorLink && isHomePage) {
                  // Handle smooth scroll on homepage
                  e.preventDefault();
                  setIsOpen(false); // Close mobile menu if open
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setIsOpen(false); // Close mobile menu if open
                }
              }}
            >
              Контакт
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <ul className="px-6 pb-4 flex flex-col space-y-3">
             {navLinks.map((link) => {
              const isAnchorLink = link.href.startsWith('#');
              const isCurrentPage = pathname === link.href;
              const isHomePage = pathname === '/';

              const handleClick = (e: React.MouseEvent) => {
                if (isAnchorLink && !isHomePage) {
                  e.preventDefault();
                  setIsOpen(false); // Close mobile menu if open
                  router.push('/');
                  setTimeout(() => {
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100); // Small delay to allow page to load
                } else if (isAnchorLink && isHomePage) {
                  // Handle smooth scroll on homepage
                  e.preventDefault();
                  setIsOpen(false); // Close mobile menu if open
                  const element = document.getElementById(link.href.substring(1));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setIsOpen(false); // Close mobile menu if open
                }
              };

              return (
                <li key={link.href}>
                  <Link href={link.href} onClick={handleClick} className={`block py-2 text-slate-600 hover:text-sky-600 font-medium ${isCurrentPage ? 'active' : ''}`}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className={`block py-2 text-slate-600 hover:text-sky-600 font-medium ${pathname === '/portfolio' ? 'active' : ''}`}>
                Портфолио
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={(e) => {
                const isAnchorLink = true; // It's always an anchor link
                const isHomePage = pathname === '/';

                if (isAnchorLink && !isHomePage) {
                  e.preventDefault();
                  setIsOpen(false); // Close mobile menu if open
                  router.push('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100); // Small delay to allow page to load
                } else if (isAnchorLink && isHomePage) {
                  // Handle smooth scroll on homepage
                  e.preventDefault();
                  setIsOpen(false); // Close mobile menu if open
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setIsOpen(false); // Close mobile menu if open
                }
              }} className="block py-2 text-slate-600 hover:text-sky-600 font-medium">
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