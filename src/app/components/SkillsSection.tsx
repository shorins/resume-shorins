// src/app/components/SkillsSection.tsx
"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions, // <-- 1. ИМПОРТИРУЕМ ТИП
} from 'chart.js';
import { resumeData } from '@/app/data/resumeData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SkillsSection = () => {
  const { intro, charts } = resumeData.skills;
  const chartProficiencyLabels = ['Начальный', 'Средний', 'Уверенный'];

  // 2. ПРИМЕНЯЕМ ИМПОРТИРОВАННЫЙ ТИП К НАШЕМУ ОБЪЕКТУ
  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 3,
        grid: { color: '#e2e8f0' },
        ticks: {
          color: '#64748b',
          font: { weight: 600 },
          stepSize: 1,
          callback: (value: string | number) => {
            // The value can be a string or number, so we parse it
            const numericValue = typeof value === 'string' ? parseFloat(value) : value;
            return chartProficiencyLabels[numericValue - 1] || '';
          },
        },
      },
      y: {
        grid: { display: false },
        ticks: { color: '#1e293b', font: { size: 14, weight: 500 } },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#0f172a',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        displayColors: false,
        callbacks: {
          label: (context) => {
            const level = context.raw as number;
            return `Уровень: ${chartProficiencyLabels[level - 1]}`;
          },
        },
      },
    },
  };

  return (
    <section id="skills" className="py-8">
      <h2 className="section-title mb-12">Технический Стек</h2>
      <p className="max-w-3xl text-slate-600 mb-12 text-lg leading-relaxed">
        {intro}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {charts.map((chart, index) => {
          const chartData = {
            labels: chart.labels,
            datasets: [{
              data: chart.levels,
              backgroundColor: '#38bdf8',
              hoverBackgroundColor: '#0ea5e9',
              borderRadius: 5,
              barThickness: 20,
            }],
          };

          return (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-slate-800">{chart.title}</h3>
              <div className="chart-container">
                <Bar options={chartOptions} data={chartData} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;