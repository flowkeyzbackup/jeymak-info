import FeaturedProducts from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-20">
     <Hero/>
     <FeaturedProducts/>
    </main>
  );
}