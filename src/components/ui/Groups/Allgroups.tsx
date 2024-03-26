import React from 'react';

const Allgroups = () => {
    return (
        <div className='border grid grid-cols-1 col-span-6'>
            <div className='pr-5'>
                <form>
                    <input type="text" placeholder='Search groups' className='py-2 px-3 rounded-full w-full outline-none my-3 border' />
                </form>
            </div>
        </div>
    );
};

export default Allgroups;