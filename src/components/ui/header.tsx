import { useTheme } from '@/theme-provider';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex px-4 h-20 items-center justify-between">
        <Link to={'/'}>
          <img
            src="/cloudy.png"
            alt="ClearSky logo"
            className="h-12 w-12 ml-1 pb-1"
          />
          <div className="text-xs font-mono font-bold text-gray-400">
            ClearSky
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
