import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar, FullscreenMenu } from './SharedBlogComponents';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// post-sidebar-hero-bg.jpg → hero bg (meat dish dark background)
// post-sidebar-author.jpg  → author avatar in hero (small round)
// post-sidebar-img1.jpg    → article image top-left (broccoli/green food)
// post-sidebar-img2.jpg    → article image top-right (leeks/green veg)
// post-sidebar-img3.jpg    → article image bottom-right (garnished food)
// sidebar-recent1.jpg      → recent post thumbnail 1
// sidebar-recent2.jpg      → recent post thumbnail 2
// sidebar-recent3.jpg      → recent post thumbnail 3
// sidebar-recent4.jpg      → recent post thumbnail 4
// post-author.jpg          → Julie Christie avatar
// prev-post-bg.jpg         → previous post background (lemon)
// next-post-bg.jpg         → next post background (wine/red)
// comment-avatar1-4.jpg    → comment user avatars
// ============================================================

const TAGS = ['Design', 'Photography', 'Images', 'Video', 'Music', 'Travel'];
const SIDEBAR_TAGS = ['Design', 'Photography', 'Images', 'Video', 'Music', 'Travel'];

export default function SinglePostWithSidebarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comment, setComment] = useState({ text: '', name: '', email: '', website: '' });
  const navigate = useNavigate();

  return (
    <div className="bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* ── HERO ── */}
      <div className="relative w-full flex items-end" style={{ height: '360px', backgroundImage: 'url(/images/post-sidebar-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* 🖼️ post-sidebar-hero-bg.jpg */}
        <div className="absolute inset-0 bg-black/55 z-0" />
        <div className="relative z-10 w-full px-20 pb-12">
          <span className="inline-block bg-[#5a6e2a] text-white text-xs px-4 py-1 tracking-wider mb-4">Fashion</span>
          <h1 className="text-white font-serif font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: '1.15' }}>
            Three Ideas for Cooking<br />Goat Meat at Home
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
              <img src="/images/post-sidebar-author.jpg" alt="Author" className="w-full h-full object-cover" />
            </div>
            <span className="text-white/70 text-xs">Julie Christie</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/70 text-xs">October 17, 2021</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/70 text-xs">9:00 am</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/70 text-xs">3 comments</span>
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-6xl mx-auto px-16 pt-8 pb-2">
        <p className="text-gray-400 text-xs">
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/blogs/one-column')}>Blog</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Three Ideas for Cooking Goat Meat at Home</span>
        </p>
      </div>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="max-w-6xl mx-auto px-16 py-10">
        <div className="grid grid-cols-3 gap-12">

          {/* ── LEFT CONTENT (2/3) ── */}
          <div className="col-span-2">
            {/* Intro */}
            <p className="text-gray-500 text-sm leading-loose mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc, arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
            </p>

            {/* 3 Images grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="overflow-hidden" style={{ height: '200px' }}>
                {/* 🖼️ post-sidebar-img1.jpg */}
                <img src="/images/post-sidebar-img1.jpg" alt="Food 1" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-rows-2 gap-3">
                <div className="overflow-hidden" style={{ height: '95px' }}>
                  {/* 🖼️ post-sidebar-img2.jpg */}
                  <img src="/images/post-sidebar-img2.jpg" alt="Food 2" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden" style={{ height: '95px' }}>
                  {/* 🖼️ post-sidebar-img3.jpg */}
                  <img src="/images/post-sidebar-img3.jpg" alt="Food 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* More content */}
            <p className="text-gray-500 text-sm leading-loose mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Quote block */}
            <div className="border-l-4 border-[#5a6e2a] pl-6 py-2 mb-8 bg-gray-50">
              <p className="text-gray-700 font-serif italic leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</strong>
              </p>
            </div>

            <p className="text-gray-500 text-sm leading-loose mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Purus lorem id penatibus imperdiet. Turpis egestas tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc, arcu donec nam etiam.
            </p>

            {/* Tags */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="text-gray-700 text-sm font-medium">Tags:</span>
              {TAGS.map((tag) => (
                <button key={tag} className="border border-gray-300 text-gray-500 px-3 py-1 text-xs hover:border-gray-500 hover:text-gray-700 transition-all">{tag}</button>
              ))}
            </div>

            {/* Author bio */}
            <div className="flex items-start gap-5 mb-10">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <img src="/images/post-author.jpg" alt="Julie Christie" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-gray-900 font-serif font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>Julie Christie</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Lorem ipsum dolor sit amet; consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
              </div>
            </div>

            {/* Dashed divider */}
            <div className="border-t border-dashed border-gray-200 mb-8" />
          </div>

          {/* ── RIGHT SIDEBAR (1/3) ── */}
          <div className="col-span-1">
            {/* Search */}
            <div className="mb-8">
              <div className="flex border-b border-gray-300 pb-2">
                <input type="text" placeholder="Search..." className="flex-1 text-sm text-gray-600 outline-none placeholder-gray-400" />
                <button className="text-gray-400 hover:text-gray-600 ml-2">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-serif font-medium mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>Categories</h4>
              <div className="border-t border-gray-200 mb-3" />
              {[['Fashion', 56], ['Food', 20], ['Music', 12], ['Travel', 36]].map(([cat, count]) => (
                <div key={cat} className="flex justify-between items-center py-2 border-b border-gray-100 cursor-pointer hover:text-[#5a6e2a] transition-colors">
                  <span className="text-gray-600 text-sm">{cat}</span>
                  <span className="text-gray-400 text-xs">{count}</span>
                </div>
              ))}
            </div>

            {/* Recent Comments */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-serif font-medium mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>Recent Comments</h4>
              <div className="border-t border-gray-200 mb-3" />
              {['Vegan baked oatmeal with strawberries', 'All You Need for healthy Recipe', '12 Fresh Takes on Iced Cher Meat Lemon'].map((c, i) => (
                <p key={i} className="text-gray-400 text-xs leading-relaxed mb-2 cursor-pointer hover:text-gray-600">{c}</p>
              ))}
            </div>

            {/* Archives */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-serif font-medium mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>Archives</h4>
              <div className="border-t border-gray-200 mb-3" />
              {[['October 2021', 12], ['September 2021', 6], ['August 2021', 23]].map(([month, count]) => (
                <div key={month} className="flex justify-between items-center py-2 border-b border-gray-100 cursor-pointer hover:text-[#5a6e2a]">
                  <span className="text-gray-600 text-sm">{month}</span>
                  <span className="text-gray-400 text-xs">{count}</span>
                </div>
              ))}
            </div>

            {/* Recent Posted */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-serif font-medium mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>Recent Posted</h4>
              <div className="border-t border-gray-200 mb-3" />
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex items-center gap-3 mb-3 cursor-pointer hover:opacity-80">
                  <div className="w-14 h-14 bg-gray-200 overflow-hidden flex-shrink-0">
                    {/* 🖼️ sidebar-recent{i}.jpg */}
                    <img src={`/images/sidebar-recent${i}.jpg`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">Vegan baked oatmeal with fresh berries</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-gray-900 font-serif font-medium mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px' }}>Tags</h4>
              <div className="border-t border-gray-200 mb-3" />
              <div className="flex flex-wrap gap-2">
                {SIDEBAR_TAGS.map((tag) => (
                  <button key={tag} className="border border-gray-300 text-gray-500 px-3 py-1 text-xs hover:border-[#5a6e2a] hover:text-[#5a6e2a] transition-all">{tag}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PREV / NEXT POST ── */}
        <div className="grid grid-cols-2 gap-0 mb-12 -mx-0">
          <div className="relative overflow-hidden cursor-pointer group" style={{ height: '140px' }}>
            {/* 🖼️ prev-post-bg.jpg */}
            <img src="/images/prev-post-bg.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-8">
              <span className="text-white/60 text-xs tracking-widest uppercase mb-1">← Previous Post</span>
              <p className="text-white font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>7 Reasons to Start Your Day With Lemon Water</p>
            </div>
          </div>
          <div className="relative overflow-hidden cursor-pointer group" style={{ height: '140px' }}>
            {/* 🖼️ next-post-bg.jpg */}
            <img src="/images/next-post-bg.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-end px-8">
              <span className="text-white/60 text-xs tracking-widest uppercase mb-1">Next Post →</span>
              <p className="text-white font-serif font-light text-right" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>12 Sparkling Wines We're Loving This Summer</p>
            </div>
          </div>
        </div>

        {/* ── COMMENTS ── */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-gray-900 font-serif font-light text-center mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px' }}>5 Comments</h3>

          {[
            { name: 'Leslie Alexander', date: 'March 12 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
            { name: 'Jennifer Lopez',   date: 'March 14 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
            { name: 'Jane Cooper',      date: 'March 15 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
            { name: 'Jenny Wilson',     date: 'March 15 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img src={`/images/comment-avatar${i+1}.jpg`} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{c.name}</p>
                    <p className="text-gray-400 text-xs mb-1">{c.date}</p>
                  </div>
                  <button className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Reply</button>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}

          <div className="border-t border-dashed border-gray-200 my-10" />

          {/* Leave a Reply */}
          <h3 className="text-gray-900 font-serif font-light text-center mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px' }}>Leave a Reply</h3>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-600 text-xs mb-1 block">Comment</label>
              <textarea rows={5} value={comment.text} onChange={e => setComment({...comment, text: e.target.value})} className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a] resize-none" />
            </div>
            <div>
              <label className="text-gray-600 text-xs mb-1 block">Name*</label>
              <input type="text" value={comment.name} onChange={e => setComment({...comment, name: e.target.value})} className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]" />
            </div>
            <div>
              <label className="text-gray-600 text-xs mb-1 block">Email*</label>
              <input type="email" value={comment.email} onChange={e => setComment({...comment, email: e.target.value})} className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]" />
            </div>
            <div>
              <label className="text-gray-600 text-xs mb-1 block">Website</label>
              <input type="text" value={comment.website} onChange={e => setComment({...comment, website: e.target.value})} className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]" />
            </div>
            <div className="pt-2">
              <button className="border border-gray-900 text-gray-900 px-8 py-3 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all">Post Comment</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}