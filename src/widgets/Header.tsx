import { Book, Layers, Search, DoorOpen } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-14 w-full flex bg-header-bg items-center text-[rgb(222,222,222)] ">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full  w-full">
        <div className="flex gap-2 ">
          <Book color="#000" strokeWidth={1.25} />
          <span className=" text-lg">Murakami</span>
        </div>

        <div className="hidden md:flex gap-6">
          <div
            ref={dropdownRef}
            className="relative hover:bg-black/5 gap-3 flex items-center cursor-pointer px-2 py-1 rounded-md"
          >
            <Layers color="#000" strokeWidth={1.25} />
            <button onClick={() => setOpen((prev) => !prev)}>Каталог</button>

            {open && (
              <ul className="absolute top-full bg-white shadow-md rounded-md z-10 mt-2 py-3 px-3 min-w-48 flex flex-col space-y-3 text-[black] dark:bg-zinc-900 dark:text-[rgb(198,198,200)]">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Все книги
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Коллекции
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="hover:bg-black/5 flex gap-3 items-center cursor-pointer">
            <Search color="#000" strokeWidth={1.25} />
            <button>Поиск</button>
          </div>
        </div>

        <div className="flex items-center gap-4 hover:bg-black/5 cursor-pointer">
          <ThemeToggle />
          <DoorOpen color="#000" strokeWidth={1.25} />
          <button>Вход | Регистрация</button>
        </div>
      </div>
    </header>
  );
}
