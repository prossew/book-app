import { useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "@/entities/book/books";
import { BookOpen } from "lucide-react";

export function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  const [tab, setTab] = useState<"about" | "reviews">("about");

  if (!book) {
    return <div className="text-center mt-10">Книга не найдена</div>;
  }

  return (
    <section className="max-w-[1200px] mx-auto mt-10 flex gap-8">
      <div className="flex flex-col items-center">
        <img
          src={book.cover}
          className="w-[260px] h-[364px] rounded-2xl object-cover shadow-md"
        />

        <button className="mt-6 w-[260px] bg-[#ef6c00] text-white py-2 rounded-md hover:opacity-90 transition">
          <BookOpen className="inline-block mr-2" size={18} />
          Начать читать
        </button>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4 dark:text-[rgb(198,198,200)]">
          {book.title}
        </h1>

        <div className="w-[880px] bg-[#f5f5f5] dark:bg-zinc-900 rounded-lg shadow-sm px-8 py-6">
          <div className="flex gap-6 mb-4 text-sm border-b border-gray-200 dark:border-zinc-700 pb-2">
            <span
              onClick={() => setTab("about")}
              className={`cursor-pointer pb-3 text-sm transition ${
                tab === "about"
                  ? "text-[#ef6c00] border-b-2 border-[#ef6c00]"
                  : "text-gray-500"
              }`}
            >
              О книге
            </span>

            <span
              onClick={() => setTab("reviews")}
              className={`cursor-pointer pb-2 transition ${
                tab === "reviews"
                  ? "text-[#ef6c00] border-b-2 border-[#ef6c00]"
                  : "text-gray-500"
              }`}
            >
              Отзывы
            </span>
          </div>

          {tab === "about" && (
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {book.description || "Описание книги пока отсутствует."}
            </p>
          )}

          {tab === "reviews" && (
            <div className="space-y-4">
              // отзывы пока отсутствуют, так что просто заглушка //
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
