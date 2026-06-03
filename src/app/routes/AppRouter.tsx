import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {routes.map((r) => (
            <Route key="layout" element={r.element}>
              {r.children?.map((child) => (
                <Route 
                  key={child.path} 
                  path={child.path} 
                  element={child.element} 
                />
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
