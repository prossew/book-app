import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="p-2 rounded-md hover:bg-black/5 transition-colors duration-150"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
