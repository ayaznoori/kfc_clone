import React, { useContext, useEffect, useState } from 'react'
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom"
import { Cartcontext } from '../context/cartcontext';

const Navbar = () => {
  const otp=localStorage.getItem("otp")||null;
  const {cart}=useContext(Cartcontext);
  const [total,settotal]=useState(0);
 
 useEffect(()=>{
  let sum=0;
  cart.map((e)=>settotal(sum=sum+Number(e.price.slice(1))));
 },[cart])
  return (
    <>
      <nav>
        <div className={styles.navContainer}>
          <div className={styles.box1}>
            <div className={styles.kfcLogo1}>
             <Link to='/'> <img
                className={styles.kfcLogo}
                src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                alt=""
              /></Link>
            </div>

            <div className={styles.menu}>
              <Link className={styles.menu123} to="/menu">
                <h5 className={styles.menu12}>Menu</h5>
              </Link>
            </div>
            <div className={styles.deal22}>
              <Link className={styles.deal} to="/deals">
                <h5 className={styles.menu12}>Deals</h5>
              </Link>
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.signIn}>
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                style={{ marginRight: "10px", fontSize: "20px" }}
                alt=""
              />
              
                <h5>{otp==="1234" ? <h5>Account</h5>:<Link className={styles.signIn1} to="/Login"><h5>Sign In</h5></Link>}</h5>
              
            </div>
          </div>
       
          <div className={styles.box3}>
            <div className={styles.line}></div>
           <Link to="/cart"> <div className={styles.cartValue}> ₹ {total.toFixed(2)}</div></Link>
           <Link to="/cart">  <div className={styles.kfcBuket1}>
              {cart.length}
            </div></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar