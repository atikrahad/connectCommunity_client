"use client"
import Header from '@/components/Shared/Header';
import React from 'react';

const page = () => {
    const user = fetch('http://localhost:5000/user?email=atik@gmail.com')
    console.log(user);
    
    return (
        <div className='max-w-screen-lg h-[2000px] mx-auto'>
            <Header></Header>
        </div>
    );
};

export default page;