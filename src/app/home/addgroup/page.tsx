"use client"
import React from 'react';
import image from "@/assets/creategroup/image.jpg"
import Image from 'next/image';
const page = () => {
    return (
        <div className='max-w-screen-lg  mx-auto'>
            <form >
                <div className=' grid gap-5 grid-cols-1 md:grid-cols-9'>
                    <div className='grid grid-cols-1 gap-5   col-span-3'>
                        <input className='border outline-none px-5 rounded-md' type="text" placeholder='Group name' />
                        <input className='border outline-none px-5 rounded-md' type="text" placeholder='Group name' />
                        <input className='border outline-none px-5 rounded-md' type="text" placeholder='Group name' />
                    </div>
                    <div className='grid gap-5 col-span-6 '>
                        <div onClick={() => document.querySelector(".cover").click()} className='w-full overflow-hidden border h-[350px]'>
                            <Image className='w-[65%] mx-auto' src={image} alt='Upload cover'></Image>
                            <input className='cover' hidden type="file" />
                        </div>
                        <div onClick={() => document.querySelector(".grouppic").click()} className='rounded-full overflow-hidden border w-40'>
                            <Image className='' src={image} alt='Upload cover'></Image>
                            <input hidden className='grouppic' type="file" />
                        </div>
                    </div>
                </div>
                <input type="submit" className='btn my-5' value={"Create a Group"}/>
            </form>
        </div>
    );
};

export default page;