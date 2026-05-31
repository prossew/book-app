import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Header } from "./assets/widgets/Header.tsx";
import { Hero } from "./assets/widgets/Hero.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Hero />
    <App />
  </StrictMode>,
);
