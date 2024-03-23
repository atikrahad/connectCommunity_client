'use client'
import Link from "next/link";
import pageScroll from 'page-scroll';
import Logo from "@/Components/Logo";
import { FaArrowUp } from "react-icons/fa6";
import './utility.css'
const Navber = () => {
    return (
        <div>
            <div className="max-w-6xl py-3 flex items-center justify-between mx-auto">
                <div>
                    <Logo></Logo>
                </div>

                <div className="flex items-center gap-5">

                    <div className="flex navs gap-6 items-center text-xl">
                        <button className="nav" onClick={(event: any) => pageScroll(500)}>Services</button>
                        <button className="nav" onClick={(event: any) => pageScroll(500)}>How to start</button>
                        <button className="nav" onClick={(event: any) => pageScroll(500)}>About us</button>
                        <button className="nav" onClick={(event: any) => pageScroll(500)}>Contact</button>
                    </div>
                    <Link href={"/login"}><button className="btn badge-ghost">Login</button></Link>
                    <Link href={'/register'}><button className="btn badge-ghost">Register</button></Link>
                </div>
            </div>

            <button className="fixed bottom-2 btn text-2xl  right-2" onClick={(event: any) => pageScroll(0)}>
                <div><FaArrowUp /></div>
            </button>


        </div>
    );
};

export default Navber;