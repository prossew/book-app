import { useEffect, useRef } from "react";
import type { Rendition } from "epubjs";

type EpubFactory = (typeof import("epubjs"))["default"];

export function useEpubReader(
  epubPath: string | undefined,
  viewerRef: React.RefObject<HTMLDivElement | null>,
) {
  const renditionRef = useRef<Rendition | null>(null);

  useEffect(() => {
    if (!epubPath || !viewerRef.current) return;

    let mounted = true;

    import("epubjs").then((module) => {
      if (!mounted || !viewerRef.current) return;

      const ePub = (module.default || module) as EpubFactory;

      const book = ePub(epubPath);

      const rendition = book.renderTo(viewerRef.current, {
        width: "100%",
        height: "100%",
        allowScriptedContent: true,
      }) as Rendition;

      rendition.display();

      renditionRef.current = rendition;
    });

    return () => {
      mounted = false;
      renditionRef.current?.destroy?.();
    };
  }, [epubPath, viewerRef]);

  return renditionRef;
}
