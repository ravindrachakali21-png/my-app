import React from 'react';

const blogs = [
  {
    img: '/images/blog1.jpg',        // 🖼️ IMAGE: blog1.jpg
    tag: 'Nutrition',
    title: 'Fruit and vegetables and protection against diseases',
    author: 'Julia Doe',
    date: 'March 31, 2021',
    read: '5 min',
  },
  {
    img: '/images/blog2.jpg',        // 🖼️ IMAGE: blog2.jpg
    tag: 'Nutrition',
    title: 'Asparagus Spring Salad with Rocket, Goat\'s Cheese',
    author: 'Julia Doe',
    date: 'March 31, 2021',
    read: '5 min',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#f5f5ee] py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((b, i) => (
            <div key={i} className="bg-white overflow-hidden">
              {/* 🖼️ Blog Image */}
              <div className="w-full h-56 bg-gray-300 overflow-hidden relative">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-[#5a6e2a] text-white text-xs px-3 py-1 tracking-wider uppercase">
                  {b.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span>{b.author}</span>
                  <span>•</span>
                  <span>{b.date}</span>
                  <span>•</span>
                  <span>{b.read} read</span>
                </div>
                <h3
                  className="text-gray-900 text-lg font-serif font-medium leading-snug mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {b.title}
                </h3>
                <button className="text-gray-500 text-sm flex items-center gap-2 hover:text-[#5a6e2a] transition-colors">
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}