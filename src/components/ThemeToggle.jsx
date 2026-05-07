import React from 'react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../hook/useTheme';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, ChangeTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => ChangeTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full glass-card hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="transition-all" />
      ) : (
        <Moon size={20} className="transition-all" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
