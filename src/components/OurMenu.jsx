import React from 'react';

const menuItems = [
  {
    name: 'Deep Sea Snow White\nCod Fillet',
    price: '$20',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Steak With Rosemary\nButter',
    price: '$22',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Cucumber Salad',
    price: '$18',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Natural Wine Pairing',
    price: '$90',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function OurMenu() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">

      {/* 🖼️ leaf-decor.png — top right real photo */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ width: '320px' }}
      >
        <img
          src="/images/leaf-decor.png"
          alt=""
          className="w-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-16">

        {/* Header */}
        <div className="mb-16">
          <h2
            className="text-gray-900 font-serif font-light mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(52px, 5vw, 88px)',
              lineHeight: '1',
            }}
          >
            Our Menu
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            This is a section of your menu. Give your section
            a brief description
          </p>
        </div>

        {/* Menu Grid — 2 columns */}
        <div className="grid grid-cols-2 gap-x-16">

          {menuItems.map((item, i) => (
            <div key={i} className="mb-2">
              {/* Price ABOVE dotted line */}
              <div className="flex justify-end mb-1">
                <span
                  className="text-gray-700 text-lg font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.price}
                </span>
              </div>

              {/* Dotted separator line */}
              <div
                className="w-full mb-4"
                style={{
                  borderTop: '1.5px dashed #c8c8c8',
                }}
              />

              {/* Dish name — large */}
              <h3
                className="text-gray-900 font-serif font-light mb-2 whitespace-pre-line"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(28px, 2.8vw, 44px)',
                  lineHeight: '1.15',
                }}
              >
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}