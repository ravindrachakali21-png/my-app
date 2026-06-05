import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullscreenMenu from './FullscreenMenu';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// contact-hero-bg.jpg     → hero background (autumn orange/yellow leaves)
// contact-table.jpg       → dining table with glasses and lemons
// contact-building.jpg    → glass-wall restaurant building exterior
// ============================================================

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    date: '16/22/2021', time: '6:00 pm', guests: '2 Person',
  });

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
      <div className="relative w-full" style={{ height: '480px', backgroundImage: 'url(/images/contact-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/45 z-0" />
        <div className="relative z-10 h-full flex flex-col justify-between px-20 pt-28 pb-12">
          <div>
            <h1 className="text-white font-serif font-light leading-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5.5vw, 88px)', lineHeight: '1.1' }}>Get in Touch</h1>
            <p className="text-white/70 text-sm tracking-wide">The freshest ingredients for you every day</p>
          </div>
          <div className="flex justify-end">
            <div style={{ minWidth: '360px' }}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm tracking-wider">Open Time</span>
                <span className="text-white/70 text-xs">Sunday - Friday</span>
              </div>
              <div className="border-t border-dashed border-white/40 mb-4" />
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-white/60 text-xs mb-1">Brunch</p>
                  <p className="text-white text-sm">11:00–12:00</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Lunch</p>
                  <p className="text-white text-sm">13:00–17:00</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Dinner</p>
                  <p className="text-white text-sm">18:00–20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT INFO SECTION ── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-20">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* LEFT — dining table image + bird SVG */}
            <div className="relative">
              <div className="overflow-hidden" style={{ width: '320px', height: '280px' }}>
                <img src="/images/contact-table.jpg" alt="Restaurant Table" className="w-full h-full object-cover" />
              </div>
              <div className="absolute" style={{ top: '-30px', right: '-20px', width: '160px', opacity: 0.7 }}>
                <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M90 60 C80 50, 60 45, 50 55 C40 65, 45 80, 60 85 C75 90, 95 80, 100 70 C105 60, 100 50, 90 60Z" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
                  <path d="M70 65 C60 55, 40 50, 35 60 C30 70, 45 78, 60 75" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
                  <path d="M100 70 C115 65, 130 55, 135 60 C125 70, 115 75, 100 72" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
                  <path d="M50 55 C45 50, 38 48, 36 52" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
                  <circle cx="54" cy="57" r="1.5" fill="#3a4a1a"/>
                  <path d="M40 110 C60 100, 80 95, 100 90 C120 85, 140 90, 155 100" stroke="#3a4a1a" strokeWidth="1.2" fill="none"/>
                  <path d="M70 97 C65 88, 72 82, 78 88 C80 92, 74 98, 70 97Z" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
                  <path d="M100 90 C95 80, 103 74, 108 81 C110 85, 104 91, 100 90Z" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
                  <path d="M148 55 L150 50 L152 55 L157 57 L152 59 L150 64 L148 59 L143 57 Z" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
                </svg>
              </div>
            </div>
            {/* RIGHT — contact text */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-base leading-relaxed mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>We can be contacted via</p>
              <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>
                email <a href="mailto:info@foodzero.com" className="text-[#b5b820] hover:underline">info@foodzero.com</a>
              </p>
              <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>
                or telephone on <a href="tel:+86852346000" className="text-[#b5b820] hover:underline">+86 852 346 000</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION SECTION ── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-20">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>
                We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
              </p>
              <button className="border border-gray-800 text-gray-800 px-8 py-3 text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-all">View in maps</button>
            </div>
            <div className="overflow-hidden" style={{ height: '340px' }}>
              <img src="/images/contact-building.jpg" alt="Restaurant Building" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAKE A RESERVATION ── */}
      <section className="bg-[#f0efe8] py-24 relative overflow-hidden">
        <div className="absolute left-16 top-10 opacity-20 pointer-events-none" style={{ width: '120px' }}>
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10 C40 10, 15 30, 12 60 C9 90, 25 118, 55 128 C58 129, 60 130, 60 130 C60 130, 62 129, 65 128 C95 118, 111 90, 108 60 C105 30, 80 10, 60 10Z" stroke="#3a4a1a" strokeWidth="1.5" fill="none"/>
            <path d="M60 10 L60 130" stroke="#3a4a1a" strokeWidth="1" fill="none"/>
            <path d="M60 35 C48 38, 32 44, 15 58" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
            <path d="M60 58 C45 61, 22 70, 12 84" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
            <path d="M60 35 C72 38, 88 44, 105 58" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
            <path d="M60 58 C75 61, 98 70, 108 84" stroke="#3a4a1a" strokeWidth="0.8" fill="none"/>
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-16">
          <div className="mb-12">
            <h2 className="text-gray-900 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 4.5vw, 72px)', lineHeight: '1.1' }}>Make a Reservation</h2>
            <p className="text-gray-400 text-sm mt-2">Get in touch with restaurant</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none focus:border-[#5a6e2a]" />
              <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none focus:border-[#5a6e2a]" />
            </div>
            <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none focus:border-[#5a6e2a]" />
            <input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 placeholder-gray-400 outline-none focus:border-[#5a6e2a]" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]" />
              <div className="relative">
                <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a]">
                  <option>6:00 pm</option><option>7:00 pm</option><option>8:00 pm</option><option>9:00 pm</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
              </div>
            </div>
            <div className="relative">
              <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a]">
                <option>2 Person</option><option>3 Person</option><option>4 Person</option><option>5 Person</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-[#3a4a1a] text-white px-20 py-4 text-sm tracking-widest uppercase hover:bg-[#4a5e22] transition-colors">Book Now</button>
            </div>
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