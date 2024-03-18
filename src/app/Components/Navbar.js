import Link from 'next/link';
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


function Navbar() {

    return (
        <div className='w-[4vw] h-[95vh] py-[2.1vw] m-[0.5vw] flex justify-end flex-col gap-[0.5vw] items-center '>
            <Link href="/Pages/Profile" className='w-[100%] h-fit py-[0.5vw] flex flex-col items-center justify-center gap-[0.5vw] text-[2vw]'>
                <FaRegUserCircle />
                <p className='text-[1vw]'>Profile</p>
            </Link>
        </div>
    )
}

export default Navbar