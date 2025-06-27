import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: {
    default: 'Резюме: Шорин Сергей | Junior Machine Learning Engineer',
    template: '%s | Шорин Сергей',
  },
  description: 'Резюме Junior ML Engineer с опытом в Computer Vision, FastAPI и PyTorch. Проекты, навыки, образование.',
  keywords: ['ML Engineer', 'Machine Learning', 'Computer Vision', 'FastAPI', 'PyTorch', 'Резюме', 'Сергей Шорин', 'Junior ML'],
  authors: { name: 'Сергей Шорин' },
  openGraph: {
    title: 'Резюме: Шорин Сергей | Junior Machine Learning Engineer',
    description: 'Резюме Junior ML Engineer с опытом в Computer Vision, FastAPI и PyTorch. Проекты, навыки, образование.',
    url: 'https://your-domain.com', // Замените на ваш реальный домен
    siteName: 'Резюме Сергея Шорина',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg', // Замените на путь к вашему изображению OpenGraph
        width: 1200,
        height: 630,
        alt: 'Резюме Сергея Шорина',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Резюме: Шорин Сергей | Junior Machine Learning Engineer',
    description: 'Резюме Junior ML Engineer с опытом в Computer Vision, FastAPI и PyTorch. Проекты, навыки, образование.',
    creator: '@your_twitter_handle', // Замените на ваш Twitter handle
    images: ['https://your-domain.com/og-image.jpg'], // Замените на путь к вашему изображению Twitter
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="smooth-scroll">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
