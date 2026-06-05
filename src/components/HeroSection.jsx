import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#3a4a1a] w-full relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 relative">

        {/* ── ROW 1: Text left | Hero food image right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* LEFT */}
          <div className="relative">
            <h1
              className="text-white font-serif font-light leading-tight mb-4 lg:mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 88px)', lineHeight: '1.1' }}
            >
              Healthy Eating<br />
              is important<br />
              part of lifestyle
            </h1>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8 lg:mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Megan congue eros.
            </p>
            <div className="flex items-start gap-3">
              <div className="w-px h-12 lg:h-16 bg-white/30 mt-1" />
              <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Scroll
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="w-full overflow-hidden" style={{ height: 'clamp(260px, 50vw, 500px)' }}>
              <img src="/images/hero-food.jpg" alt="Hero Food" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 lg:gap-3 mt-3 lg:mt-4 ml-1 lg:ml-2">
              {['spice1','spice2','spice3'].map((s,i) => (
                <div key={i} className="rounded-full overflow-hidden border border-white/10"
                  style={{ width: 'clamp(70px, 10vw, 100px)', height: 'clamp(70px, 10vw, 100px)' }}>
                  <img src={`/images/${s}.jpg`} alt={`Spice ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ROW 2: salad | text | bottles ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 lg:mt-8 gap-0">
          <div className="overflow-hidden" style={{ height: 'clamp(220px, 40vw, 380px)' }}>
            <img src="/images/salad-bowl.jpg" alt="Salad Bowl" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between px-4 lg:px-10 py-6 lg:py-4">
            <p className="text-white/60 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
            </p>
            <div className="mt-4 lg:mt-0">
              <h3 className="text-white font-serif font-light mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: '1.2' }}>
                Start to plan<br />your diet today
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
              </p>
            </div>
          </div>
          <div className="overflow-hidden" style={{ height: 'clamp(220px, 40vw, 380px)' }}>
            <img src="/images/spices.jpg" alt="Spice Bottles" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}