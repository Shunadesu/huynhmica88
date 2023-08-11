import React from "react";
import './app.css'
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Huynh from "./Component/Huynh/Huynh";
import Main from "./Component/Main/Main";
import MainProducts from "./Component/MainProducts/MainProducts";
import Contact from "./Component/Contact/Contact";
import Map from "./Component/Map/Map";
import Footer from "./Component/Footer/Footer";


const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Huynh />
            <Contact />
            <Main />
            <MainProducts /> 
            <Map />
            <Footer /> 
        </div>
    )
}

export default App