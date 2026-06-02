type Props = {
  title: string;
  cover: string;
};

export function BookCard({ title, cover }: Props) {
  return (
    <div className="w-[135px] flex flex-col items-center shrink-0 ">
      <img
        src={cover}
        alt={title}
        className="w-[135px] h-[189px] object-cover rounded-md shadow"
      />
      <p className="mt-2 text-xs text-center leading-tight line-clamp-2">
        {title}
      </p>
    </div>
  );
}
