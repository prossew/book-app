import { BookCard } from "./BookCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type Book = {
  title: string;
  cover: string;
};

const books: Book[] = [
  { title: "Норвежский лес", cover: "/books/1.webp" },
  { title: "Кафка на пляже", cover: "/books/2.webp" },
  { title: "1Q84", cover: "/books/3.jpg" },
  { title: "Послемрак", cover: "/books/4.webp" },
  { title: "Мужчины без женщин", cover: "/books/5.webp" },
  { title: "Охота на овец", cover: "/books/6.webp" },
  { title: "К югу от границы, на запад от солнца. Х.", cover: "/books/7.webp" },
  {
    title: "О чем я говорю, когда говорю о беге",
    cover: "/books/8.webp",
  },
  { title: "Анна Каренина", cover: "/books/9.jpg" },
];

export function BookCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-[1170px] h-[273px] mx-auto group bg-[#f5f5f5] rounded-lg px-6 shadow-sm">
      <button
        onClick={scrollLeft}
        className="
    absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100  hover:scale-110 transition-all duration-200"
      >
        <ChevronLeft />
      </button>
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto no-scrollbar h-full items-center"
      >
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="
    absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-200"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
