import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar, FullscreenMenu } from './SharedBlogComponents';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// blog-hero-bg.jpg       → hero background (dark purple cabbage)
// blog1.jpg              → Fruit and vegetables (pear dish)
// blog2.jpg              → Asparagus Spring Salad (green asparagus)
// blog3.jpg              → Lemon Water (bowl of lemons)
// blog4.jpg              → Goat Meat (dark food with sauce)
// blog5.jpg              → Sparkling Wines (pink drink)
// avatar1.jpg            → Julie Christie avatar
// avatar2.jpg            → Dianna Russell avatar
// avatar3.jpg            → Jen Fox Lopez avatar
// avatar4.jpg            → Theresa Webb avatar
// avatar5.jpg            → Leslie Alexander avatar
// ============================================================

const POSTS = [
  { id: 1, img: '/images/blog11.jpg', tag: 'Fashion', author: 'Julie Christie', avatar: '/images/avatar1.jpg', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: 'Fruit and vegetables and protection against diseases', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', path: '/blogs/post' },
  { id: 2, img: '/images/blog22.jpg', tag: 'Fashion', author: 'Dianna Russell', avatar: '/images/avatar2.jpg', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: 'Asparagus Spring Salad with Rocket, Goat\'s Cheese', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', path: '/blogs/post' },
  { id: 3, img: '/images/blog3.jpg', tag: 'Fashion', author: 'Jen Fox Lopez', avatar: '/images/avatar3.jpg', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: '7 Reasons to Start Your Day With Lemon Water', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', path: '/blogs/post' },
  { id: 4, img: '/images/blog4.jpg', tag: 'Fashion', author: 'Theresa Webb', avatar: '/images/avatar4.jpg', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: 'Three Ideas for Cooking Goat Meat at Home', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', path: '/blogs/post' },
  { id: 5, img: '/images/blog5.jpg', tag: 'Fashion', author: 'Leslie Alexander', avatar: '/images/avatar5.jpg', date: 'October 17, 2021', time: '3:33 pm', comments: '2 comments', title: '12 Sparkling Wines We\'re Loving This Summer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', path: '/blogs/post' },
];

export default function BlogOneColumnPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* ── HERO ── */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '380px', backgroundImage: 'url(/images/blog-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* 🖼️ blog-hero-bg.jpg — dark purple/green cabbage */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-8">
          <h1 className="text-white font-serif font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 72px)' }}>Blog List - One Column</h1>
          <p className="text-white/60 text-sm">It is easy way to create your beautiful blog for daily</p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-5xl mx-auto px-16 pt-8 pb-4">
        <p className="text-gray-400 text-xs">
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/blogs')}>Blog</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Blog List One Column</span>
        </p>
      </div>

      {/* ── BLOG POSTS ── */}
      <section className="bg-white py-8 pb-16">
        <div className="max-w-5xl mx-auto px-16">
          {POSTS.map((post) => (
            <div key={post.id} className="grid grid-cols-2 gap-12 mb-16 items-start">
              {/* LEFT — image with tag */}
              <div className="relative overflow-hidden cursor-pointer" style={{ height: '260px' }} onClick={() => navigate(post.path)}>
                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-[#5a6e2a] text-white text-xs px-3 py-1 tracking-wider">{post.tag}</span>
              </div>

              {/* RIGHT — meta + title + desc + read more */}
              <div className="flex flex-col justify-center">
                {/* Author row */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-200">
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-gray-500 text-xs">{post.author}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{post.time}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{post.comments}</span>
                </div>

                {/* Title */}
                <h2 className="text-gray-900 font-serif font-light mb-2 cursor-pointer hover:text-[#5a6e2a] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2vw, 30px)', lineHeight: '1.3' }} onClick={() => navigate(post.path)}>
                  {post.title}
                </h2>

                {/* Dashed divider */}
                <div className="border-t border-dashed border-gray-200 my-3" />

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.desc}</p>

                {/* Read More */}
                <button onClick={() => navigate(post.path)} className="flex items-center gap-2 text-gray-700 text-sm hover:text-[#5a6e2a] transition-colors">
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}

          {/* Loading button */}
          <div className="flex justify-center mt-4">
            <button className="border border-gray-300 text-gray-500 px-10 py-3 text-sm tracking-wider hover:border-gray-500 hover:text-gray-700 transition-all">Loading...</button>
          </div>
        </div>
      </section>

      <Footer />
      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}