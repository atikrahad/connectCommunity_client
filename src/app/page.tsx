import Banner from "@/components/ui/Landingpage/Banner";
import Footer from "@/components/ui/Landingpage/Footer";
import Navber from "@/components/ui/Landingpage/Navber";

export default function Home() {
  return (
    <div className="h-[1000px]">
      <Navber/>
      <Banner/>
      <Footer/>
    </div>
  );
}
