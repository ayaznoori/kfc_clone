import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdLocationOn } from "react-icons/md";


import {
  faFacebook,
  faTwitter,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
    <footer >
      <div className="footer">
       <div className='big'>
      <div className="boxFooterIn">
        <div className="boxsmallfooter"><img className="imgfooter" src='https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg'alt=''/> </div>
      </div>
      <div className="boxFooterIn">
        <div>
          
          <h5 className="hFooter">KFC Food</h5>
          <a href=''> <h5 className="hFooter">Menu</h5></a>
          <a href=''><h5 className="hFooter">Order Lookup</h5></a>
          <a href=''><h5 className="hFooter">Gift Card</h5></a>
        </div>
      </div>
      <div className="boxFooterIn">  <div>
        <h5 className="hFooter">Supports Hello</h5>

        <a href='https://online.kfc.co.in/help'><h5 className="hFooter">Get Help</h5></a>
        <a href=''> <h5 className="hFooter">Contact Us</h5></a>
        <a href=''> <h5 className="hFooter">KFC Feedback</h5></a>
      </div></div>
      <div className="boxFooterIn">  <div>
        <h5 className="hFooter">Legal</h5>
        <a href=''> <h5 className="hFooter">Terms ans Conditions</h5></a>
        <a href=''><h5 className="hFooter">Privacy Policy</h5></a>
        <a href=''><h5 className="hFooter">Disclaimers</h5></a>
        <a href=''><h5 className="hFooter">Caution Notice</h5></a>
      </div></div>
      <div className="boxFooterIn">   <div>
       <h5 className="hFooter">KFC India</h5>
      <a href=''> <h5 className="hFooter">About KFC</h5></a>
      <a href=''> <h5 className="hFooter">KFC Care</h5></a>
      <a href=''> <h5 className="hFooter">Careers</h5></a>
      <a href=''> <h5 className="hFooter">Our Golden Past </h5></a>
      </div></div> 
      <div className="boxFooterIn">
        <div style={{display:"flex"}}>
          <div>
            <a href='https://restaurants.kfc.co.in/' className='loc'>
        <MdLocationOn style={{Color:"#e4002b",fontSize:"16px" ,marginTop:"24px" ,marginRightt:"10px"}}/> </a>
        </div>
        <a href='https://restaurants.kfc.co.in/' >
          <h5 style={{textDecoration:"underline", color:"white"}}>  Find a Kfc </h5></a>
        </div>
      </div>
      <div className="boxFooterIn">
      <a href='https://play.google.com/store/apps/details?id=com.yum.kfc' target="blank">
      <img className='img1' src="https://i.ibb.co/4NbzRwP/512x512.png" alt="" /></a>
      </div>
      
      <div className="boxFooterIn">
      <a href='https://apps.apple.com/in/app/kfc-india/id915824379' target="blank">
      <img className='img1'src="https://i.ibb.co/1d8JXvr/512x512.png" alt="" /></a>
      </div>
    </div></div>
    <div className='about'>
      <div></div>
    <p className="cpyright" style={{fontSize:"12px" ,marginTop:"30px"}}>Copyright © KFC Corporation 2021 All Rights Reserved</p>
    
    <div className='links'>
    <p className="social-container">
       
        <a
          href="https://www.facebook.com/KFCIndia " target="blank"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/kfcindia_official/"target="blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/KFC_India" className="twitter social" target="blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
    </div>
    </footer>
    </>
   
  )
}

export default Footer

