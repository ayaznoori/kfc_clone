import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Confirmation.module.css"

const Confirmation = () => {
  return (
    <>
    <div className={styles.divcontent}>
      <div className={styles.divaaa}>
        <img
          className={styles.pic}
          src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
          alt=""
        />
        <h1 style={{ color:"#46aa2b",fontSize:"40px",  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",}}>Your Order Is confirm</h1>
        <p style={{color:"#e4002b",fontWeight: "900", fontSize:"30px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}> Your order id is : {Math.floor(Math.random() * 100000000000)}</p>
        <h1 style={{ marginTop:"30px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"25px"}}>
          Your Nearest KFC Placed Your Order And Will We Deliver In Next 30 Min
        </h1>
        <h2 style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"25px"}}>Thank For Choose KFC</h2>
        <h1 style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"25px"}}>We Are Delight to Serve You</h1>
        <div className={styles.bot}>
          {/* <h2 style={{color:"#e4002b",fontWeight: "900", fontSize:"30px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>0</h2> */}
        </div>
        <button style={{  fontSize:"20px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", backgroundColor:"#e4002b",border:"none",borderRadius:"20px", padding:"10px 20px"}}><Link to="/">Keep Ordering</Link></button>
      </div>
    </div>
    </>
  )
}

export default Confirmation