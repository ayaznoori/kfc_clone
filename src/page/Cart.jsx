import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Cartcontext } from "../context/cartcontext";
import style from "../page/Cart.module.css";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const Cart = () => {
  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
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

const handclick=()=>{
    navigate("/confirm")
}
  return (
    <div className={style.big}>{cart.length>0 ? <div>
      <div className={style.welcomebox}>
        <div className={style.welcomebox1}>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png"
            alt="stripes"
          />
        </div>
        <div className={style.welcomebox2}>MY CART</div>
      </div>
    <div className={style.container}>
      <div className={style.box}>
        <table style={{borderCollapse: "separate",
    borderSpacing: "0 0.5em"}}>
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
                <tr key={index} className={style.rowdata} styel={{marginBottom:"3%"}}>
                  <td className={style.th1}>
                    <div
                      style={{
                        height:"80%",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          height: "170px",
                          width: "200px",
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
                        justifyContent:"center"
                      }}
                    ><div style={{display:"flex" ,alignItems:"center"}}>
                      <button className={style.incbtn} >-</button>
                      <p>{1}</p>
                      <button className={style.decbtn}>+</button>
                      </div>
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
        <h1 className={style.cartlength}>{cart.length} ITEMS</h1>
        <div className={style.offer}>
          <img src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg" alt=""/>
          <p style={{marginLeft:"1%"}}> Apply Offers & Deals</p>
        </div>
        <div className={style.total}>
          <p>Subtotal</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
        <div className={style.gst}>
          <p>Gst</p>
          <p>₹ 0.00</p>
        </div>
        <div className={style.border}>
        </div>
        <div className={style.bag}>
        <input type="checkbox"/><div>₹6.00 Tick to add a large carry bag.</div>
       </div>
       <div className={style.border}>
      </div>
        <div onClick={onOpen} className={style.chkout}>
          <p>Checkout</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
        
      </div>
      <div><Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              style={{
                borderBottom: "1px solid grey",
                textAlign: "left",
                fontWeight: "700",
              }}
            >
              SELECT YOUR PAYMENT
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              style={{
                textAlign: "center",
                fontWeight: "700",
                backgroundColor: "#f8f7f5",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
            <div aria-disabled={true} className={style.debit}> 
              <div>Credit / Debit Card</div>
              <p style={{color:"red"}}>(Temporarily Not Available)</p>
            </div>
            <div aria-disabled={true} className={style.debit}> 
              <div>Net Banking</div>
              <p style={{color:"red"}}>(Temporarily Not Available)</p>
            </div>
            <div aria-disabled={true} className={style.debit}> 
              <div>Other Wallet</div>
              <p style={{color:"red"}}>(Temporarily Not Available)</p>
            </div>
            <div aria-disabled={true} className={style.debit}> 
              <div>UPI</div>
              <p style={{color:"red"}}>(Temporarily Not Available)</p>
            </div>
            <div onClick={handclick}className={style.debit}> 
            <div>Cash</div>
            <p style={{color:"green"}}>(Available)</p>
            </div>
            <div aria-disabled={true} className={style.debit}> 
              <div>Gift Card</div>
              <p style={{color:"red"}}>(Temporarily Not Available)</p>
            </div>
              <br />
            </ModalBody>
          </ModalContent>
        </Modal></div>
    </div></div>
    : <div className={style.noitem}>
      <div className={style.welcomebox}>
        <div className={style.welcomebox1}>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png"
            alt="stripes"
          />
        </div>
        <div className={style.welcomebox2}>MY CART</div>
      </div>
      <div className={style.empty}> 
        <div>
          <div>YOUR CART IS EMPTY. LET'S START AN ORDER!</div>
          <Link to="/menu"><button className={style.start}>Start Order</button></Link>
        </div>
        <div><img src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" alt=""/></div>
      </div>

      </div>}</div>
  );
};

export default Cart;
