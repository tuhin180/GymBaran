import FullBody from "@/Components/FullBody";
import Healthy from "@/Components/Healthy";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import Plan from "@/Components/Plan";

export default function Home() {
  return (
    <div className="max-w-[1246px] mx-auto p-2 md:p-0">
      <Navbar />
      <HeroSection />
      <Healthy />
      <Plan />
      <FullBody />
    </div>
  );
}
