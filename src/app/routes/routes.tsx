import LazyHomePage from "./LazyHomePage";
import LazyBookPage from "./LazyBookPage";
import LazyReaderPage from "./LazyReaderPage";
import { MainLayout } from "../layouts/MainLayout";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <LazyHomePage /> },

      {
        path: "/book/:id",
        element: <LazyBookPage />,
      },
      {
        path: "/book/:id/read",
        element: <LazyReaderPage />,
      },
    ],
  },
];
