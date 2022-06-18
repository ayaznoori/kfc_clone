import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Deals from "./page/Deals"
import Login from './page/Login';
import Menu from './page/Menu';
import LoginAuth from "./page/LoginAuth"
import Detail from "./page/Details/Detail"
import Help from "./page/Help/Help"


function App() {
const [loading,setLoading]=useState(true)
const spinner=document.getElementById("spinner")
const location=useLocation()
if(spinner){
  setTimeout(()=>{
    spinner.style.display="none";
    setLoading(false)
},2500)
}
  return (
    !loading && (
      <div className="App">
        {location.pathname==="/Login" || location.pathname==="/Login/auth" ? null : <Navbar />}
         {/* <Navbar /> */}
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Login/auth' element={<LoginAuth/>}/>
            <Route path='/menu' element={<Menu/>}/> 
            <Route path='/deals' element={<Deals/>}/>       
         </Routes>
         {location.pathname==="/Login" || location.pathname==="/Login/auth" ? null : <Footer />}
         {/* <Detail/> */}
         {/* <Help/> */}
      </div>
    )
  );
}

export default App;
