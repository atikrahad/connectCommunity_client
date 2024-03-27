"use client"
import React from 'react';

const Givefeadback = () => {
const handleFeadback = (e:any)=>{
    e.preventDefault()
}
    return (
        <div className='max-w-screen-md py-20 mx-auto'>
            <h1 className='text-3xl font-semibold text-center text-slate-700'>For any improvement</h1>
            <h1 className='text-5xl font-semibold text-center'>Give a Feadback</h1>
            <div className='py-10'>
                <form onSubmit={handleFeadback} className='space-y-10' >
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                    <input className='w-full py-2 px-3 border outline-none rounded-md' placeholder='Name' type="text" />
                    <input className='w-full py-2 px-3 border outline-none rounded-md' placeholder='Email' type="email" />
                    </div>
                    <textarea placeholder='Massage' className='w-full px-3 py-3 h-40 border outline-none rounded-md' name="" id=""></textarea>
                    <input className='btn text-2xl' type="submit" value={"Submit"}/>
                </form>
            </div>
        </div>
    );
};

export default Givefeadback;