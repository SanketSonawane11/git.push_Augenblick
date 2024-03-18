import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


function Navbar() {

    const navLinks = [
        {
            icon: <FaRegUserCircle />,
            title: "Profile"
        }
    ]

    return (
        <div className='w-[4vw] h-[95vh] py-[2.1vw] m-[0.5vw] flex justify-end flex-col gap-[0.5vw] items-center '>
            <ul>
                <li className='flex flex-col items-center text-[1.5vw]'><FaRegUserCircle />
                    <p className='text-[0.9vw]'>Profile</p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar