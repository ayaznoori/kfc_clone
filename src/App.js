import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Menu from './page/Menu';

function App() {
const [loading,setLoading]=useState(true)
const spinner=document.getElementById("spinner")
if(spinner){
  setTimeout(()=>{
    spinner.style.display="none";
    setLoading(false)
},2500)
}
  return (
    !loading && (
      <div className="App">
        <Navbar />
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/menu' element={<Menu/>}/>       
         </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
