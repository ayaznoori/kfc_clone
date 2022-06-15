
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Footer from './components/Footer';
import { useState } from 'react';

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
      <div className='App'>
        <Navbar />
      <Home/>
      <Footer />
   </div>
    )
  );
}

export default App;
