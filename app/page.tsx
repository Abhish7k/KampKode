import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import StickyScrollSection from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <HeroSection />

      <StickyScrollSection />
    </main>
  );
}
