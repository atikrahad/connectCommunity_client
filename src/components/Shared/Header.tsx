import Image from 'next/image';
import React from 'react';
import image from "@/assets/banner/image.png"
import Link from 'next/link';

const Header = ({ data }: { data: any }) => {

    return (
        <div className='relative'>
            <div className='pb-5 relative'>
                <Image width={1000} height={0} src={data?.groupCover} alt='cover image'></Image>

                <div className='md:absolute  relative inline-block md:right-[45%] bottom-10 md:-bottom-16'>
                    <Image width={100} height={20} className='w-40 rounded-full border-3 h-40' src={data?.groupPic} alt='profile pic'></Image>
                    <h1 className='text-center text-2xl font-semibold'>{data?.groupName}</h1>
                    <div>
                        {
                            data?.groupName ? <h1 className='text-center'>Group Member {data?.members.length}</h1> : <h1 className='text-center'>Friends 100</h1>
                        }
                    </div>
                </div>
            </div>
            <div >
                <div className='sticky flex  py-5 items-center justify-evenly'>
                    <Link href={"/timeline"}>Time Line</Link>
                    <Link href={"/about"}>About</Link>
                    <Link className='md:pr-16' href={"/photos"}>Photos</Link>

                    {
                        data?.groupName ? <Link className='md:pl-32' href={"/photos"}>Group Members</Link> : <Link className='md:pl-32' href={"/photos"}>Friends</Link>
                    }
                    {
                        data?.groupName ? <button>Join group</button> : <Link className='md:pl-32' href={"/photos"}>Groups</Link>
                    }
                    {
                        data?.groupName ? <button>Invite friends</button> : <Link className='md:pl-32' href={"/photos"}>Friends</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;