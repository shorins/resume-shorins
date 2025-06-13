// src/app/components/AnimatedSection.tsx
"use client";

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация сработает только один раз
    threshold: 0.1,    // Сработает, когда 10% секции появится в экране
  });

  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-700 ease-out ${inView ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;