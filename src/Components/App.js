import React from "react";
import NavigationBar from "./NavigationBar"
import Headroom from 'react-headroom'
import Footer from "./Footer"
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Overview from "./Overview";
import About from "./About";

function App() {
  return (
    <Router>
    <Headroom >
          <NavigationBar />
        </Headroom>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Overview" element={<Overview />} />
     <Route path="/About" element={<About></About>}/>
     </Routes>      
    <Footer/>
    </Router>
  );
}

export default App;
