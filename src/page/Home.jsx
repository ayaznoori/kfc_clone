import React from 'react'
import style from "./Home.module.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
const Home = () => {
  const { isOpen, onOpen ,onClose} = useDisclosure()
  return (
    <div>
      <div>
         <div style={{width:"fit-content", margin:"auto"}}>
          <img src= "https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt='stripes'/>
         </div>
         <div style={{fontWeight:"700",fontSize:"20px",marginTop:"25px"}}>SELECT YOUR ORDER TYPE TO START</div>
         <div style={{height:"50px",width:"380px",backgroundColor:"#e3e3e3",display:"flex",color: "#494949", margin:"auto",borderRadius:"20px",justifyContent:"space-evenly",marginTop:"30px"}}>
          <button onClick={onOpen} style={{color: "#494949",backgroundColor:"transparent",padding:"15px",border:0, borderRadius:"20px 0px 0px 20px",fontWeight:"700"}}>DELIVERY</button>
          <button onClick={onOpen} style={{color: "white",width:"135px",border:0,backgroundColor:"#E4002B" ,padding:"0px 20px 0px 20px",margin:"4px 0px 4px 0px",borderRadius:"20px",fontWeight:"700"}}>PICK UP</button>
          <button onClick={onOpen} style={{color: "#494949",border:0,backgroundColor:"transparent",padding:"15px",borderRadius:"0px 20px 20px 0px",fontWeight:"700" }}>DINE IN</button>
         </div>
      </div>
      <div className={style.slider}>
      <Carousel autoPlay interval="4000" 
                 transitionTime="500"showThumbs={false}>

        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=958&fit=fill&fm=webp"
            alt=" "
          />
        </div>
        
        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/996c91ae970f53a25b6bba8036f97aff/Biryani_Banner_1440x396px.jpg?w=930&fit=fill&fm=webp"
            alt=" "
          />
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0872e046c202005f49e6c94489c8ce40/4Value_Burger_1440x396px.png?w=930&fit=fill&fm=webp"
            alt=" "
          />
        </div>
      </Carousel>
      </div>
      <div>
      <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader style={{borderBottom:"1px solid grey",textAlign:"center",fontWeight:"700"}}>START YOUR ORDER</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{textAlign:"center",fontWeight:"700",backgroundColor:"#f8f7f5",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}}>
            <h1 style={{marginTop:"25px",fontWeight:"900",fontSize:"24px"}}>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h1>
            <div style={{display:"flex",flexDirection:"column",width:"fit-content",margin:"auto"}}>
            <button  style={{backgroundColor:"transparent",border:"1px solid black",borderRadius:"20px",padding:"10px 90px 10px 90px",marginTop:"20px"}}>Pick up</button>
            <button  style={{backgroundColor:"transparent",border:"1px solid black",borderRadius:"20px",padding:"10px 90px 10px 90px",marginTop:"20px"}}>Dine In</button>
            <button  style={{backgroundColor:"transparent",border:"1px solid black",borderRadius:"20px",padding:"10px 90px 10px 90px",marginTop:"20px"}}>Delivery</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </ModalBody>
        </ModalContent>
      </Modal>
      </div>

    </div>
  )
}

export default Home