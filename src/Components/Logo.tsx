import Image from "next/image";
import logo1 from "../../public/assets/logo/logo1.png"
import logo2 from "../../public/assets/logo/logo2.png"

const Logo = () => {
    return (
        <div className="flex select-none items-center">
            <h1 className="text-5xl font-semibold text-[#FF914D]">Bon</h1>
            <Image className="h-10 w-10" src={logo1} alt="logo1"/>
            <Image className="h-10 w-10" src={logo2} alt="logo2"/>
            <h1 className="text-5xl font-semibold text-[#0197B2]">ox</h1>
        </div>
    );
};

export default Logo;