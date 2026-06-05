import { lazy } from "react";

const LazyReaderPage = lazy(() =>
  import("@/pages/ReaderPage").then((m) => ({ default: m.ReaderPage })),
);

export default LazyReaderPage;
