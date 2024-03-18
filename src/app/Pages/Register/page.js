import React from 'react'
import "../../globals.css"
import { MdOutlineLock, MdOutlineMail, MdDriveFileRenameOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Register = () => {
    return (
        <div className="main">
            <div className="avatarDiv">
                <div className="avatar">
                    <h2 className='logo text-[50px font-semibold'>Logo </h2>
                </div>

            </div>
            <div className="contentDiv">
                <div className="loginCont">
                    <div className="heading">Register</div>
                    <div className="filledDiv">
                        <div className="filled">
                            <label htmlFor="email" className='subHeading'>Email</label>
                            <div className="inputMod">
                                <MdOutlineMail />
                                <input type="email" name="email" />
                            </div>

                        </div>
                        <div className="filled">
                            <label htmlFor="name" className='subHeading'>Name</label>
                            <div className="inputMod">
                                <MdDriveFileRenameOutline />
                                <input type="text" name="name" />
                            </div>

                        </div>
                        <div className="filled">
                            <label htmlFor="Password" className='subHeading'>Password</label>
                            <div className="inputMod">
                                <MdOutlineLock />
                                <input type="password" name="Password" />
                            </div>

                        </div>
                        <button className='textBtn'>Forgot Password?</button>
                        <button className='bigBtn'>Login</button>
                    </div>
                    <div className="socialDiv">
                        <p>--------------- Or ---------------</p>
                        <div className="socialSection">
                            <div className="socialLogo">
                                <FcGoogle />
                            </div>
                            <div className="socialLogo">
                                <FaLinkedin color='blue' />
                            </div>
                            <div className="socialLogo">
                                <FaGithub />
                            </div>

                        </div>
                        <div style={{ display: "flex", margin: ".8rem" }}>
                            <p>Don't have an account?</p>
                            {/* <p ><Link to={"/login"} style={{ color: "rgb(255, 145, 0)", marginLeft: ".5rem" }}>Sign In</Link></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;