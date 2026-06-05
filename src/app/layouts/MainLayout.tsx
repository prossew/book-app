import { Header } from "@/widgets/Header";
import { Outlet, useLocation, matchPath } from "react-router-dom";

export function MainLayout() {
  const location = useLocation();
  const hideHeader = !!matchPath(
    { path: "/book/:id/read", end: true },
    location.pathname,
  );

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Header />}

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
