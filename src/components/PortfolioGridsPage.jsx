import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullscreenMenu from './FullscreenMenu';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// portfolio-hero-bg.jpg  → hero background (rustic wooden table with bowls)
// portfolio-cod.jpg      → Premium Deep Sea Snow White Cod Fillet
// portfolio-wine.jpg     → Option of natural wine available
// portfolio-soup.jpg     → Best pumpkin for pumpkin soup
// portfolio-steak.jpg    → Strip Steak With Rosemary Butter
// portfolio-abalone.jpg  → Braised Sliced Abalone Fish Maw
// portfolio-prawn.jpg    → Pan Fried Live Prawn with Superior Soy Sauce
// ============================================================

const ALL_ITEMS = [
  { id: 1, img: '/images/portfolio-cod.jpg',     title: 'Premium Deep Sea Snow White Cod Fillet',          tags: ['Launch', 'Dinner'] },
  { id: 2, img: '/images/portfolio-wine.jpg',    title: 'Option of natural wine available',                tags: ['Drink', 'Fruits'] },
  { id: 3, img: '/images/portfolio-soup.jpg',    title: 'Best pumpkin for pumpkin soup',                   tags: ['Launch', 'Starters'] },
  { id: 4, img: '/images/portfolio-steak.jpg',   title: 'Strip Steak With Rosemary Butter',               tags: ['Dinner', 'Launch'] },
  { id: 5, img: '/images/portfolio-abalone.jpg', title: 'Braised Sliced Abalone,Fish Maw with Premium Seafood', tags: ['Cold Dishes', 'Starters'] },
  { id: 6, img: '/images/portfolio-prawn.jpg',   title: 'Pan Fried Live Prawn with Superior Soy Sauce',   tags: ['Starter', 'Dinner'] },
];

const CATEGORIES = ['All', 'Starter', 'Launch', 'Dinner', 'Drinks', 'Sweets', 'Fruits'];

function PortfolioCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden group cursor-pointer" style={{ height: '340px' }} onClick={() => navigate('/portfolio/detail')}>
      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 z-20 p-6">
        <h3 className="text-white font-serif font-light leading-tight mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 1.8vw, 26px)' }}>{item.title}</h3>
        <div className="flex items-center gap-2">
          {item.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span className="text-white/70 text-xs">{tag}</span>
              {i < item.tags.length - 1 && <span className="text-white/40 text-xs">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 border border-white flex items-center justify-center">
          <span className="text-white text-sm">→</span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGridsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Launch');

  return (
    <div className="bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-4">
          <div className="border border-white px-3 py-1">
            <span className="text-white font-serif text-2xl font-bold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>FoodZero</span>
          </div>
          <button onClick={() => setMenuOpen(true)} className="flex flex-col gap-1.5 ml-2 cursor-pointer">
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white text-sm tracking-wider hidden sm:block">+86 852 346 000</span>
          <button onClick={() => navigate('/contact')} className="border border-white text-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition-all">Reservations</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '420px', backgroundImage: 'url(/images/portfolio-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/45 z-0" />
        <div className="absolute right-1/2 bottom-10 z-10 flex flex-col items-center gap-2" style={{ transform: 'translateX(50%)' }}>
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-px h-16 bg-white/30" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-white font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5.5vw, 88px)', lineHeight: '1.1' }}>Portfolio - Grids</h1>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-20">
          <div className="flex items-center gap-8 justify-center">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-wide transition-colors pb-1 ${activeCategory === cat ? 'text-gray-900 border-b-2 border-gray-900 font-medium' : 'text-gray-400 hover:text-gray-700'}`}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-20">
          {/* ROW 1: large left (2/3) + small right (1/3) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2"><PortfolioCard item={ALL_ITEMS[0]} /></div>
            <div className="col-span-1"><PortfolioCard item={ALL_ITEMS[1]} /></div>
          </div>
          {/* ROW 2: small left (1/3) + large right (2/3) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1"><PortfolioCard item={ALL_ITEMS[2]} /></div>
            <div className="col-span-2"><PortfolioCard item={ALL_ITEMS[3]} /></div>
          </div>
          {/* ROW 3: large left (2/3) + small right (1/3) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2"><PortfolioCard item={ALL_ITEMS[4]} /></div>
            <div className="col-span-1"><PortfolioCard item={ALL_ITEMS[5]} /></div>
          </div>
          {/* Loading button */}
          <div className="flex justify-center mt-12">
            <button className="border border-gray-300 text-gray-500 px-10 py-3 text-sm tracking-wider hover:border-gray-500 hover:text-gray-700 transition-all">Loading...</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2d3a10] text-white pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-16">
          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <span className="text-white font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', lineHeight: '1.1' }}>Food<br />Zero.</span>
            </div>
            <div>
              <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-5">Contact</h4>
              <p className="text-white/60 text-xs leading-loose">+1 (86) 852 346 000</p>
              <p className="text-white/60 text-xs leading-loose">info@foodzero.com</p>
              <p className="text-white/60 text-xs leading-loose mt-2">1959 Sepulveda Blvd</p>
              <p className="text-white/60 text-xs leading-loose">Culver City, CA, 90230</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-5">Never Miss a Recipe</h4>
              <div className="flex mb-3">
                <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border border-white/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none" />
                <button className="bg-[#8a9e2a] text-white px-5 py-2 text-sm hover:bg-[#9ab030] transition-colors">Subscribe</button>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">Join our subscribers and get best recipe delivered each week!</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex justify-between items-center">
            <p className="text-white/40 text-xs">© 2020 Zero Inc. All rights Reserved</p>
            <div className="flex gap-4 items-center">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>

      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}