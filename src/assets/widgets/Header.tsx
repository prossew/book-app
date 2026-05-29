import { Book, Layers, Search, DoorOpen } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-14 w-full flex bg-[oklch(0.685_0.169_237.323)] items-center">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full  w-full">
        <div className="flex gap-2">
          <Book color="#b73473" strokeWidth={1.25} />
          <span>Murakami</span>
        </div>

        <div className="hidden md:flex gap-6">
          <Layers color="#b73473" strokeWidth={1.25} />
          <div className="relative">
            <button onClick={() => setOpen((prev) => !prev)}>Каталог</button>

            {open && (
              <ul className="absolute top-full bg-white shadow-md rounded-md z-10 mt-2">
                <li>
                  <a href="#">Все книги </a>
                </li>
                <li>
                  <a href="#">Коллекции </a>
                </li>
              </ul>
            )}
          </div>

          <Search color="#b73473" strokeWidth={1.25} />
          <button>Поиск</button>
        </div>

        <div className="flex items-center gap-4">
          <DoorOpen color="#b73473" strokeWidth={1.25} />
          <button>Вход | Регистрация</button>
        </div>
      </div>
    </header>
  );
}
