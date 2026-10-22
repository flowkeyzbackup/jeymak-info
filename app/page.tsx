import WhyChooseUs from "./components/about/WhyChooseUs";
import CallToAction from "./components/home/CallToAction";
import FeaturedProducts from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Statistics from "./components/home/statistics";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 ">
     <Hero/>
     <Statistics/>
     <FeaturedProducts/>
     <HowItWorks/>
     <WhyChooseUs/>
     <Testimonials/>
     <CallToAction/>
    </main>
  );
}