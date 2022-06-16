import React from "react";
import {  useNavigate } from "react-router-dom";
import style from './login.module.css'
const Login = () => {
  const navigate=useNavigate();
  const skipfun=()=>{
      navigate('/')
  }
  return <div className={style.container}  >
        <div >
            <div >Sign In / Sign up</div><br/><br/>
            <div> <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc logo" tabindex="1"/></div><br/><br/>
            <div className={style.title} >LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR <br/>PHONE NUMBER!</div>
        </div><br/><br/>
		<form >
        <div>
            <input type='number' className={style.numberbox} placeholder='Phone Number*'/><br/><br/>
        </div>        
        <div  >
            <div className={style.checkbox}> <input type='checkbox' />By “logging in to KFC”, you agree to our <u><b >Privacy Policy</b></u> and
                <u><b   >Terms &amp; Conditions.</b></u></div><br/>
        </div>
        <div  >
            <button className={style.sendbox}>Send Me a Code</button>
        </div>
		</form>
    <br/>
        <div >
                <div  >--------------------or----------------------</div>
                <button className={style.skipbox} onClick={skipfun} >Skip, Continue As Guest</button>
        </div>
    </div>
};

export default Login;
