import { lazy } from "react";

const LazyHomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({ default: m.HomePage })),
);

export default LazyHomePage;
