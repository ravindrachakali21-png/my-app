import React, { useState } from 'react';

export default function Reservation() {
  const [form, setForm] = useState({ date: '14.02.2021', time: '6:00 pm', guests: '2 Person' });

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h2
          className="text-4xl font-serif font-light text-gray-900 mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Make a Reservation
        </h2>
        <p className="text-gray-400 text-sm mb-10">
          Click to add event at work passports
        </p>

        {/* Form Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            className="flex-1 border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#5a6e2a]"
          />
          <div className="flex-1 relative">
            <select
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a] bg-white"
            >
              <option>6:00 pm</option>
              <option>7:00 pm</option>
              <option>8:00 pm</option>
              <option>9:00 pm</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
          </div>
          <div className="flex-1 relative">
            <select
              value={form.guests}
              onChange={e => setForm({ ...form, guests: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none appearance-none focus:border-[#5a6e2a] bg-white"
            >
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5 Person</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
          </div>
        </div>

        <button className="bg-[#3a4a1a] text-white px-16 py-4 text-sm tracking-widest uppercase hover:bg-[#4a5e22] transition-colors">
          Book Now
        </button>

        <p className="text-gray-400 text-xs mt-8 leading-relaxed max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ipsum
          ets. Purus. Cursus ipsum est. adipiscing elit.
        </p>
      </div>
    </section>
  );
}