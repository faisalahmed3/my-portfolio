import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="lg:ml-80 px-6">
      <Hero />
      <Stats />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
