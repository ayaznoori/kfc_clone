import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Deals from "./page/Deals"
import Login from './page/Login';
import Menu from './page/Menu';

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
        {location.pathname==="/Login" ? null : <Navbar />}
         {/* <Navbar /> */}
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/menu' element={<Menu/>}/> 
            <Route path='/deals' element={<Deals/>}/>       
         </Routes>
         {location.pathname==="/Login" ? null : <Footer />}
      </div>
    )
  );
}

export default App;
