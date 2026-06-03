import { lazy } from "react";

const LazyBookPage = lazy(() =>
  import("@/pages/BookPage").then((m) => ({
    default: m.BookPage,
  })),
);

export default LazyBookPage;
