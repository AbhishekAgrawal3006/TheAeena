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
    <Router basename="/TheAeena">
      <Headroom >
          <NavigationBar />
      </Headroom>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Overview/" element={<Overview />} />
        <Route exact path="/About/" element={<About/>}/>
      </Routes>      
      <Footer/>
    </Router>
  );
}

export default App;
