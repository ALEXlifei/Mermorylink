import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
  title: string | React.ReactNode;
  showBack?: boolean;
  avatarUrl?: string;
}

export default function TopAppBar({ title, showBack = false, avatarUrl }: TopAppBarProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f5]/70 backdrop-blur-md flex justify-between items-center px-6 h-16">
      <div className="flex items-center gap-4">
        <button
          onClick={() => showBack ? navigate(-1) : null}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#e3e2df] transition-colors active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined text-on-surface">
            {showBack ? 'arrow_back' : 'menu'}
          </span>
        </button>
        {typeof title === 'string' ? (
          <h1 className="font-headline font-bold tracking-tight text-on-surface text-xl text-[#7d562d]">
            {title}
          </h1>
        ) : (
          title
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest border-2 border-primary-container/30 hover:opacity-80 transition-opacity cursor-pointer">
          <img
            src={avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Q4zmPdPAy0i2rtAhP_BSPk2HtLYBTwMPmyDJUAz3ojSGCnmUBfHQ9P9Q0803VpmKXxAkXAnnzAaFcWEKM9CIm2Searta1mW5Vu7MBS3vRT3WLvq4bPt514vEYT9gieUEPwgP8ManHVUzxhip7kDnvjcGesh1spIGoExCoOuq96B5_dAQvPwhiT5ckmaHlHIuDuK3de0qLl3qzzN34zMTRI-2F8FeMIbKPotgHA_NG5hM5q3FpHEqdrU6kme1IBzd2zkKid7eFKA"}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
