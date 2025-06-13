// src/app/components/Footer.tsx
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 text-center py-8">
      <div className="container mx-auto">
        <p className="flex items-center justify-center gap-2">
          &copy; 2025 Сергей Шорин. Собрано с <Coffee className="inline-block w-4 h-4" /> и кодом.
        </p>
      </div>
    </footer>
  );
};

export default Footer;