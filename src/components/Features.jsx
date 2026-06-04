import React from 'react';

const features = [
  {
    title: 'Premium Quality',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
    icon: (
      // Fish icon
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 26 C8 26, 14 14, 30 16 C42 17, 46 26, 46 26 C46 26, 42 36, 30 36 C14 38, 8 26, 8 26Z"
          stroke="#3a4a1a"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        {/* tail */}
        <path
          d="M8 26 C4 20, 2 14, 6 10 C8 18, 8 26, 8 26 C8 26, 8 34, 6 42 C2 38, 4 32, 8 26Z"
          stroke="#3a4a1a"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        {/* eye */}
        <circle cx="36" cy="24" r="2" stroke="#3a4a1a" strokeWidth="1.5" fill="none"/>
        {/* fin */}
        <path d="M22 16 C24 10, 30 10, 32 16" stroke="#3a4a1a" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Seasonal Vegetables',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
    icon: (
      // Carrot icon
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* carrot body */}
        <path
          d="M26 42 C18 38, 12 28, 16 18 C18 12, 24 10, 28 12 C34 14, 36 22, 34 30 C32 36, 28 40, 26 42Z"
          stroke="#3a4a1a"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        {/* carrot lines */}
        <path d="M19 22 C22 24, 28 24, 31 22" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
        <path d="M18 28 C21 30, 27 30, 30 28" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
        {/* leaves top */}
        <path d="M24 12 C22 6, 16 4, 14 8" stroke="#3a4a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M26 10 C26 4, 26 2, 26 6" stroke="#3a4a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M28 12 C30 6, 36 4, 38 8" stroke="#3a4a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Fresh Fruit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
    icon: (
      // Orange/citrus slice icon
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* outer circle */}
        <circle cx="26" cy="26" r="20" stroke="#3a4a1a" strokeWidth="1.5" fill="none"/>
        {/* inner circle */}
        <circle cx="26" cy="26" r="14" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        {/* segments */}
        <path d="M26 12 L26 26" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M26 26 L26 40" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M12 26 L26 26" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M26 26 L40 26" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M16 16 L26 26" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M26 26 L36 36" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M36 16 L26 26" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        <path d="M26 26 L16 36" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        {/* center dot */}
        <circle cx="26" cy="26" r="2" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
        {/* leaf on top */}
        <path d="M26 6 C24 4, 20 4, 22 8 C24 10, 26 8, 26 6Z" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Beige circle background with icon */}
              <div
                className="flex items-center justify-center rounded-full mb-6"
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f0efe8',
                }}
              >
                {f.icon}
              </div>
              <h3
                className="text-gray-900 text-xl font-serif mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}