'use client'

import React, { useState } from "react";
import './chat.css';
import EmptyChat from "@/app/Components/EmptyChat";
import { FaQuoteLeft } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";

function App() {
    const [input, setInput] = useState("");
    const [currentResponse, setcurrentResponse] = useState("");

    const fetchResponse = async (userInput) => {
        try {
            const response = await axios.get(`https://eced-34-143-188-62.ngrok-free.app/chatbot?text=${userInput}`
            );

            if (response.status === 200) {
                setcurrentResponse(response.data);
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
            setcurrentResponse(error.message);
        }
    };

    async function getUser() {
        try {
            const response = await axios.get(`https://eced-34-143-188-62.ngrok-free.app/chatbot?text="shoes under 1000"`);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="chat-main flex items-center overflow-hiddden gap-[2vw]">
            <div className='navbar flex items-center justify-end h-[100vh] w-[5vw] bg-[#212122]'>
                <Navbar />
            </div>
            <div className="chat-window py-[1vw] h-[100%] w-[90vw] flex flex-col justify-between">
                <div className="header flex items-center justify-between w-[100%] h-[18vh] py-[0.5vw] px-[2vw]">
                    <div className="text-content">
                        <h2 className="text-[3.5vw] bg-grad font-extrabold">Your Assistant</h2>
                        <h5 className="ml-[0.5vw] text-[1vw] font-thin flex gap-[0.5vw]"><FaQuoteLeft className="text-[0.7vw]" />
                            One assistant for all your needs
                        </h5>
                    </div>
                    <div className="actions">
                        <button onClick={() => setcurrentResponse("")}><MdDeleteSweep className="text-white w-[4vw] h-[3vw] rounded-2xl active:opacity-10 transition-all duration-400 ease-in-out text-[1.5vw]" /></button>
                    </div>
                </div>
                <div className="chat-content flex items-center gap-[1.5vw] justify-start flex-col w-[90vw] h-[77vh] py-[1vw]">
                    <div className="chat-response w-[90%] rounded-xl px-[1.5vw] py-[2vw]">
                        {currentResponse ? <>{currentResponse}</> : <EmptyChat />}
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
                                className="w-[10%] h-[100%] hover:bg-[#ffffff2d] active:scale-70 active:text-[#2a2a2a] active:bg-white transition-all duration-500 ease-in-out"
                                onClick={() => {
                                    // fetchResponse(input);
                                    getUser();
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
