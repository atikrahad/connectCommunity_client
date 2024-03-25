import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { MdGroups2 } from "react-icons/md";
import { FaWpforms, FaPeopleArrows } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";


const Mainnavber = () => {
    return (
        <div className="fixed bg-slate-50 shadow-lg w-full p-2 md:py-5">
            <div className='max-w-screen-xl flex-col gap-3 md:flex-row mx-auto flex md:items-center justify-between '>
                <div className='flex  items-center justify-between'>
                    <div>
                        <Logo></Logo>
                    </div>
                    <div className='contents w-full md:hidden'><Link href={"/profile"}>Profile</Link></div>

                </div>
                <div className=' grid grid-cols-4 gap-5 text-5xl'>
                    <Link href={"/home/groups"}>
                        <div className='px-5 hover:bg-slate-100'><MdGroups2 className='w-[95%] mx-auto' /></div>
                    </Link>
                    <Link href={"/group"}><div className='px-5 hover:bg-slate-100'><FaWpforms className='w-[95%] mx-auto' /></div></Link>
                    <Link href={"/group"}><div className='px-5 hover:bg-slate-100'><FaPeopleArrows className='w-[95%] mx-auto' /></div></Link>
                    <Link href={"/chat"}><div className='px-5 hover:bg-slate-100'><CiChat2 className='w-[95%] mx-auto' /></div></Link>
                </div>
                <div className='hidden md:contents'><Link href={"/profile"}>Profile</Link></div>
            </div>
        </div>
    );
};

export default Mainnavber;