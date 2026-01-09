import ProfileCard from "@/components/sidebar/ProfileCard";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import RotatingSettings from "@/components/ui/RotatingSettings";
import RightIconNav from "@/components/ui/RightIconNav";

export default function Home() {
  return (
    <main className="bg-[#0B0F14] min-h-screen relative overflow-x-hidden">
      
      {/* LEFT AREA
         - Mobile/Tablet/Laptop ( < xl ): normal flow (NOT fixed)
         - Desktop ( xl+ ): fixed sidebar
      */}
      <aside
        className="
          relative
          w-full
          xl:fixed xl:top-0 xl:left-0
          xl:w-[500px]
          xl:h-screen
          flex
          items-start xl:items-center
          justify-center
          pt-6 xl:pt-0
          z-30
        "
      >
        <div className="relative w-full flex justify-center px-4 xl:px-0">
          <RotatingSettings />
          <ProfileCard />
        </div>
      </aside>

      {/* RIGHT ICON NAV
         - Mobile/Tablet/Laptop: dropdown
         - Desktop (xl+): fixed vertical nav
      */}
      <RightIconNav />

      {/* MAIN CONTENT
         - Mobile/Tablet/Laptop: full width below card
         - Desktop (xl+): shifted right because sidebar is fixed
      */}
      <section
        className="
          min-h-screen
          px-5 sm:px-8
          mt-8
          xl:mt-0
          xl:ml-[500px]
          xl:px-16
        "
      >
        <Hero />
        <Services />
      </section>
    </main>
  );
}
