import React from "react";
import style from "./Deals.module.css";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div className={style.main}>
        <div className={style.imag}>
          <img
            alt=""
            className={style.fimg}
            src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg"
          />
          <div className={style.txt}>DEALS & OFFERS</div>
        </div>
        <div className={style.inside}>
          <img
            className={style.insideimg}
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
          />
        </div>
        <div className={style.belowtxt}>
          <h2 className={style.h2}>NATIONAL OFFERS</h2>
          <Link to="/Login">
            <p className={style.plink}>
              sign in to see exclusive offers & deals
            </p>
          </Link>
        </div>
        <div className={style.cardcontainer}>
              <div className={style.near}>
                <img className={style.nearimg}src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg" alt=""/>
                <div className={style.neartext}>SELECT A KFC TO SEE LOCAL OFFERS</div>
                <div className={style.findbtn}>
                  <button className={style.find}>Find a KFC</button>
                  </div>
              </div>
              <div className={style.sign}>
              <div className={style.signtext}>SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS</div>
                <div className={style.signbtn}>
                  <button className={style.find}>Login</button>
                  </div>
              </div>
              <div className={style.card}>
                <div style={{height:"60%"}}>
                  <img style={{height:"100%",width:"100%",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg" alt=""/>
                </div>
                <div className={style.carddata}>
                <div className={style.cardname}>1 Pc free Chicken Zinger ...</div>
                <div className={style.text}>1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.</div>
                <div className={style.view}>
                  <div className={style.viewcard}>View Details</div>
                  <div><button className={style.redeem}>Redeem</button></div>
                </div>
                </div>
              </div>
              <div className={style.card}>
                <div style={{height:"60%"}}>
                  <img style={{height:"100%",width:"100%",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg" alt=""/>
                </div>
                <div className={style.carddata}>
                <div className={style.cardname}>1 Pc free Chicken Zinger ...</div>
                <div className={style.text}>1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.</div>
                <div className={style.view}>
                  <div className={style.viewcard}>View Details</div>
                  <div><button className={style.redeem}>Redeem</button></div>
                </div>
                </div>
              </div>
              <div className={style.card}>
                <div style={{height:"60%"}}>
                  <img style={{height:"100%",width:"100%",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg" alt=""/>
                </div>
                <div className={style.carddata}>
                <div className={style.cardname}>Add 2 Pc Hot n Crispy ...</div>
                <div className={style.text}>Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order....</div>
                <div className={style.view}>
                  <div className={style.viewcard}>View Details</div>
                  <div><button className={style.redeem}>Redeem</button></div>
                </div>
                </div>
              </div>
              <div className={style.card}>
                <div style={{height:"60%"}}>
                  <img style={{height:"100%",width:"100%",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg" alt=""/>
                </div>
                <div className={style.carddata}>
                <div className={style.cardname}>Upto Rs 100 off on min Cart ...</div>
                <div className={style.text}>Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.....</div>
                <div className={style.view}>
                  <div className={style.viewcard}>View Details</div>
                  <div><button className={style.redeem}>Redeem</button></div>
                </div>
                </div>
              </div>
        </div>

    </div>
  );
};

export default Deals;
