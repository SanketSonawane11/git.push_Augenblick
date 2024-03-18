"use client"

import React, { useState, useEffect } from "react";
import './chat.css'

function App() {

    const [array, setArray] = useState([{
        id: 1,
        msg: "One",
    },
    {
        id: 2,
        msg: "two",
    },
    {
        id: 3,
        msg: "three"
    }
    ]);
    const [input, setInput] = useState("");

    useEffect(() => {

    }, [array])



    return (
        <div className="chat-main flex items-center overflow-hiddden gap-[2vw]">
            <div className='navbar h-[100vh] w-[8vw] bg-[#4b4b4b]'>
            </div>
            <div className="chat-window py-[1vw] h-[100%] w-[90vw] flex flex-col justify-between">
                <div className="header w-fit h-[18vh] py-[0.5vw] px-[2vw]">
                    <h2 className="text-[3vw] bg-grad font-semibold">Your Assistant</h2>
                    <h5 className="ml-[0.5vw] text-[1vw] font-thin">One assistant for all your needs</h5>
                </div>
                <div className="chat-content flex items-center gap-[1.5vw] justify-start flex-col w-[90vw] h-[77vh] py-[1vw]">
                    <div className="chat-response bg-[#747474] w-[90%] rounded-xl px-[1.5vw] py-[2vw]">
                        {array.length ? "Hei" : "Nai"}
                    </div>
                    <div className="footer fixed bottom-[3.5vw] w-full h-[8vh] flex flex-col items-center justify-center">
                        <div className="user-input rounded-full text-white font-medium bg-[#3a3a3ad4] flex items-center justify-center text-[1.1vw] w-[70%] h-[100%] p-[0.5vw] border-blue-600">
                            <input
                                className="w-[90%] ml-[1vw] text-white h-[100%] bg-transparent focus:border-4"
                                type="text"
                                value={input}
                                placeholder="Enter here"
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                className="w-[10%] h-[100%] rounded-full active:scale-70 active:text-[#2a2a2a] active:bg-white transition-all duration-500 ease-in-out"
                                onClick={() => {
                                    array.push({
                                        user: input,
                                    });
                                    setInput("");
                                }}
                            >
                                Send
                            </button>
                        </div>

                    </div>
                </div >
            </div>
        </div>

    );
}


export default App;

{/* {array.map((e, index) => (
    <h1 key={index}>{e.user}</h1>
))}
<input
    type="text"
    value={input}
    placeholder="Enter here"
    onChange={(e) => setInput(e.target.value)}
/>
<button
    onClick={() => {
        array.push({
            user: input,
        });
        setInput("");
    }}
>
    Send
</button>
<button className="mx-[2vw]" onClick={() => { setArray([]) }}>Clear Chats</button> */}