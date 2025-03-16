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

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="fixed bottom-5 right-4 md:bottom-10 md:right-10 cursor-pointer z-50"
        onClick={() => window.open("https://wa.link/833iq5", "_blank")}
      >
        <img
          src="https://imgs.search.brave.com/-QrW9FmSc6g53Gwf_qHvd90sRHGman2py0Cuf90eEoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC93aGF0c2Fw/cC1pY29uLTE5Nzd4/MjA0OC02bGNubXlt/bC5wbmc"
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
