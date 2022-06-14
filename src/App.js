import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
