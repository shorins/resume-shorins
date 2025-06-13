// src/app/components/ContactSection.tsx
import { Github, Mail, Send } from "lucide-react";
import KaggleIcon from "./icons/KaggleIcon"; // Наша новая иконка
import { resumeData } from "@/app/data/resumeData";

// Карта для сопоставления типа контакта с компонентом иконки
const iconMap = {
  email: Mail,
  telegram: Send,
  github: Github,
  kaggle: KaggleIcon,
};

const ContactSection = () => {
  const { title, intro, links } = resumeData.contact;

  return (
    <section id="contact" className="py-8">
      <h2 className="section-title mb-4 text-center">{title}</h2>
      <p className="max-w-2xl mx-auto text-center text-slate-600 mb-12 text-lg leading-relaxed">
        {intro}
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8">
        {links.map((link) => {
          // @ts-ignore
          const IconComponent = iconMap[link.type];
          return (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium text-slate-700 hover:text-sky-600 transition"
            >
              <IconComponent className="w-6 h-6 text-sky-500" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;