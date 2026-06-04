import React, { useEffect, useState } from 'react';

// 🖼️ PASTE YOUR IMAGE: put your background image in public/images/coming-soon-bg.jpg
const BG_IMAGE = '/images/coming-soon-bg.jpg';

// Set your target launch date here
const TARGET_DATE = new Date('2024-08-21T21:35:23');

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = TARGET_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const totalDays = Math.floor(totalHours / 24);
      const days = totalDays % 30;
      const months = Math.floor(totalDays / 30);
      setTimeLeft({ months, days, hours, minutes, seconds });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: pad(timeLeft.months ?? 2), label: 'Month' },
    { value: pad(timeLeft.days ?? 3), label: 'Days' },
    { value: pad(timeLeft.hours ?? 21), label: 'Hours' },
    { value: pad(timeLeft.minutes ?? 35), label: 'Minutes' },
    { value: pad(timeLeft.seconds ?? 23), label: 'Second' },
  ];

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark olive overlay */}
      <div className="absolute inset-0 bg-[#3b4a1e]/75 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Title */}
        <h1
          className="text-white text-5xl md:text-7xl font-serif font-light tracking-[0.25em] md:tracking-[0.35em] uppercase mb-6 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Coming Soon
        </h1>

        {/* Dashed divider */}
        <div className="w-3/4 border-t border-dashed border-white/50 mb-10" />

        {/* Countdown */}
        <div className="flex items-start justify-center gap-4 md:gap-16 w-full">
          {units.map((unit, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="text-white font-serif text-5xl md:text-7xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {unit.value}
              </span>
              <span className="text-white/80 text-sm md:text-base font-light tracking-widest mt-1 uppercase">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* View Menu button */}
        <button
          className="mt-16 border border-white text-white px-14 py-4 text-base font-light tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
}