import Link from "next/link";
import React from "react";
import Header from "../Header";

const Layout = () => {
    return (
        <Link href={"/blog/1"}>
            <div className='relative flex flex-col justify-end w-full h-full rounded-md cursor-pointer' style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div style={{ background: 'rgba(0, 0, 0, 0.3)' }} className="relative px-5 py-3 rounded-b-md">
                    <p className="z-20 font-bold text-white ">oi</p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className='absolute z-20 px-2 bg-black rounded top-3 left-3'>
                    <p className='text-xs font-medium text-white'>sei</p>
                </div>
            </div>
        </Link>
    )
}

export default Layout;