'use client'

import React, { useState } from 'react'
import '../../globals.css'
import Login from '@/app/Components/Login'
import Register from '@/app/Components/Register'

function page() {

    const [isUser, setisUser] = useState(true);

    return (
        <div className='main'>
            <div className="avatarDiv">
                <div className="avatar">
                    <h2 className='logo text-[50px font-semibold'> Ask Up! </h2>
                </div>
            </div>

            <div className="contentDiv">
                <div className="loginCont">
                    {isUser ? <Login /> : <Register/>}
                    <div className='flex m-[0.8rem] items-center gap-2 flex-col'>
                        <p>{isUser ? "Dont have an Account?" : "Already Have An Account?"}</p>
                        <button className='bg-[#2a2a2ab7] px-[20px] py-[10px] rounded-xl hover:rounded-md hover:bg-[#2a2a2ab5] hover:border-4 active:bg-[#2a2a2a] hover:border-[#2a2a2a] active:scale-95 transition-all hover:text-[1vw] duration-200 ease-out text-white font-medium' onClick={() => { setisUser(!isUser) }}> {isUser ? "Create One" : "Login with existing account"} </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page