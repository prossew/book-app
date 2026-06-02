import { books } from "@/entities/book/books";

export function LatestUpdates() {
  return (
    <section className="max-w-[610px] bg-[#f5f5f5] dark:bg-zinc-900 rounded-lg px-6 py-8 shadow-sm ">
      <h2 className="text-2xl font-semibold  dark:text-[rgb(198,198,200)]">
        Последние обновления
      </h2>

      <div className="flex flex-col gap-6 mt-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex gap-4 border-b border-zinc-200 dark:border-zinc-700 pb-4"
          >
            <div className="flex gap-3 shrink-0">
              <img
                src={book.cover}
                alt={book.title}
                className="w-[80px] h-[112px] rounded-md object-cover"
              />

              <div>
                <h3 className="font-medium  dark:text-[rgb(198,198,200)] mt-2">
                  {book.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  {book.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
