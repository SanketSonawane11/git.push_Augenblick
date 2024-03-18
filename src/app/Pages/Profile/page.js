"use client"

import React from 'react'
import "./profile.css"
import { IoIosNotificationsOutline } from "react-icons/io";
// import LineChart from '@/app/Components/LineChart';
// import App from '@/app/Components/LineChart';

const page = () => {
    return (
        <>
            <div className="dashboardWrapper">
                <div className="leftContent"></div>
                <div className="rightContent">
                    <div className="navDashboard">
                        <div className="btnL">
                            <IoIosNotificationsOutline className='text-[2vw] mx-[1vw]' />
                        </div>
                        <div className="profile" style={{ display: "flex", gap: "0.5rem" }}>
                            <img src="/avatar-logo.avif" alt="avatar" style={{ width: "3rem", height: "3rem", borderRadius: "50%", }} />
                            <div className="" style={{ color: "#fff" }}>
                                <h6>Lakshy Sharma</h6>
                                <p>lakshy18sharma@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="problemWrapper">
                            <div className="unSolved">
                                <h1 className='head'>Number of Problem Unsolved</h1>
                                <h2 className='number'>27</h2>
                            </div>
                            <div className="solved"
                                // style={{
                                //     background: "url(/Line-Graph.png) center no-repeat ",
                                //     backgroundSize: "contain"
                                // }}
                                >
                                        <h1 className='head'>Problem Unsolved
                                        </h1>
                                        <h1 className='' style={{color:"#fff",fontSize:"4rem"}}>
                                        <br/>42</h1>
                                {/* <h2 className='number' style={{position:"absolute"}}>42</h2> */}
                                </div>
                        </div>

                        <div className="userWrapper">
                            <div className="demo" style={{
                                width: "15rem", height: "20rem", backgroundColor: "#2a2a2a",
                                borderRadius: "2rem",
                                background: "url(/Line-Graph.png) center no-repeat ",
                                    backgroundSize: "contain"
                            }}>

                            </div>
                            <div className="solved overflow-hidden p-8" style={{
                                height: "20rem",
                            }}>

                                <p style={{color:"#fff",fontSize:"1.5rem"}}>
                                With boundless enthusiasm, we delight in providing top-notch customer service to diverse small businesses. Our approach is infused with positivity and warmth, ensuring every interaction is a joyous experience. Tailoring our support to individual needs, we offer accessible and reliable assistance around the clock. Committed to spreading happiness, we strive to leave a lasting impression of satisfaction and delight with every customer we serve.
                                😊🥰
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default page