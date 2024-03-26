import Image from 'next/image';
import React from 'react';
import image from "@/assets/banner/image.png"
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className='relative'>
            <div className='pb-5 relative'>
                <Image src={image} alt='cover image'></Image>

                <div className='md:absolute  relative inline-block md:right-[45%] bottom-10 md:-bottom-16'>
                    <Image className='w-40 rounded-full border-3 h-40' src={image} alt='profile pic'></Image>
                    <h1 className='text-center text-2xl font-semibold'>Name</h1>
                    <div>
                        <h1 className='text-center'>Friend 1000</h1>
                    </div>
                </div>
            </div>
            <div >
                <div className='sticky flex  py-5 items-center justify-evenly'>
                    <Link href={"/timeline"}>Time Line</Link>
                    <Link href={"/about"}>About</Link>
                    <Link className='md:pr-16' href={"/photos"}>Photos</Link>

                    <Link className='md:pl-16' href={"/photos"}>Friends</Link>
                    <Link href={"/photos"}>Groups</Link>
                    <Link href={"/photos"}>Groups</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;