import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar, FullscreenMenu } from './SharedBlogComponents';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// portfolio-detail-hero-bg.jpg  → hero bg (orange fruits/leaves scene)
// portfolio-detail-drink.jpg    → small left image (cocktail glass with lime)
// portfolio-detail-dish.jpg     → large right image (cod fillet plated)
// portfolio-detail-full.jpg     → full-width bottom image (fish on blue plate)
// prev-portfolio-bg.jpg         → previous page bg (steak)
// next-portfolio-bg.jpg         → next page bg (wine glass)
// ============================================================

export default function SinglePortfolioNoSidebarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* ── HERO ── */}
      <div className="relative w-full flex items-end" style={{ height: '420px', backgroundImage: 'url(/images/portfolio-detail-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* 🖼️ portfolio-detail-hero-bg.jpg */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        {/* Scroll text */}
        <div className="absolute right-1/2 top-1/2 z-10 flex flex-col items-center gap-2" style={{ transform: 'translate(50%, -50%)' }}>
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-px h-16 bg-white/30" />
        </div>
        <div className="relative z-10 px-20 pb-16">
          <h1 className="text-white font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: '1.1' }}>
            Deep Sea Snow White<br />Cod Fillet
          </h1>
        </div>
      </div>

      {/* ── SECTION 1: images left + text right ── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-12 items-start">

            {/* LEFT — two overlapping images */}
            <div className="relative" style={{ height: '420px' }}>
              {/* 🖼️ portfolio-detail-drink.jpg — top left smaller */}
              <div className="absolute overflow-hidden" style={{ top: 0, left: 0, width: '200px', height: '220px', zIndex: 10 }}>
                <img src="/images/portfolio-detail-drink.jpg" alt="Drink" className="w-full h-full object-cover" />
              </div>
              {/* 🖼️ portfolio-detail-dish.jpg — bottom right larger */}
              <div className="absolute overflow-hidden" style={{ bottom: 0, right: 0, width: '280px', height: '300px', zIndex: 20 }}>
                <img src="/images/portfolio-detail-dish.jpg" alt="Dish" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* RIGHT — text blocks */}
            <div className="pt-4">
              <h2 className="text-gray-900 font-serif font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.5vw, 36px)' }}>Melt in Your Mouth</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
              </p>

              <h2 className="text-gray-900 font-serif font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.5vw, 36px)' }}>The Best Taste</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: text + Cooking Suggestions ── */}
      <section className="bg-white pb-12">
        <div className="max-w-4xl mx-auto px-16">
          <p className="text-gray-500 text-sm leading-loose mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
          </p>
          <h2 className="text-gray-900 font-serif font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.5vw, 36px)' }}>Cooking Suggestions</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Full-width image */}
        <div className="max-w-4xl mx-auto px-16">
          {/* 🖼️ portfolio-detail-full.jpg */}
          <div className="w-full overflow-hidden" style={{ height: '340px' }}>
            <img src="/images/portfolio-detail-full.jpg" alt="Full dish" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <section className="bg-[#f0efe8] py-10">
        <div className="max-w-4xl mx-auto px-16">
          <div className="grid grid-cols-3 gap-4 items-center">

            {/* PREVIOUS */}
            <div className="cursor-pointer group" onClick={() => navigate('/portfolio')}>
              <span className="flex items-center gap-2 text-gray-500 text-xs tracking-widest uppercase mb-2 group-hover:text-[#5a6e2a] transition-colors">
                <span>←</span> PREVIOUS PAGE
              </span>
              <p className="text-gray-900 font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>Strip Steak With Rosemary Butter</p>
            </div>

            {/* CENTER grid icon */}
            <div className="flex justify-center">
              <button onClick={() => navigate('/portfolio')} className="w-10 h-10 border border-gray-400 flex items-center justify-center hover:border-[#5a6e2a] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="0" y="0" width="6" height="6" fill="#888" rx="0.5"/>
                  <rect x="10" y="0" width="6" height="6" fill="#888" rx="0.5"/>
                  <rect x="0" y="10" width="6" height="6" fill="#888" rx="0.5"/>
                  <rect x="10" y="10" width="6" height="6" fill="#888" rx="0.5"/>
                </svg>
              </button>
            </div>

            {/* NEXT */}
            <div className="cursor-pointer group text-right" onClick={() => navigate('/portfolio')}>
              <span className="flex items-center gap-2 justify-end text-gray-500 text-xs tracking-widest uppercase mb-2 group-hover:text-[#5a6e2a] transition-colors">
                NEXT PAGE <span>→</span>
              </span>
              <p className="text-gray-900 font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>Option of natural wine available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}