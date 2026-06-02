type Book = {
  id: string;
  title: string;
  cover: string;
  category: "Книга" | "Манга";
};

export const books: Book[] = [
  {
    id: "1",
    title: "Норвежский лес",
    cover: "/books/1.webp",
    category: "Книга",
  },
  {
    id: "2",
    title: "Кафка на пляже",
    cover: "/books/2.webp",
    category: "Книга",
  },
  {
    id: "3",
    title: "1Q84",
    cover: "/books/3.jpg",
    category: "Книга",
  },
  {
    id: "4",
    title: "Послемрак",
    cover: "/books/4.webp",
    category: "Книга",
  },
  {
    id: "5",
    title: "Мужчины без женщин",
    cover: "/books/5.webp",
    category: "Книга",
  },
  {
    id: "6",
    title: "Охота на овец",
    cover: "/books/6.webp",
    category: "Книга",
  },
  {
    id: "7",
    title: "К югу от границы, на запад от солнца. Х.",
    cover: "/books/7.webp",
    category: "Книга",
  },
  {
    id: "8",
    title: "О чем я говорю, когда говорю о беге",
    cover: "/books/8.webp",
    category: "Книга",
  },
  {
    id: "9",
    title: "Анна Каренина",
    cover: "/books/9.jpg",
    category: "Книга",
  },
];
