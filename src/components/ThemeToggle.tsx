import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="w-5 h-5 animate-pulse bg-gray-400 dark:bg-gray-500 rounded-full" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 p-2 rounded-full overflow-hidden
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-colors duration-300"
      aria-label={theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع المظلم'}
    >
      <div className="relative w-full h-full">
        <Sun 
          className={`w-full h-full absolute top-0 left-0 transition-transform duration-500 rotate-0
            ${theme === 'dark' ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}
        />
        <Moon 
          className={`w-full h-full absolute top-0 left-0 transition-transform duration-500
            ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}
        />
      </div>
      <span className="sr-only">
        {theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع المظلم'}
      </span>
    </button>
  );
}