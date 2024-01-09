import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import Input from '../../component/input/Input';

export default function LoginPage() {
  const[active, setActive] = useState("login");

  return (
    <div className='main'>

      <div className='width-60 d-flex flex-row justify-content-center align-items-center'>
        <div className='box width-60 d-flex flex-column justify-content-center align-items-center'>
          <div className='title mb-4'>
            <p className={active==="login"?"mx-3":"mx-3 inActive"}>Login</p>
            <p className={active==="login"?"mx-3 inActive":"mx-3"}>Sign Up</p>
          </div>
          {/* <div className='labelAction width-100 d-flex flex-column justify-content-center align-items-start mb-5 mt-3'>
            <input type="email" className="formControl" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label htmlFor="exampleInputEmail1" className="formLabel" >Email address</label>
          </div> */}
          
          {active==="login"?<div></div>:<Input type='name' className='formControl width-100' id="exampleInputEmail1" >Name</Input>}

          <Input type='email' className='formControl width-100' id="exampleInputEmail1" aria-describedby="emailHelp" >Email address</Input>

          {/* <div className='labelAction width-100 d-flex flex-column justify-content-center align-items-start'>
            <input type="password" className="formControl" id="exampleInputPassword1" />
            <label htmlFor="exampleInputPassword1" className="formLabel">Password</label>
          </div> */}

          <Input type="password" className="formControl" id="exampleInputPassword1">Password</Input> 

          {active==="login"?<div className='width-100 forgotPassword p-2 d-flex justify-content-center align-items-center'>
            <a href="/">Forgot Password</a>
          </div>:<div></div>}
          <Link className={active==="login"?"button bg-white width-100 p-2 mt-3":"button bg-white width-100 p-2 mt-5"} to="/home">{active==="login"?"Login":"Sign Up"}</Link>
          <div className='width-100 forgotPassword register p-2 d-flex justify-content-center align-items-center'>
            <p className='m-0'>{active==="login"?"Don't have an account?":"Already have an account?"}</p>
            <a href onClick={()=>{active==="login"?setActive("signUp"):setActive("login")}}>{active==="login"?"Register":"Login"}</a>
          </div>
        </div>
      </div>

    </div>
  )
}
