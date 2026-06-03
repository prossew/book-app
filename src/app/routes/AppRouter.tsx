import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
