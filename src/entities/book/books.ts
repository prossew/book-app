export type Book = {
  id: string;
  title: string;
  cover: string;
  epubPath?: string;
  category: "book" | "manga";
  author: string;
  year: number;
  description: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "Норвежский лес",
    cover: "/books/1.webp",
    epubPath: "/epubs/Norwegian_Wood.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 1987,
    description: "Роман о любви и одиночестве в Токио.",
  },
  {
    id: "2",
    title: "Кафка на пляже",
    cover: "/books/2.webp",
    epubPath: "/epubs/Kafka_on_the_beach.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2005,
    description: "Роман о жизни и любви в современном Токио.",
  },
  {
    id: "3",
    title: "1Q84",
    cover: "/books/3.jpg",
    epubPath: "/epubs/1Q84.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2009,
    description: "Эпический роман о двух мирах, пересекающихся в тайне.",
  },
  {
    id: "4",
    title: "Послемрак",
    cover: "/books/4.webp",
    epubPath: "/epubs/After_Dark.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2011,
    description: "Роман о жизни и любви в современном Токио.",
  },
  {
    id: "5",
    title: "Мужчины без женщин",
    cover: "/books/5.webp",
    epubPath: "/epubs/Man_without_woman.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2014,
    description: "Роман о любви и одиночестве в Токио.",
  },
  {
    id: "6",
    title: "Охота на овец",
    cover: "/books/6.webp",
    epubPath: "/epubs/Sheep_Hunting.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2017,
    description: "Роман о жизни и любви в современном Токио.",
  },
  {
    id: "7",
    title: "К югу от границы, на запад от солнца. Х.",
    cover: "/books/7.webp",
    epubPath: "/epubs/South_of_the_border_west_of_the_suns.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2018,
    description: "Роман о жизни и любви в современном Токио.",
  },
  {
    id: "8",
    title: "О чем я говорю, когда говорю о беге",
    cover: "/books/8.webp",
    epubPath: "/epubs/What_do_I_talk_about_when_I_talk_about_running.epub",
    category: "book",
    author: "Харуки Мураками",
    year: 2019,
    description: "Роман о жизни и любви в современном Токио.",
  },
  {
    id: "9",
    title: "Анна Каренина",
    cover: "/books/9.jpg",
    epubPath: "/epubs/Anna_Karenina.epub",
    category: "book",
    author: "Лев Толстой",
    year: 1877,
    description: "Роман о любви и предательстве в имперской России.",
  },
];
