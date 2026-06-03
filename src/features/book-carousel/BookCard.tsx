import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  cover: string;
};

export function BookCard({ id, title, cover }: Props) {
  return (
    <Link
      to={`/book/${id}`}
      className="w-[135px] flex flex-col items-center shrink-0"
    >
      <img
        src={cover}
        alt={title}
        className="w-[135px] h-[189px] object-cover rounded-md shadow"
      />

      <p className="mt-2 text-xs text-center leading-tight line-clamp-2">
        {title}
      </p>
    </Link>
  );
}
