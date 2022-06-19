import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Cartcontext } from "../context/cartcontext";
import style from "../page/Cart.module.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart,setcart } = useContext(Cartcontext);
  const [total, setTotal] = useState(0);

  const handelDel=(index)=>{
    let newcart=cart.filter((e,i)=>{
      return i!==index
    })
    setcart([...newcart])
  }

  const handelDelAll=(index)=>{
    let n=[]
    setcart([...n])
  }

  useEffect(() => {
    let sum = 0;
    cart.map((e) => setTotal((sum = sum + Number(e.price.slice(1)))));
  }, [cart]);
  // const [count,setCount]=useState(0)
  // const [total,settotal]=useState(0);
  // const [item,setItem]=useState([])
  // const [img,setImg]=useState([])
  console.log(cart);

  return (
    <div className={style.container}>
      <div className={style.box}>
        <table>
          <thead>
            <tr className={style.theaddata}>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((el, index) => {
              return (
                <tr key={index} className={style.rowdata}>
                  <td className={style.th1}>
                    <div
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          height: "150px",
                          width: "150px",
                        }}
                        src={el.img_url}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className={style.th}>
                    {el.name}
                    <p onClick={()=>{handelDel(index)}} className={style.cartp}>cartRemove</p>
                  </td>

                  <td className={style.th}>
                    <div
                      className={style.qtyBtn}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button className={style.incbtn} >-</button>
                      <p>{1}</p>
                      <button className={style.incbtn}>+</button>
                    </div>
                  </td>
                  <td className={style.th}>{el.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={style.ldiv}>
          <p onClick={()=>{handelDelAll()}} className={style.cartremoveall}>cartRemoveAll</p>
        <Link to='/menu' > <Button colorScheme="white" color="black">
            CartAddMoreMenu
          </Button></Link>
        </div>
      </div>
      <div className={style.left}>
        <h1>{cart.length} CARTITEMS</h1>
        <div className={style.total}>
          <p>CartTotal</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
       
        <div className={style.chkout}>
          <p>cartCheckout</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
