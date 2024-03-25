import avater from "@/assets/Auth/auth.gif"
import Logo from "@/components/Shared/Logo";
import Registerform from "@/components/ui/Auth/Registerform";
import Image from "next/image";
const register = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='max-w-screen-lg flex mx-auto shadow-lg'>
                <div className="w-[65%] select-none">
                    <Image src={avater} alt="authentication"/>
                </div>
                <div className="flex w-[35%] space-y-5 flex-col justify-center items-center">
                    <Logo/>
                    <Registerform/>
                </div>
            </div>
        </div>
    );
};

export default register;