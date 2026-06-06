import React from 'react';

const MonsteraLeaf = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20 C70 20, 30 50, 20 90 C10 130, 25 175, 60 200 C75 210, 90 215, 100 215 C110 215, 125 210, 140 200 C175 175, 190 130, 180 90 C170 50, 130 20, 100 20Z" stroke="#5a6e2a" strokeWidth="1.2" fill="none"/>
    <path d="M100 20 L100 215" stroke="#5a6e2a" strokeWidth="1" fill="none"/>
    <path d="M100 55 C82 58, 48 65, 28 82" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 85 C78 87, 40 95, 22 115" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 115 C80 118, 45 128, 32 150" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 145 C84 148, 60 158, 54 178" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 55 C118 58, 152 65, 172 82" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 85 C122 87, 160 95, 178 115" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 115 C120 118, 155 128, 168 150" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
    <path d="M100 145 C116 148, 140 158, 146 178" stroke="#5a6e2a" strokeWidth="0.8" fill="none"/>
  </svg>
);

export default function ExcellentCook() {
  return (
    <section className="bg-[#f0efe8] w-full overflow-hidden">

      {/* ── MOBILE LAYOUT ── */}
      <div className="block lg:hidden">
        {/* Food plate image full width */}
        <div className="w-full overflow-hidden" style={{ height: '280px' }}>
          <img src="/images/food-plate.jpg" alt="Food Plate" className="w-full h-full object-cover" />
        </div>
        {/* Chef image full width */}
        <div className="w-full overflow-hidden" style={{ height: '320px' }}>
          <img src="/images/chef.jpg" alt="Chef" className="w-full h-full object-cover object-top" />
        </div>
        {/* Text */}
        <div className="px-6 py-10 bg-[#f0efe8]">
          <h2
            className="text-gray-900 font-serif font-light leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 10vw, 72px)', lineHeight: '1.05' }}
          >
            Excellent<br />cook
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Purus lorem id penatibus imperdiet. Turpis egestas ultricies
            purus auctor tincidunt lacus nunc.
          </p>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div
        className="hidden lg:grid"
        style={{ gridTemplateColumns: '55% 45%', minHeight: '600px' }}
      >
        {/* LEFT — beige bg + monstera leaf + food plate + chef */}
        <div className="relative bg-[#f0efe8]" style={{ minHeight: '600px' }}>
          <MonsteraLeaf
            className="absolute z-0 opacity-20"
            style={{ width: '200px', height: '240px', top: '20px', left: '60px' }}
          />
          {/* food-plate.jpg */}
          <div
            className="absolute z-10 overflow-hidden"
            style={{ top: '80px', left: '40px', width: '300px', height: '360px', borderRadius: '6px' }}
          >
            <img src="/images/food-plate.jpg" alt="Food Plate" className="w-full h-full object-cover" />
          </div>
          {/* chef.jpg */}
          <div
            className="absolute z-20 overflow-hidden"
            style={{ top: '0px', left: '160px', right: '0px', bottom: '0px' }}
          >
            <img src="/images/chef.jpg" alt="Chef" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        {/* RIGHT — text + monstera bottom right */}
        <div className="relative bg-[#f0efe8] flex flex-col justify-center px-12 py-16">
          <MonsteraLeaf
            className="absolute z-0 opacity-20"
            style={{ width: '200px', height: '240px', bottom: '20px', right: '20px' }}
          />
          <h2
            className="relative z-10 text-gray-900 font-serif font-light mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 5.5vw, 96px)', lineHeight: '1.0' }}
          >
            Excellent<br />cook
          </h2>
          <p className="relative z-10 text-gray-500 text-sm leading-relaxed" style={{ maxWidth: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Purus lorem id penatibus imperdiet. Turpis egestas ultricies
            purus auctor tincidunt lacus nunc.
          </p>
        </div>
      </div>

    </section>
  );
}