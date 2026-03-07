import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home'
import About from './component/About/About'
import Service from './component/Service/Service'
import Contact from './component/Contact/Contact'
import Login from './component/Login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/about" element={<About Us/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
