import React from "react";
import style from "./Deals.module.css";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style.imag}>
          <img
            alt=""
            className={style.fimg}
            src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg"
          />
          <h2 className={style.txt}>DEALS & OFFERS</h2>
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
          <Link to="/login">
            <p className={style.plink}>
              sign in to see exclusive offers & deals
            </p>
          </Link>
        </div>
        <div className={style.last}>
          <div className={style.one}>
            <img
              className={style.findkfcimg}
              alt=""
              src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg"
            />
  
            <div className={style.divh3}>
            <h3 className={style.hh3}> SELECT A KFC TO SEE LOCAL OFFERS</h3>
            <Link to="https://restaurants.kfc.co.in">
              {" "}
              <button className={style.findkfcbtn}>Find a KFC</button>
            </Link>
            </div>
          </div>
          <div className={style.two}>
            <p className={style.moreexclusive}>
              SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS
            </p>
            <Link to="/login">
              {" "}
              <button className={style.btn2}>login</button>
            </Link>
          </div>
          <div className={style.three}>
            <img
              className={style.img2}
              alt=""
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg"
            />
            <div className={style.h4div}>
              {" "}
              <h4 className={style.h4}>1 Pc free chicken...</h4>
            </div>
            <div className={style.h5div}>
              {" "}
              <h5>
                1 Pc free Chicken Zinger on a cart value of 399 or above on
                first order. Only for...
              </h5>
            </div>
            <div className={style.divbtn}>
              <Link to="/">
                <p className={style.knowmore}>View Details</p>
              </Link>
              <Link to="/">
                {" "}
                <button className={style.Redeembtn}>Redeem</button>
              </Link>
            </div>
          </div>
          <div className={style.four}>
            <img
              className={style.img2}
              alt=""
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg"
            />
            <div className={style.h4div}>
              {" "}
              <h4 className={style.h4}>1 Pc free Veg Zing..</h4>
            </div>
            <div className={style.h5div}>
              {" "}
              <h5>
                1 Pc free Veg Zinger on a cart value of 399 or above on first
                order. Only for..
              </h5>
            </div>
            <div className={style.divbtn}>
              <Link to="/">
                {" "}
                <p className={style.knowmore}>View Details</p>
              </Link>
              <Link to="/">
                {" "}
                <button className={style.Redeembtn}>Redeem</button>
              </Link>
            </div>
          </div>
          <div className={style.five}>
            <img
              className={style.img2}
              alt=""
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg"
            />
            <div className={style.h4div}>
              {" "}
              <h4 className={style.h4}>Add 2 Pc Hot n..</h4>
            </div>
            <div className={style.h5div}>
              {" "}
              <h5>
                Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of
                Rs 499 or more...
              </h5>
            </div>
            <div className={style.divbtn}>
              <Link to="/">
                {" "}
                <p className={style.knowmore}>View Details</p>
              </Link>
              <Link to="/">
                {" "}
                <button className={style.Redeembtn}>Redeem</button>
              </Link>
            </div>
          </div>
          <div className={style.six}>
            <img
              className={style.img2}
              alt=""
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg"
            />
            <div className={style.h4div}>
              {" "}
              <h4 className={style.h4}>Upto Rs100 off on..</h4>
            </div>
            <div className={style.h5div}>
              {" "}
              <h5>
                Upto Rs 100 off on min cart value of Rs 599 or more. Applicable
                on 4th order..
              </h5>
            </div>
            <div className={style.divbtn}>
              <Link to="/">
                {" "}
                <p className={style.knowmore}>View Details</p>
              </Link>
              <Link to="/">
                {" "}
                <button className={style.Redeembtn}>Redeem</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
