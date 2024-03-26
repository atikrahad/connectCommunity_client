import Allgroups from '@/components/ui/Groups/Allgroups';
import Mygroups from '@/components/ui/Groups/Mygroups';
import React from 'react';

const page = () => {
    return (
        <div className='grid gap-5 grid-cols-1 max-w-screen-lg mx-auto md:grid-cols-9'>
            <Mygroups/>
            <Allgroups/>
        </div>
    );
};

export default page;