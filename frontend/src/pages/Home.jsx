import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Brands />
      <Contact />
       <footer className="bg-brand-blue text-white py-8 text-center">
        <p>&copy; 2026 Apidaniels Auto & Trade LLC. All rights reserved.</p>
      </footer>
      <FloatingWhatsapp />
    </>
  );
}