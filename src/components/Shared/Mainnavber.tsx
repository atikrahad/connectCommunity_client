"use client"
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { MdGroups2 } from "react-icons/md";
import { FaWpforms, FaPeopleArrows } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";
import { logout } from '@/lib/auth';
import { useRouter } from 'next/navigation';


const Mainnavber = () => {
    const route = useRouter()
    return (
        <div className="fixed bg-slate-50 shadow-lg w-full p-2 md:py-5">
            <div className='max-w-screen-xl flex-col gap-3 md:flex-row mx-auto flex md:items-center justify-between '>
                <div className='flex  items-center justify-between'>
                    <div>
                        <Logo></Logo>
                    </div>
                    <div className='contents w-full md:hidden'>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">Click</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href={"/home/profile"}>Profile</Link></li>
                                <li><button onClick={() => {
                                    logout
                                    route.push("/login")
                                }} className='btn'>Logout</button></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className=' grid grid-cols-4 gap-5 text-5xl'>
                    <Link href={"/home/groups"}>
                        <div className='px-5 hover:bg-slate-100'><MdGroups2 className='w-[95%] mx-auto' /></div>
                    </Link>
                    <Link href={"/group"}><div className='px-5 hover:bg-slate-100'><FaWpforms className='w-[95%] mx-auto' /></div></Link>
                    <Link href={"/group"}><div className='px-5 hover:bg-slate-100'><FaPeopleArrows className='w-[95%] mx-auto' /></div></Link>
                    <Link href={"/chat"}><div className='px-5 hover:bg-slate-100'><CiChat2 className='w-[95%] mx-auto' /></div></Link>
                </div>
                <div className='hidden md:contents'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={"/home/profile"}>Profile</Link></li>
                            <li><button onClick={() => {
                                logout
                                route.push("/login")
                            }} className='btn'>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mainnavber;