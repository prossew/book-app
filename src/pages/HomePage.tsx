import { Header } from "@/widgets/Header";
import { Hero } from "@/widgets/Hero";
import { PopularBooks } from "@/features/popular-books/PopularBooks";
import { MainContent } from "@/widgets/MainContent";
import { Footer } from "@/widgets/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <PopularBooks />
      <MainContent />
      <Footer />
    </>
  );
}
