import { useState, useRef, useEffect } from "react";
import { Button } from "@/shared/ui/button";

type Option = {
  label: string;
  value: string;
};

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export function Dropdown({ value, options, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button variant="outline" onClick={() => setOpen((p) => !p)}>
        {value} ▼
      </Button>

      {open && (
        <div className="absolute right-1 mt-2 w-35 bg-gray border rounded-lg shadow-md overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150 active:bg-gray-200"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
