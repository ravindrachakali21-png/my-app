import React from 'react';

const menuItems = [
  { name: 'Deep Sea Snow White\nCod Fillet', price: '$20', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Steak With Rosemary\nButter',     price: '$22', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Cucumber Salad',                  price: '$18', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Natural Wine Pairing',            price: '$90', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function OurMenu() {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">

      {/* Leaf decor — ONLY visible on large screens, hidden on mobile */}
      <div className="absolute top-0 right-0 w-32 lg:w-48 opacity-60 pointer-events-none hidden lg:block">
        <img src="/images/leaf-decor.png" alt="" className="w-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-8 lg:mb-16">
          <h2
            className="text-gray-900 font-serif font-light mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 88px)' }}
          >
            Our Menu
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            This is a section of your menu. Give your section a brief description
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-4 lg:mb-6" />

        {/* Menu Items — 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-16">
          {menuItems.map((item, i) => (
            <div key={i} className="py-4 lg:py-6 border-b border-gray-200">
              <div className="flex justify-end mb-1">
                <span
                  className="text-gray-600 text-sm lg:text-base font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.price}
                </span>
              </div>
              <div className="border-t border-dashed border-gray-300 mb-3" />
              <h3
                className="text-gray-900 font-serif font-light whitespace-pre-line mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(20px, 3vw, 36px)',
                  lineHeight: '1.2',
                }}
              >
                {item.name}
              </h3>
              <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}