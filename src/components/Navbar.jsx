import React from 'react'
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"

const Navbar = () => {
  return (
    <>
    <nav>
    <div className={styles.navContainer}>
      <div className={styles.box1}>
        <div className={styles.kfcLogo1}>
          <img className={styles.kfcLogo}src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg' alt=''/> 
          </div>
           
          <div className={styles.menu}>
            <Link className={styles.menu123} to="/"><h5 className={styles.menu12}>Menu</h5></Link>
          </div>
          <div className={styles.deal22}>
          <Link className={styles.deal}  to="/"><h5 className={styles.menu12}>Deals</h5></Link>
        </div>
         
        
        </div>
        
        <div className={styles.box2}>
     
          <div className={styles.signIn}>
          <FaUserCircle style={{ marginRight:"10px", fontSize: '25px'}}/>
            <Link className={styles.signIn1}  to="/" ><h5>Sign In</h5></Link>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.line}></div>
          <div className={styles.cartValue}> ₹ {0}</div>
          <div className={styles.kfcBuket1}>
            <img
              className={styles.kfcBuket}
              src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'
              alt=""
            />
          </div>
        </div>

      </div>
      
      </nav>
      
    
    </>
  )
}

export default Navbar