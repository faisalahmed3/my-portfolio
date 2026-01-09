import ProfileCard from "@/components/sidebar/ProfileCard";
import SidebarNav from "@/components/sidebar/SidebarNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <aside className="hidden lg:block w-[320px] fixed h-screen border-r border-gray-800">
        <ProfileCard />
      </aside>

      <section className="flex-1 lg:ml-[320px] px-6 lg:px-16">
        <SidebarNav />

        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </section>
    </main>
  );
}
