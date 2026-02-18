import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/OurServices/OurServices";
import SliderSection from "./Components/SliderSection/SliderSection";
import WhyMasarra from "./Components/WhyMasarra/WhyMasarra";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <WhyMasarra />
      <OurServices />
      <SliderSection />
    </div>
  );
}
