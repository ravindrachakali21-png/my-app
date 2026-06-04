import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar, FullscreenMenu } from './SharedBlogComponents';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// post-hero-bg.jpg      → hero bg (dark meat/food on wooden board)
// post-img1.jpg         → article image 1 (raw steaks on dark surface)
// post-img2.jpg         → article image 2 (spice grinder/mortar)
// post-quote-bg.jpg     → full-width quote background (dark jars/kitchen)
// post-author.jpg       → Julie Christie round avatar
// blog1.jpg             → related post 1 image (fruit vegetables)
// blog2.jpg             → related post 2 image (asparagus)
// avatar1.jpg           → related post 1 avatar
// avatar2.jpg           → related post 2 avatar
// ============================================================

const TAGS = ['Design', 'Photography', 'Images', 'Video', 'Music', 'Travel'];

export default function SinglePostNoSidebarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* ── HERO ── */}
      <div className="relative w-full flex items-end" style={{ height: '380px', backgroundImage: 'url(/images/post-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* 🖼️ post-hero-bg.jpg */}
        <div className="absolute inset-0 bg-black/55 z-0" />
        <div className="relative z-10 w-full px-20 pb-16 text-center">
          <span className="inline-block bg-[#5a6e2a] text-white text-xs px-4 py-1 tracking-wider mb-4">Fashion</span>
          <h1 className="text-white font-serif font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: '1.15' }}>
            Three Ideas for Cooking<br />Goat Meat at Home
          </h1>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-3xl mx-auto px-16 pt-8 pb-2">
        <p className="text-gray-400 text-xs">
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/blogs/one-column')}>Blog</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Vegan baked oatmeal with fresh berries</span>
        </p>
      </div>

      {/* ── ARTICLE CONTENT ── */}
      <article className="max-w-3xl mx-auto px-16 py-10">
        {/* Intro paragraph */}
        <p className="text-gray-600 text-base leading-relaxed mb-10" style={{ fontSize: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisi. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus.
        </p>

        {/* Two images side by side */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {/* 🖼️ post-img1.jpg */}
          <div className="overflow-hidden" style={{ height: '240px' }}>
            <img src="/images/post-img1.jpg" alt="Article 1" className="w-full h-full object-cover" />
          </div>
          {/* 🖼️ post-img2.jpg */}
          <div className="overflow-hidden" style={{ height: '240px' }}>
            <img src="/images/post-img2.jpg" alt="Article 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Long paragraph */}
        <p className="text-gray-500 text-sm leading-loose mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisi. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non hendrerit et pharetra tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus mattis quis scelerisque consectetur orci at elit sem nulla. Lorem ipsum dolor sit amet consectetur orci dui ex sem nulla Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris elit. Nec, lacinia eleifend amet, quis turpis et massa duis.
        </p>
        <p className="text-gray-500 text-sm leading-loose mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisi. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
        </p>
      </article>

      {/* ── QUOTE BLOCK ── */}
      <div className="relative w-full py-16 mb-10" style={{ backgroundImage: 'url(/images/post-quote-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* 🖼️ post-quote-bg.jpg */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-16">
          <p className="text-white font-serif font-light italic leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 2vw, 28px)', lineHeight: '1.6' }}>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className="font-medium">Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</span>
          </p>
        </div>
      </div>

      {/* ── MORE CONTENT ── */}
      <article className="max-w-3xl mx-auto px-16 pb-10">
        <p className="text-gray-500 text-sm leading-loose mb-10">
          Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus mattis quis scelerisque consectetur orci at elit sem nulla. Tortor ullamcorper vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris elit. Nec, lacinia eleifend amet, quis turpis et massa duis.
        </p>

        {/* Tags */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <span className="text-gray-700 text-sm font-medium">Tags:</span>
          {TAGS.map((tag) => (
            <button key={tag} className="border border-gray-300 text-gray-500 px-4 py-1 text-xs hover:border-gray-500 hover:text-gray-700 transition-all">{tag}</button>
          ))}
        </div>

        {/* Author bio */}
        <div className="flex items-start gap-5 mb-10">
          {/* 🖼️ post-author.jpg */}
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
            <img src="/images/post-author.jpg" alt="Julie Christie" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-gray-900 font-serif font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px' }}>Julie Christie</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Lorem ipsum dolor sit amet; consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
          </div>
        </div>

        {/* Dashed divider */}
        <div className="border-t border-dashed border-gray-200 mb-12" />

        {/* Related Posts */}
        <h3 className="text-gray-900 font-serif font-light text-center mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.5vw, 36px)' }}>Related Posts</h3>

        <div className="grid grid-cols-2 gap-8">
          {[
            { img: '/images/blog1.jpg', tag: 'Fashion', avatar: '/images/avatar1.jpg', author: 'Julie Christie', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: 'Fruit and vegetables and protection against diseases' },
            { img: '/images/blog2.jpg', tag: 'Fashion', avatar: '/images/avatar2.jpg', author: 'Dianna Russell', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: 'Asparagus Spring Salad with Rocket, Goat\'s Cheese' },
          ].map((post, i) => (
            <div key={i}>
              <div className="relative overflow-hidden mb-4 cursor-pointer" style={{ height: '220px' }}>
                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-[#5a6e2a] text-white text-xs px-3 py-1">{post.tag}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                  <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-400 text-xs">{post.author}</span>
                <span className="text-gray-300 text-xs">•</span>
                <span className="text-gray-400 text-xs">{post.date}</span>
                <span className="text-gray-300 text-xs">•</span>
                <span className="text-gray-400 text-xs">{post.comments}</span>
              </div>
              <h4 className="text-gray-900 font-serif font-light mb-2 cursor-pointer hover:text-[#5a6e2a]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', lineHeight: '1.3' }}>{post.title}</h4>
              <p className="text-gray-400 text-xs mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="flex items-center gap-2 text-gray-700 text-sm hover:text-[#5a6e2a]">Read More <span>→</span></button>
            </div>
          ))}
        </div>
      </article>

      <Footer />
      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}