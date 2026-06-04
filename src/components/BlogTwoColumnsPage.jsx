import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar, FullscreenMenu } from './SharedBlogComponents';

// ============================================================
// 🖼️ IMAGE GUIDE — put all in public/images/
// blog-hero-bg.jpg   → same hero (dark cabbage) — already have
// blog1.jpg          → Fruit and vegetables (pear dish)
// blog2.jpg          → Asparagus Spring Salad
// blog6.jpg          → Dumplings dish
// blog3.jpg          → Bowl of lemons
// blog4.jpg          → Goat Meat dark food
// blog5.jpg          → Sparkling Wines pink drink
// avatar1-6.jpg      → author avatars
// ============================================================

const POSTS = [
  { id: 1, img: '/images/blog1.jpg', tag: 'Fashion', author: 'Julie Christie',   avatar: '/images/avatar1.jpg', date: 'October 17,2021', comments: '2 comments', title: 'Fruit and vegetables and protection against diseases',    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, img: '/images/blog2.jpg', tag: 'Fashion', author: 'Dianna Russell',   avatar: '/images/avatar2.jpg', date: 'October 17,2021', comments: '2 comments', title: 'Asparagus Spring Salad with Rocket, Goat\'s Cheese',       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, img: '/images/blog6.jpg', tag: 'Fashion', author: 'Jenifer Lopez',    avatar: '/images/avatar3.jpg', date: 'October 17,2021', comments: '2 comments', title: 'The Best Style of Dough for Dumplings',                   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, img: '/images/blog3.jpg', tag: 'Fashion', author: 'Theresa Webb',     avatar: '/images/avatar4.jpg', date: 'October 17,2021', comments: '2 comments', title: '7 Reasons to Start Your Day With Lemon Water',            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, img: '/images/blog4.jpg', tag: 'Fashion', author: 'Cody Fisher',      avatar: '/images/avatar55.jpg', date: 'October 17,2021', comments: '2 comments', title: 'Three Ideas for Cooking Goat Meat at Home',              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, img: '/images/blog5.jpg', tag: 'Fashion', author: 'Leslie Alexander', avatar: '/images/avatar5.jpg', date: 'October 17,2021', comments: '2 comments', title: '12 Sparkling Wines We\'re Loving This Summer',            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function BlogTwoColumnsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* ── HERO ── */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '380px', backgroundImage: 'url(/images/blog-hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-8">
          <h1 className="text-white font-serif font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 72px)' }}>Blogs - Two Columns</h1>
          <p className="text-white/60 text-sm">It is easy way to create your beautiful blog for daily</p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-5xl mx-auto px-16 pt-8 pb-4">
        <p className="text-gray-400 text-xs">
          <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-gray-600">Blog</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Blog Two Columns</span>
        </p>
      </div>

      {/* ── BLOG GRID ── */}
      <section className="bg-white py-8 pb-16">
        <div className="max-w-5xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-8">
            {POSTS.map((post) => (
              <div key={post.id} className="mb-8">
                {/* Image */}
                <div className="relative overflow-hidden cursor-pointer mb-4" style={{ height: '280px' }} onClick={() => navigate('/blogs/post')}>
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 bg-[#5a6e2a] text-white text-xs px-3 py-1 tracking-wider">{post.tag}</span>
                </div>

                {/* Author row */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-gray-500 text-xs">{post.author}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{post.comments}</span>
                </div>

                {/* Title */}
                <h2 className="text-gray-900 font-serif font-light mb-2 cursor-pointer hover:text-[#5a6e2a] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 1.8vw, 26px)', lineHeight: '1.3' }} onClick={() => navigate('/blogs/post')}>
                  {post.title}
                </h2>

                {/* Dashed divider */}
                <div className="border-t border-dashed border-gray-200 my-3" />

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{post.desc}</p>

                {/* Read More */}
                <button onClick={() => navigate('/blogs/post')} className="flex items-center gap-2 text-gray-700 text-sm hover:text-[#5a6e2a] transition-colors">
                  Read More <span>→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="border border-gray-300 text-gray-500 px-4 py-2 text-sm hover:border-gray-500 transition-all">Prev</button>
            {[2, 3, 4].map((p) => (
              <button key={p} onClick={() => setCurrentPage(p)} className={`border px-4 py-2 text-sm transition-all ${currentPage === p ? 'border-gray-900 text-gray-900 bg-gray-100' : 'border-gray-300 text-gray-500 hover:border-gray-500'}`}>{p}</button>
            ))}
            <button className="border border-gray-300 text-gray-500 px-4 py-2 text-sm hover:border-gray-500 transition-all">Next</button>
          </div>
        </div>
      </section>

      <Footer />
      {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}