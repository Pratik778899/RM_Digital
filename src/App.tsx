import { Toaster } from "react-hot-toast";
import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { DotPatternBox } from "./components/magicui/DotPatternBox";
import { About } from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testrimonial";
import Animated from "./components/ui/Animated";
import WhatsappLogo from "@/assets/whatsapp.png";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="z-[100] fixed right-4 top-4">
        <Toaster position="top-right" reverseOrder={true} />
      </div>

      <div
        className="fixed bottom-5 right-4 md:bottom-10 md:right-10 cursor-pointer z-50"
        onClick={() => window.open("https://wa.link/xp4e8t", "_blank")}
      >
        <img
          src={WhatsappLogo}
          alt="whatsapp"
          className="h-14 w-14 md:h-16 md:w-16 rounded-full drop-shadow-2xl"
        />
      </div>
      <Navbar />
      <Home />
      <Animated>
        <DotPatternBox />
      </Animated>
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
