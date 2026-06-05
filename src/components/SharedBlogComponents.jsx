import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullscreenMenu from './FullscreenMenu';

export function Footer() {
  return (
    <footer className="bg-[#2d3a10] text-white pt-12 lg:pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div>
            <span className="text-white font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', lineHeight: '1.1' }}>
              Food<br />Zero.
            </span>
          </div>
          <div>
            <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-4">Contact</h4>
            <p className="text-white/60 text-xs leading-loose">+1 (86) 852 346 000</p>
            <p className="text-white/60 text-xs leading-loose">info@foodzero.com</p>
            <p className="text-white/60 text-xs leading-loose mt-2">1959 Sepulveda Blvd</p>
            <p className="text-white/60 text-xs leading-loose">Culver City, CA, 90230</p>
          </div>
          <div>
            <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-4">Never Miss a Recipe</h4>
            <div className="flex mb-3">
              <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border border-white/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none" />
              <button className="bg-[#8a9e2a] text-white px-4 py-2 text-sm">Subscribe</button>
            </div>
            <p className="text-white/40 text-xs">Join our subscribers and get best recipe delivered each week!</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© 2020 Zero Inc. All rights Reserved</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-5">
      <div className="flex items-center gap-3">
        <div className="border border-white px-2 py-1">
          <span className="text-white font-serif text-xl lg:text-2xl font-bold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>FoodZero</span>
        </div>
        <button onClick={onMenuClick} className="flex flex-col gap-1.5 ml-1 cursor-pointer">
          <span className="block w-5 h-0.5 bg-white" /><span className="block w-5 h-0.5 bg-white" /><span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>
      <div className="flex items-center gap-3 lg:gap-6">
        <span className="text-white text-sm tracking-wider hidden md:block">+86 852 346 000</span>
        <button onClick={() => navigate('/contact')} className="border border-white text-white px-3 lg:px-6 py-2 text-xs lg:text-sm tracking-widest hover:bg-white hover:text-black transition-all">Reservations</button>
      </div>
    </nav>
  );
}

export { FullscreenMenu };