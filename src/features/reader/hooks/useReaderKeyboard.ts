import { useEffect } from "react";
import type { Rendition } from "epubjs";

export function useReaderKeyboard(
  renditionRef: React.RefObject<Rendition | null>,
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        renditionRef.current?.prev();
      }

      if (event.key === "ArrowRight") {
        renditionRef.current?.next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [renditionRef]);
}
