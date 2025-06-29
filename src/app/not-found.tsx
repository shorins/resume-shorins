
// src/app/not-found.tsx
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  const logLines = [
    '[1] > model.predict(url_path="/несуществующая-страница")',
    '[2] > Initializing navigation model v2.6...',
    '[3] > Analyzing request...',
    '[4] > Searching for matching patterns in existing routes...',
    '[5] > 0 patterns found.',
    '[6] > Attempting probabilistic prediction...',
    '[7] > Prediction failed. Confidence score: 0.0404',
    '[8] >',
    '[9] > ERROR: PageNotFoundError (404)',
    '[10]>',
    '[11]> Кажется, даже нейросеть не смогла найти то, что вы ищете.',
    '[12]> Но вот несколько проверенных маршрутов:',
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center font-mono p-4">
      <div className="w-full max-w-3xl bg-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
        {/* Terminal Header */}
        <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-6">
          {logLines.map((line, index) => (
            <p
              key={index}
              className="log-line"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {line}
            </p>
          ))}

          <div className="mt-4">
            <Link href="/" className="log-line inline-block text-sky-400 hover:underline" style={{ animationDelay: '2.0s' }}>
              &gt; cd /home (На главную)
            </Link>
          </div>
          <div>
            <Link href="/portfolio" className="log-line inline-block text-sky-400 hover:underline" style={{ animationDelay: '2.1s' }}>
              &gt; cd /portfolio (В портфолио)
            </Link>
          </div>
          <div>
            <Link href="/#contact" className="log-line inline-block text-sky-400 hover:underline" style={{ animationDelay: '2.2s' }}>
              &gt; cd /contact (К контактам)
            </Link>
          </div>

          <div className="log-line" style={{ animationDelay: '2.4s' }}>
            &gt; <span className="blinking-cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
