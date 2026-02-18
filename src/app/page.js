import Accommidation from "./Components/Accommidation/Accommidation";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/OurServices/OurServices";
import SliderSection from "./Components/SliderSection/SliderSection";
import WhyMasarra from "./Components/WhyMasarra/WhyMasarra";

export default function Home() {
  return (
    <div className="app">
      <div className="app_scroll_wrapper">
        <Hero />
        <WhyMasarra />
        <OurServices />
        <SliderSection />
        <Accommidation />
        <Contact />
      </div>
    </div>
  );
}
