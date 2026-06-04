import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#3a4a1a] text-white pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="border border-white/60 px-3 py-2 inline-block mb-4">
              <span
                className="text-white font-serif text-2xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Food<br />Zero.
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-4">Contact</h4>
            <p className="text-white/60 text-xs leading-relaxed">+86 852 346 000</p>
            <p className="text-white/60 text-xs leading-relaxed">info@foodzero.com</p>
            <p className="text-white/60 text-xs leading-relaxed mt-2">1959 Sepulveda Blvd.</p>
            <p className="text-white/60 text-xs leading-relaxed">Culver City, CA, 90230</p>
          </div>

          {/* Never Miss */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-4">Never Miss a Recipe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address here"
                className="flex-1 bg-transparent border border-white/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/80"
              />
              <button className="bg-[#8a9e2a] text-white px-5 py-2 text-sm hover:bg-[#9ab030] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">© 2021 Zoro. All rights Reserved</p>
          <p className="text-white/40 text-xs">Designed by Zoro</p>
        </div>
      </div>
    </footer>
  );
}