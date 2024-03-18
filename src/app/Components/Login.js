import React from 'react'
import "../globals.css"
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


function Register() {
  return (
    <>
      <div className="heading">Login</div>
      <div className="filledDiv">
        <div className="filled">
          <label htmlFor="email" className='subHeading'>Email</label>
          <div className="inputMod">
            <MdOutlineMail />
            <input type="email" name="email" />
          </div>

        </div>
        <div className="filled">
          <label htmlFor="password" className='subHeading'>Password</label>
          <div className="inputMod">
            <MdOutlineLock />
            <input type="password" name="password" />
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
      </div>
    </>
  )
}

export default Register