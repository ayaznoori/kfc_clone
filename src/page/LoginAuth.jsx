
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./LoginAuth.module.css"
const LoginAuth = () => {
    const navigate=useNavigate()
    const data=localStorage.getItem("data")
    const [timer,setTimer]=useState(Number(30))
    const [otp1,setOtp1]=useState();
    const [otp2,setOtp2]=useState();
    const [otp3,setOtp3]=useState();
    const [otp4,setOtp4]=useState();
    setTimeout(() => {
        setTimer(timer-1)
    }, 1000);
   let disable;
   if(timer<0){
      disable=true;
   }
   const handchange1=(e)=>{
    let value =e.target.value
      setOtp1(value)
   }
   const handchange2=(e)=>{
    let value =e.target.value
      setOtp2(value)
   }
   const handchange3=(e)=>{
    let value =e.target.value
      setOtp3(value)
   }
   const handchange4=(e)=>{
    let value =e.target.value
      setOtp4(value)
   }
   let bag=""
   bag=bag+otp1+""+otp2+""+otp3+""+otp4
   
    const handeSubmit=(e)=>{
        e.preventDefault()
        if(bag==="1234") {
            localStorage.setItem("otp",bag)
           navigate("/")
        }
    }
  return (
    <div className={style.container}>
        <div >
            <div >Sign In / Sign up</div><br/><br/><br/><br/><br/><br/>
            <div> <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc logo" tabindex="1"/></div><br/><br/><br/><br/><br/><br/>
            <div className={style.title} >WE JUST TEXTED YOU</div><br/><br/><br/>
            <div className={style.num}>Please enter the verification code we just sent to <b>91{data}</b></div><br/><br/>
            <Link to="/Login"><div className={style.num1}>Different Number?</div></Link>
        </div><br/>
		<form onSubmit={handeSubmit}>
        <div className={style.otpdiv}>
           <input className={style.otp} onChange={handchange1} name="otp1" type="tel" maxLength={1}/>
           <input className={style.otp} onChange={handchange2} name="otp2" type="tel" maxLength={1}/>
           <input className={style.otp} onChange={handchange3} name="otp3" type="tel" maxLength={1}/>
           <input className={style.otp} onChange={handchange4} name="otp4" type="tel" maxLength={1}/>
        </div> <br/>
        <div>{timer<0 ?<div style={{color:"red",display:"flex",justifyContent:"center"}}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/Error.svg" alt=""/><span style={{marginLeft:"10px"}}>Your code has expired!</span></div> : "" }</div>
        
        <div>
         <div className={style.timer}>{timer>0  ? <div className={style.resend}>Your code will expire in 0:{timer}sec</div> : ""}</div><br/>
         <div className={style.resend} onClick={() => window.location.reload(false)}>Resend the Code</div>
        </div> <br/><br/> <br/>
        
        <div  >
            <button type="submit"className={style.submit} disabled={disable}>Submit</button>
        </div>
		</form>
    </div>
  )
}

export default LoginAuth