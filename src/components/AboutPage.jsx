import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullscreenMenu from './FullscreenMenu';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// about-hero-bg.jpg       → hero background (restaurant interior)
// about-chef-cooking.jpg  → Our Story right image (chef plating)
// about-manager.jpg       → Restaurant Manager photo (man in suit)
// about-exec-chef.jpg     → Executive Chef photo (chef dark kitchen)
// about-delicious-bg.jpg  → "It looks delicious" background (green food)
// about-slice.jpg         → Process 01 (raw meat being sliced)
// about-pickled.jpg       → Process 02 (steak with salt)
// about-bake.jpg          → Process 03 (fire/baking)
// ============================================================

const MonsteraLeaf = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 10 C45 10, 15 35, 10 70 C5 105, 22 148, 55 165 C62 168, 68 170, 70 170 C72 170, 78 168, 85 165 C118 148, 135 105, 130 70 C125 35, 95 10, 70 10Z" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
    <path d="M70 10 L70 170" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
    <path d="M70 40 C56 43, 32 50, 15 65" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
    <path d="M70 70 C52 73, 26 82, 12 98" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
    <path d="M70 100 C55 104, 34 112, 24 130" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
    <path d="M70 40 C84 43, 108 50, 125 65" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
    <path d="M70 70 C88 73, 114 82, 128 98" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
    <path d="M70 100 C85 104, 106 112, 116 130" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
  </svg>
);

export default function AboutPage() {
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
          <span className="text-white text-sm tracking-wider hidden sm:block">+86 852 346 000</span>
          <button onClick={() => navigate('/contact')} className="border border-white text-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition-all">Reservations</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="relative w-full flex items-end" style={{ height: '420px', backgroundImage: 'url(/images/about-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 px-20 pb-16">
          <h1 className="text-white font-serif font-light leading-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5.5vw, 88px)', lineHeight: '1.1' }}>Who We Are</h1>
          <p className="text-white/70 text-sm max-w-xs leading-relaxed">The most important thing for us is to give you the comfortable dining experience</p>
        </div>
      </div>

      {/* ── OUR STORY ── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-20">
          <div className="grid grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute" style={{ top: '-20px', right: '20px', width: '90px', opacity: 0.6 }}>
                <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="65" r="32" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
                  <path d="M50 33 L50 20" stroke="#3a4a1a" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M50 28 C44 20, 34 18, 32 24 C36 26, 44 26, 50 28Z" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
                  <path d="M50 28 C56 20, 66 18, 68 24 C64 26, 56 26, 50 28Z" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
                  <path d="M30 58 C36 52, 44 50, 50 52 C56 50, 64 52, 70 58" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
                </svg>
              </div>
              <h2 className="text-gray-900 font-serif font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4.5vw, 72px)' }}>Our Story</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>
            </div>
            <div className="overflow-hidden" style={{ height: '280px' }}>
              <img src="/images/about-chef-cooking.jpg" alt="Chef Cooking" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section className="bg-white pb-24">
        <div className="max-w-5xl mx-auto px-20">
          <div className="mb-16">
            <h3 className="text-gray-900 font-serif font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 44px)' }}>Restaurant Manager</h3>
            <p className="text-gray-400 text-xs mb-6 tracking-wide">Carson Hugo</p>
            <div className="grid grid-cols-2 gap-16 items-start">
              <div className="overflow-hidden" style={{ height: '320px' }}>
                <img src="/images/about-manager.jpg" alt="Restaurant Manager" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-gray-500 text-sm leading-relaxed mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in pellentesque ornare nunc, ets.</p>
                <h3 className="text-gray-900 font-serif font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.5vw, 38px)' }}>Executive Chef</h3>
                <p className="text-gray-400 text-xs mb-4 tracking-wide">Jane Cooper</p>
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <img src="/images/about-exec-chef.jpg" alt="Executive Chef" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16 mt-8">
              <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in pellentesque lorem ets. Augue habitant ac apturient sit parturient est an etiam consequat ets.</p>
              <div />
            </div>
          </div>
        </div>
      </section>

      {/* ── IT LOOKS DELICIOUS ── */}
      <section className="relative w-full flex flex-col items-center justify-center" style={{ height: '340px', backgroundImage: 'url(/images/about-delicious-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#3a4a1a]/65 z-0" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-white font-serif font-light mb-3 text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 64px)' }}>It looks delicious</h2>
          <p className="text-white/70 text-sm mb-8 text-center">Lorem ipsum dolor sit amet, parturient adipiscing elit.</p>
          <button className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-all">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="white"><path d="M2 1.5L16 10L2 18.5V1.5Z"/></svg>
          </button>
        </div>
      </section>

      {/* ── SOPHISTICATED PROCESS ── */}
      <section className="bg-white py-24 relative overflow-hidden">
        <MonsteraLeaf className="absolute opacity-15 pointer-events-none" style={{ width: '140px', top: '8px', right: '8px' }} />
        <MonsteraLeaf className="absolute opacity-15 pointer-events-none" style={{ width: '100px', bottom: '24px', left: '4px' }} />
        <div className="max-w-5xl mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4vw, 60px)' }}>Sophisticated Process</h2>
          </div>
          {/* Row 1 — 01.Slice */}
          <div className="grid grid-cols-2 gap-16 items-center mb-16">
            <div className="overflow-hidden" style={{ height: '260px' }}>
              <img src="/images/about-slice.jpg" alt="Slice" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-gray-900 font-serif font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 44px)' }}>01.Slice</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>
            </div>
          </div>
          {/* Row 2 — 03.Bake + 02.Pickled */}
          <div className="grid grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-gray-900 font-serif font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 44px)' }}>03.Bake</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
              <div className="overflow-hidden" style={{ height: '220px' }}>
                <img src="/images/about-bake.jpg" alt="Bake" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="overflow-hidden mb-6" style={{ height: '220px' }}>
                <img src="/images/about-pickled.jpg" alt="Pickled" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-gray-900 font-serif font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 44px)' }}>02.Pickled</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAKE A RESERVATION ── */}
      <section className="bg-[#f0efe8] py-24">
        <div className="max-w-3xl mx-auto px-16 text-center">
          <h2 className="text-gray-900 font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4.5vw, 72px)' }}>Make a Reservation</h2>
          <p className="text-gray-400 text-sm mb-12">Get in touch with restaurant</p>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex gap-0">
              <input type="text" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="flex-1 border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]" />
              <div className="flex-1 relative">
                <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a]">
                  <option>6:00 pm</option><option>7:00 pm</option><option>8:00 pm</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
              </div>
              <div className="flex-1 relative">
                <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a]">
                  <option>2 Person</option><option>3 Person</option><option>4 Person</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
              </div>
            </div>
          </div>
          <button className="bg-[#3a4a1a] text-white px-20 py-4 text-sm tracking-widest uppercase hover:bg-[#4a5e22] transition-colors">Book Now</button>
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
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex justify-between items-center">
            <p className="text-white/40 text-xs">© 2020 Zero Inc. All rights Reserved</p>
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