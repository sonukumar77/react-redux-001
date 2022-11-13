// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Service from './components/Service';


function App() {
  const isLight = useSelector((state) => state.isLight)
  return (
    <div className={isLight?"dark":"light"}>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/service' element={ <Service />}/>
       
      </Routes>
    </div>
  );
}

export default App;
