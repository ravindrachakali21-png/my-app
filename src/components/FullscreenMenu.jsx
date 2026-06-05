import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FullscreenMenu({ onClose }) {
  const navigate = useNavigate();

  const handleNav = (path) => {
    onClose();
    navigate(path);
  };

  const navItems = [
    { name: 'HOME',      path: '/',                  sub: [] },
    { name: 'MENU',      path: '/menu',              sub: [] },
    {
      name: 'BLOGS', path: '/blogs/one-column',
      sub: [
        { label: '1 Column',     path: '/blogs/one-column' },
        { label: '2 Columns',    path: '/blogs/two-columns' },
        { label: 'Sidebar Post', path: '/blogs/post-sidebar' },
      ],
    },
    { name: 'PORTFOLIO', path: '/portfolio',         sub: [] },
    { name: 'ABOUT',     path: '/about',             sub: [] },
    { name: 'CONTACT',   path: '/contact',           sub: [] },
  ];

  const socialLinks = [
    { href: 'https://instagram.com', icon: (<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>) },
    { href: 'https://twitter.com',   icon: (<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>) },
    { href: 'https://facebook.com',  icon: (<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) },
    { href: 'https://youtube.com',   icon: (<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
  ];

  return (
    <div className="fixed inset-0 z-50 flex"
      style={{ backgroundImage: 'url(/images/menu-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#2e3a10]/80 z-0" />

      <button onClick={onClose} className="absolute top-8 left-8 z-20 text-white/80 hover:text-white transition-colors">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <line x1="2" y1="2" x2="26" y2="26" stroke="white" strokeWidth="2" />
          <line x1="26" y1="2" x2="2" y2="26" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      <div className="relative z-10 flex flex-col justify-center pl-16 md:pl-28 gap-5 w-full md:w-1/2">
        {navItems.map((item) => (
          <div key={item.name}>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-lg">•</span>
              <span onClick={() => handleNav(item.path)}
                className="text-white font-serif text-4xl md:text-5xl font-light tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {item.name}
              </span>
            </div>
            {item.sub.length > 0 && (
              <div className="ml-10 mt-1 flex flex-col gap-1">
                {item.sub.map((s) => (
                  <span key={s.label} onClick={() => handleNav(s.path)}
                    className="text-white/70 text-base font-light cursor-pointer hover:text-white transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {s.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 hidden md:flex flex-col justify-end pb-24 pr-20 items-end w-1/2">
        <div className="text-right">
          <h3 className="text-white text-2xl font-serif mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Contact</h3>
          <div className="border-t border-dashed border-white/40 w-56 ml-auto mb-4" />
          <p className="text-white/80 text-sm">+86 852 346 000</p>
          <p className="text-white/80 text-sm mb-4">info@foodzero.com</p>
          <p className="text-white/80 text-sm">1959 Sepulveda Blvd.</p>
          <p className="text-white/80 text-sm mb-6">Culver City, CA, 90230</p>
          <div className="flex gap-4 justify-end">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}