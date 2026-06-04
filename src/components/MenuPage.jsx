import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullscreenMenu from './FullscreenMenu';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// menu-hero-bg.jpg     → hero background (restaurant dining table)
// starters-food.jpg    → Starters left image (tomato mozzarella salad)
// mains-food.jpg       → Mains right image (steak on white plate)
// drinks-food.jpg      → Pastries & Drinks left (cocktail glasses)
// lemon-decor.png      → lemon illustration top right of Starters
// ============================================================

function MenuItem({ name, price, desc }) {
  return (
    <div className="mb-8">
      <div className="flex justify-end mb-1">
        <span className="text-gray-600 text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{price}</span>
      </div>
      <div className="w-full mb-3" style={{ borderTop: '1.5px dashed #d0cfc8' }} />
      <h3 className="text-gray-900 font-light mb-2 whitespace-pre-line"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.2vw, 36px)', lineHeight: '1.2' }}>
        {name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function MenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({ date: '16/22/2021', time: '6:00 pm', guests: '2 Person' });

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
          <span className="text-white text-sm tracking-wider hidden sm:block">+86 852 346 020</span>
          <button onClick={() => navigate('/contact')} className="border border-white text-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition-all">Reservations</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="relative w-full flex items-end" style={{ height: '400px', backgroundImage: 'url(/images/menu-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/55 z-0" />
        <div className="relative z-10 px-20 pb-16">
          <h1 className="text-white font-serif font-light leading-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5vw, 80px)', lineHeight: '1.1' }}>
            View Our<br />New Menu
          </h1>
          <p className="text-white/70 text-sm tracking-wide">The freshest ingredients for you every day</p>
        </div>
      </div>

      {/* ── STARTERS ── */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-8 right-20 w-20 opacity-80 pointer-events-none">
          <img src="/images/lemon-decor.png" alt="" className="w-full" />
        </div>
        <div className="max-w-5xl mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4vw, 64px)' }}>Starters</h2>
            <p className="text-gray-400 text-sm">This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="w-full overflow-hidden" style={{ height: '360px' }}>
              <img src="/images/starters-food.jpg" alt="Starters" className="w-full h-full object-cover" />
            </div>
            <div className="pt-4">
              <MenuItem name={'Grilled Okra and\nTomatoes'} price="$20" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <MenuItem name="Cucumber Salad" price="$18" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <MenuItem name="Basil Pancakes" price="$12" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAINS ── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4vw, 64px)' }}>Mains</h2>
            <p className="text-gray-400 text-sm">This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="pt-4">
              <MenuItem name={'Deep Sea Snow White\nCod Fillet'} price="$20" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <MenuItem name={'Steak With Rosemary\nButter'} price="$22" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <MenuItem name={'Steaks with Grilled\nKimchi'} price="$20" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
            <div className="w-full overflow-hidden" style={{ height: '360px' }}>
              <img src="/images/mains-food.jpg" alt="Mains" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PASTRIES & DRINKS ── */}
      <section className="bg-white py-24">
        <div className="flex justify-center mb-0">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M22 4 C22 4, 10 14, 22 26 C34 38, 22 42, 22 42" stroke="#5a6e2a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M14 9 C14 9, 6 18, 14 26" stroke="#5a6e2a" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M30 9 C30 9, 38 18, 30 26" stroke="#5a6e2a" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4vw, 64px)' }}>Pastries &amp; Drinks</h2>
            <p className="text-gray-400 text-sm">This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="w-full overflow-hidden" style={{ height: '360px' }}>
              <img src="/images/drinks-food.jpg" alt="Drinks" className="w-full h-full object-cover" />
            </div>
            <div className="pt-4">
              <MenuItem name="Wine Pairing" price="$158" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <MenuItem name="Natural Wine Pairing" price="$168" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <MenuItem name="Whisky Flyer" price="$90" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAKE A RESERVATION ── */}
      <section className="bg-[#f0efe8] py-28">
        <div className="max-w-3xl mx-auto px-16 text-center">
          <h2 className="text-gray-900 font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4vw, 72px)' }}>Make a Reservation</h2>
          <p className="text-gray-400 text-sm mb-12">Get in touch with restaurant</p>
          <div className="flex flex-col md:flex-row gap-0 mb-10">
            <input type="text" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="flex-1 border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]" />
            <div className="flex-1 relative">
              <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a]">
                <option>6:00 pm</option><option>7:00 pm</option><option>8:00 pm</option><option>9:00 pm</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
            </div>
            <div className="flex-1 relative">
              <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a]">
                <option>2 Person</option><option>3 Person</option><option>4 Person</option><option>5 Person</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
            </div>
          </div>
          <button className="bg-[#3a4a1a] text-white px-20 py-4 text-sm tracking-widest uppercase hover:bg-[#4a5e22] transition-colors">Book Now</button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#3a4a1a] text-white pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-16">
          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <div className="border border-white/60 px-3 py-2 inline-block">
                <span className="text-white font-serif text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Food<br />Zero.</span>
              </div>
            </div>
            <div>
              <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-5">Contact</h4>
              <p className="text-white/60 text-xs leading-loose">+1 (86) 852 346 000</p>
              <p className="text-white/60 text-xs leading-loose">info@foodzero.com</p>
              <p className="text-white/60 text-xs leading-loose mt-3">1969 Sepulveda Blvd</p>
              <p className="text-white/60 text-xs leading-loose">Culver City, CA, 90230</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-5">Never Miss a Recipe</h4>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border border-white/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none" />
                <button className="bg-[#8a9e2a] text-white px-5 py-2 text-sm hover:bg-[#9ab030] transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex justify-between items-center">
            <p className="text-white/40 text-xs">© 2020 Zoro Inc. All rights Reserved</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="#" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>

      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}