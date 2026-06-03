import LazyHomePage from "./LazyHomePage";
import LazyBookPage from "./LazyBookPage";
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
    ],
  },
];
