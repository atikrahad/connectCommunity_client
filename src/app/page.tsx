import Banner from "@/components/ui/Landingpage/Banner";
import Footer from "@/components/ui/Landingpage/Footer";
import Givefeadback from "@/components/ui/Landingpage/Givefeadback";
import Navber from "@/components/ui/Landingpage/Navber";
import Ouroffer from "@/components/ui/Landingpage/Ouroffer";

export default function Home() {
  return (
    <div className="h-[1000px]">
      <Navber />
      <Banner />
      <Ouroffer />
      <hr />
      <Givefeadback/>
      <Footer />
    </div>
  );
}
