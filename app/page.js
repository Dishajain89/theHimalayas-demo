import Commitments from "@/components/commitments";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import LeftBar from "@/components/leftBar";
import Navbar from "@/components/navbar";
import SlantedExplore from "@/components/slantedExplore";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LeftBar />
      <HeroSection />
      <SlantedExplore/>
      <Commitments />
      <StatsSection />
      <Footer/>
    </div>
  );
}
