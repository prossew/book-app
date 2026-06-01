type Book = {
  id: string;
  title: string;
  cover: string;
};

export const books: Book[] = [
  { id: "1", title: "Норвежский лес", cover: "/books/1.webp" },
  { id: "2", title: "Кафка на пляже", cover: "/books/2.webp" },
  { id: "3", title: "1Q84", cover: "/books/3.jpg" },
  { id: "4", title: "Послемрак", cover: "/books/4.webp" },
  { id: "5", title: "Мужчины без женщин", cover: "/books/5.webp" },
  { id: "6", title: "Охота на овец", cover: "/books/6.webp" },
  {
    id: "7",
    title: "К югу от границы, на запад от солнца. Х.",
    cover: "/books/7.webp",
  },
  {
    id: "8",
    title: "О чем я говорю, когда говорю о беге",
    cover: "/books/8.webp",
  },
  { id: "9", title: "Анна Каренина", cover: "/books/9.jpg" },
];
