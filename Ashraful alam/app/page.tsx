import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Competitions } from "@/sections/competitions";
import { More } from "@/sections/more";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Competitions />
        <More />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
