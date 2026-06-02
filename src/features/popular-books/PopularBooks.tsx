import { useState } from "react";
import { Dropdown } from "@/shared/ui/Dropdown";
import { ArrowRight } from "lucide-react";
import { books } from "@/entities/book/books";

export function PopularBooks() {
  const [period, setPeriod] = useState("day");

  const options = [
    { label: "День", value: "day" },
    { label: "Неделя", value: "week" },
    { label: "Месяц", value: "month" },
  ];

  const currentLabel = options.find((o) => o.value === period)?.label ?? "День";

  return (
    <section className="max-w-[1170px] mx-auto mt-8 bg-[#f5f5f5] rounded-lg px-6 py-8 shadow-sm dark:bg-zinc-900 dark:text-[rgb(198,198,200)]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold leading-none text-zinc-900 dark:text-[rgb(198,198,200)]">
            Сейчас читают{" "}
          </h2>{" "}
          <ArrowRight size={18} className="ml-2" />
        </div>

        <Dropdown value={currentLabel} options={options} onChange={setPeriod} />
      </div>

      <p className="text-sm text-gray-500 mt-4">Популярное</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 transition cursor-pointer  "
          >
            <img
              src={book.cover}
              className="w-[72px] h-[72px] rounded-md object-cover shadow-sm "
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-800 truncate  dark:text-[rgb(198,198,200)]">
                {book.title}
              </p>

              <p className="text-xs text-gray-400">Книга</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
