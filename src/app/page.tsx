import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Results } from "@/components/Results";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Results />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
