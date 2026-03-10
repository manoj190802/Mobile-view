import logo from './logo.svg';
import './App.css';
import Navbar from './component/Customer Management';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './component/Home/Home'
// import About from './component/About/About'
// import Service from './component/Management/Sales Pipeline'
// import Contact from './component/Lead Management/Lead Management'
// import Login from './component/Login/Login'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
       <Navbar/>
       {/* <Routes>
        <Route  path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About Us/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
      </BrowserRouter> */}
   
    </div>
  );
}

export default App;
