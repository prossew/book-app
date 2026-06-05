import LazyHomePage from "./LazyHomePage";
import LazyBookPage from "./LazyBookPage";
import { MainLayout } from "../layouts/MainLayout";
import LazyReaderPage from "./LazyReaderPage";

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
