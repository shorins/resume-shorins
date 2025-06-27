// src/app/data/portfolioData.ts

export const portfolioData = {
  featuredProject: {
    title: "Сегментация нефтяных пятен",
    description: "Проект по разработке сервиса для автоматической сегментации нефтяных разливов на спутниковых снимках с использованием глубокого обучения. Решение позволяет быстро и точно определять границы загрязнений, что критически важно для оперативного реагирования и минимизации экологического ущерба.",
    technologies: ["YOLOv11", "FastAPI", "PyTorch", "Next.js"],
    demoLink: "#oil-spill-demo", // Якорная ссылка на демо
    githubLink: "https://github.com/oil-spill-ai/oil-spill-devops",
    demo: {
      title: "Интерактивная демонстрация",
      images: [
        { src: "/oil/1.jpg", alt: "Спутниковый снимок 1", maskSrc: "/oil/1-res.jpg" },
        { src: "/oil/2.jpg", alt: "Спутниковый снимок 2", maskSrc: "/oil/2-res.jpg" },
        { src: "/oil/3.jpg", alt: "Спутниковый снимок 3", maskSrc: "/oil/3-res.jpg" },
      ],
    },
  },
  otherProjects: [
    {
      title: "Telegram Bot с AI",
      description: "Разработка Telegram-бота для автоматизации онбординга сотрудников с использованием AI и RAG.",
      technologies: ["Aiogram", "Python", "RAG", "NLP"],
      githubLink: "#", // Замените на реальную ссылку
      demoLink: "#", // Замените на реальную ссылку
      image: "/telegram-bot.jpg", // Замените на реальное изображение
      category: "Backend",
    },
    {
      title: "Анализ данных Kaggle",
      description: "Исследование и визуализация данных для соревнования Kaggle.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubLink: "#", // Замените на реальную ссылку
      demoLink: "#", // Замените на реальную ссылку
      image: "/data-analysis.jpg", // Замените на реальное изображение
      category: "Визуализация данных",
    },
    {
      title: "Система рекомендаций",
      description: "Разработка прототипа системы рекомендаций на основе коллаборативной фильтрации.",
      technologies: ["Python", "Scikit-learn", "Implicit"],
      githubLink: "#", // Замените на реальную ссылку
      demoLink: "#", // Замените на реальную ссылку
      image: "/recommendation.jpg", // Замените на реальное изображение
      category: "NLP",
    },
    {
      title: "Распознавание лиц",
      description: "Проект по распознаванию лиц на изображениях с использованием сверточных нейронных сетей.",
      technologies: ["Python", "OpenCV", "PyTorch"],
      githubLink: "#", // Замените на реальную ссылку
      demoLink: "#", // Замените на реальную ссылку
      image: "/face-recognition.jpg", // Замените на реальное изображение
      category: "Computer Vision",
    },
  ],
};
