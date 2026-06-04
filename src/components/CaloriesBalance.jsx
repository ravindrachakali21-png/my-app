import React, { useState } from 'react';

const categories = [
  { label: 'Starters', img: '/images/calories-starter.jpg' },   // 🖼️ IMAGE
  { label: 'Mains',    img: '/images/calories-main.jpg' },      // 🖼️ IMAGE
  { label: 'Soups',    img: '/images/calories-soup.jpg' },      // 🖼️ IMAGE
];

export default function CaloriesBalance() {
  const [active, setActive] = useState(1); // Mains active by default

  return (
    <section className="bg-[#f5f5ee] py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-serif font-light text-gray-900 mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Calories Energy<br />Balance
          </h2>
          <p className="text-gray-400 text-sm">
            Lorem Lorem consectetur adipiscing elit.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {categories.map((c, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer overflow-hidden relative ${active === i ? 'ring-2 ring-[#5a6e2a]' : ''}`}
            >
              <div className="w-full h-48 bg-gray-300 overflow-hidden">
                <img src={c.img} alt={c.label} className="w-full h-full object-cover" />
              </div>
              {active === i && (
                <div className="absolute top-3 right-3 bg-[#5a6e2a] text-white text-xs px-2 py-1 uppercase tracking-wider">
                  {c.label}
                </div>
              )}
              {active !== i && (
                <div className="absolute top-3 left-3 text-white text-xs px-2 py-1 uppercase tracking-wider bg-black/30">
                  {c.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            <span className="text-[#3a4a1a] font-semibold">"</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ipsum
            ets. Purus. Cursus ipsum est. adipiscing elit.{' '}
            <span className="text-[#3a4a1a] font-semibold">
              Purus lorem ipsum ets Purus Cursus ipsum est.
            </span>{' '}
            ultrices purus. Lorem ipsum purus amet.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* 🖼️ IMAGE: avatar.jpg */}
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="/images/avatar.jpg" alt="Julia Doe" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-gray-900 text-sm font-medium">Julia Doe</p>
                <p className="text-gray-400 text-xs">Host</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <button className="hover:text-gray-600">←</button>
              <span>1 / 3</span>
              <button className="hover:text-gray-600">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}