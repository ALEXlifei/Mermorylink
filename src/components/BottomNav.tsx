import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#faf9f5]/70 backdrop-blur-xl shadow-[0px_-4px_20px_rgba(27,28,26,0.04)] flex justify-around items-center h-20 px-4">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center px-5 py-1 transition-all ${
          path === '/'
            ? 'bg-[#ffcfa1]/30 text-[#7d562d] rounded-full scale-90 duration-150 ease-in-out'
            : 'text-[#1b1c1a]/70 hover:opacity-80'
        }`}
      >
        <span
          className="material-symbols-outlined mb-1"
          style={{ fontVariationSettings: path === '/' ? "'FILL' 1" : "'FILL' 0" }}
        >
          home
        </span>
        <span className="font-inter text-xs font-medium">Home</span>
      </Link>

      <Link
        to="/create"
        className={`flex flex-col items-center justify-center px-5 py-1 transition-all ${
          path.startsWith('/create')
            ? 'bg-[#ffcfa1]/30 text-[#7d562d] rounded-full scale-90 duration-150 ease-in-out'
            : 'text-[#1b1c1a]/70 hover:opacity-80'
        }`}
      >
        <span
          className="material-symbols-outlined mb-1"
          style={{ fontVariationSettings: path.startsWith('/create') ? "'FILL' 1" : "'FILL' 0" }}
        >
          add_circle
        </span>
        <span className="font-inter text-xs font-medium">Create</span>
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center px-5 py-1 transition-all ${
          path === '/profile'
            ? 'bg-[#ffcfa1]/30 text-[#7d562d] rounded-full scale-90 duration-150 ease-in-out'
            : 'text-[#1b1c1a]/70 hover:opacity-80'
        }`}
      >
        <span
          className="material-symbols-outlined mb-1"
          style={{ fontVariationSettings: path === '/profile' ? "'FILL' 1" : "'FILL' 0" }}
        >
          person
        </span>
        <span className="font-inter text-xs font-medium">Profile</span>
      </Link>
    </nav>
  );
}
