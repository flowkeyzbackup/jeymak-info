import FeaturedProducts from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";
import Statistics from "./components/home/statistics";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 ">
     <Hero/>
     <Statistics/>
     <FeaturedProducts/>
    </main>
  );
}