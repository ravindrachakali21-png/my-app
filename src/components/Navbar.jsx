import { useNavigate } from 'react-router-dom';

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-4">
        <div className="border border-white px-3 py-2">
          <span
            className="text-white font-serif text-2xl font-bold tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            FoodZero
          </span>
        </div>
        <button
          onClick={onMenuClick}
          className="flex flex-col gap-1.5 ml-2 cursor-pointer"
        >
          <span className="block w-5 h-0.5 bg-white" />
          <span className="block w-5 h-0.5 bg-white" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-white text-sm tracking-wider hidden sm:block">
          +86 852 346 000
        </span>
        <button
          onClick={() => navigate('/contact')}
          className="border border-white text-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Reservations
        </button>
      </div>
    </nav>
  );
}