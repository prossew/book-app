import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { books } from "@/entities/book/books";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

import { useEpubReader } from "@/features/reader/hooks/useEpubReader";
import { useReaderKeyboard } from "@/features/reader/hooks/useReaderKeyboard";

export function ReaderPage() {
  const { id } = useParams();

  const book = books.find((b) => b.id === id);

  const navigate = useNavigate();

  const viewerRef = useRef<HTMLDivElement | null>(null);

  const renditionRef = useEpubReader(book?.epubPath, viewerRef);

  useReaderKeyboard(renditionRef);

  if (!book) {
    return <div className="text-center mt-10">Книга не найдена</div>;
  }

  if (!book.epubPath) {
    return (
      <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-sm text-center">
        <p className="mb-4 text-lg">Для этой книги EPUB-файл не настроен.</p>

        <button
          className="px-4 py-2 bg-[#ef6c00] text-white rounded-md"
          onClick={() => navigate(`/book/${book.id}`)}
        >
          Вернуться к описанию
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900">
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-zinc-800 bg-white/90 backdrop-blur-sm dark:bg-zinc-800">
        <button
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#ef6c00] transition-colors"
          onClick={() => navigate(`/book/${book.id}`)}
        >
          <ArrowLeft size={18} />
          Назад
        </button>

        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-700"
            onClick={() => renditionRef.current?.prev()}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-700"
            onClick={() => renditionRef.current?.next()}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold dark:text-white">{book.title}</h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {book.author}
          </p>
        </div>

        <div className="h-[calc(100vh-128px)] rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white">
          <div ref={viewerRef} className="h-full" />
        </div>
      </div>
    </div>
  );
}
