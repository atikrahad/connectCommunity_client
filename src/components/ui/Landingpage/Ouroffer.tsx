import React from 'react';
import { FaPeopleArrows } from "react-icons/fa6";

const Ouroffer = () => {
    return (
        <div className='py-40 '>
            <h1 className='text-center pb-20 text-3xl'>Your Offer For This Site</h1>
            <div className='grid grid-cols-1 md:gap-12  max-w-screen-lg mx-auto md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-cyan-600 rounded-full inline-block p-5'><FaPeopleArrows className='text-6xl' /></div>
                    <h1 className='text-2xl font-medium'>Learning Groups</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-cyan-600 rounded-full inline-block p-5'><FaPeopleArrows className='text-6xl' /></div>
                    <h1 className='text-2xl font-medium'>Learning Groups</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-cyan-600 rounded-full inline-block p-5'><FaPeopleArrows className='text-6xl' /></div>
                    <h1 className='text-2xl font-medium'>Learning Groups</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
                <div className='flex text-center gap-5 items-center flex-col justify-center'>
                    <div className=' bg-cyan-600 rounded-full inline-block p-5'><FaPeopleArrows className='text-6xl' /></div>
                    <h1 className='text-2xl font-medium'>Learning Groups</h1>
                    <p className='text-justify'>For learning you can create or join proffessinal group community. There every one can share valuable content</p>
                </div>
            </div>
        </div>
    );
};

export default Ouroffer;