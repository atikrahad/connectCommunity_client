import Header from '@/components/Shared/Header';
import React from 'react';

const page = async ({ params }: { params: any }) => {
    const { id } = params
    console.log(id);

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group/${id}`).then(res => res.json())
    console.log(data);
    


    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header data={data}></Header>
        </div>
    );
};

export default page;