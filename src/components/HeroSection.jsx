import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#3a4a1a] w-full relative overflow-hidden">
      <div className="mx-auto px-16 pt-32 relative">

        {/* ── ROW 1: Text left | Hero food image right ── */}
        <div className="grid grid-cols-2 gap-8 items-start">

          {/* LEFT — headline + scroll */}
          <div className="relative">
            <h1
              className="text-white font-serif font-light leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 4.5vw, 88px)', lineHeight: '1.1' }}
            >
              Healthy Eating<br />
              is important<br />
              part of lifestyle
            </h1>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Megan congue eros.
            </p>
            <div className="flex items-start gap-3">
              <div className="w-px h-16 bg-white/30 mt-1" />
              <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Scroll
              </span>
            </div>
          </div>

          {/* RIGHT — hero food image */}
          <div>
            <div className="w-full overflow-hidden" style={{ height: '500px' }}>
              <img src="/images/hero-food.jpg" alt="Hero Food" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-3 mt-4 ml-2">
              <div className="rounded-full overflow-hidden border border-white/10" style={{ width: '100px', height: '100px' }}>
                <img src="/images/spice1.jpg" alt="Spice 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-full overflow-hidden border border-white/10" style={{ width: '100px', height: '100px' }}>
                <img src="/images/spice2.jpg" alt="Spice 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-full overflow-hidden border border-white/10" style={{ width: '100px', height: '100px' }}>
                <img src="/images/spice3.jpg" alt="Spice 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 2: salad left | text center | spice bottles right ── */}
        <div className="grid mt-8" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="overflow-hidden" style={{ height: '380px' }}>
            <img src="/images/salad-bowl.jpg" alt="Salad Bowl" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between px-10 py-4">
            <p className="text-white/60 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
            </p>
            <div>
              <h3 className="text-white font-serif font-light mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 2.5vw, 44px)', lineHeight: '1.2' }}>
                Start to plan<br />your diet today
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
              </p>
            </div>
          </div>
          <div className="overflow-hidden" style={{ height: '380px' }}>
            <img src="/images/spices.jpg" alt="Spice Bottles" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}