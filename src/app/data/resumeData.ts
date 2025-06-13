// src/app/data/resumeData.ts

export const resumeData = {
    hero: {
      name: "Шорин Сергей",
      title: "Junior Machine Learning Engineer",
      summary: [
        "Студент 3-го курса МАИ («Информатика и вычислительная техника») с сильной теоретической базой в ",
        " и практическим опытом в разработке и обучении моделей ",
        ". Имею опыт тимлидства в проектной деятельности и разработки backend-сервисов на ",
        ". Стремлюсь применять свои навыки для решения реальных бизнес-задач и создания инновационных продуктов.",
      ],
      links: {
        contact: "#contact",
        github: "https://github.com/MightyShorin",
      },
    },
    skills: {
        intro: "В этом разделе представлен мой набор инструментов. Навыки сгруппированы по категориям для наглядности. Диаграммы показывают мой уровень уверенности в каждой технологии. Наведите курсор на столбцы для получения подробной информации.",
        proficiency: { 'Уверенный': 3, 'Средний': 2, 'Начальный': 1 },
        charts: [
          {
            title: "Языки и Базы Данных",
            labels: ['Python', 'SQL', 'C++', 'MySQL', 'SQLite'],
            levels: [3, 2, 1, 2, 2], // Соответствует 'Уверенный', 'Средний', 'Начальный'...
          },
          {
            title: "ML Фреймворки и Библиотеки",
            labels: ['PyTorch', 'Scikit-learn', 'Pandas/NumPy', 'OpenCV', 'Aiogram'],
            levels: [2, 3, 2, 2, 3],
          },
          {
            title: "Ключевые ML Концепции",
            labels: ['Computer Vision', 'Transfer Learning', 'Object Detection', 'RAG', 'Fine-tuning'],
            levels: [3, 3, 2, 1, 3],
          },
          {
            title: "Инструменты и Технологии",
            labels: ['Git', 'Docker', 'FastAPI', 'Linux/Bash', 'REST API'],
            levels: [3, 1, 3, 2, 3],
          }
        ]
      },
    // В будущем здесь будут данные для других секций
  };