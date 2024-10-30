import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";

import Group from "./assets/Group.png"
import Substract from "./assets/Subtract.png"
import Substract2 from "./assets/Subtract2.png"

// index.js or App.js



function App() {
  return (
    <div className="App">



     <div style={{zIndex:"2" , position : "relative"}}> 
      <Router>
          <Navbar />
          <Home />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </Router>
     </div>


    <div className="Group"> 
      <img className="w-100" src={Group} alt="" />
    </div>

    <div className="Substract"> 
      <img className="w-100" src={Substract} alt="" />
    </div>

    <div className="Substract2"> 
      <img className="w-100" src={Substract2} alt="" />
    </div>



    </div>
  );
}

export default App;
