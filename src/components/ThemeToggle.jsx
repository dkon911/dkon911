import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`bg-neo-white border-2 border-neo-black p-2 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center rounded-full w-10 h-10 ${className}`}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Sun className="w-5 h-5 text-neo-black" />
      ) : (
        <Moon className="w-5 h-5 text-neo-black" />
      )}
    </motion.button>
  );
}
