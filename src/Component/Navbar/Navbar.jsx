import React from "react";
import { useState } from "react";
import './navbar.css'

import {AiOutlineCloseCircle} from 'react-icons/ai';
import {FaHamburger, FaHSquare} from 'react-icons/fa';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNavbar = () => {
        setActive('navBar activeNavbar')
    }

    const closeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <div className="header flex">
                <div className="logoDiv">
                    <a href="#home" className="logo flex">
                        <FaHSquare className="icon"/> UYNH
                    </a>
                    <p><em>Mica Designer</em></p>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li onClick={closeNavbar} className="navItem">
                            <a href="#home" className="navLink">Home</a>
                        </li>

                        <li onClick={closeNavbar} className="navItem">
                            <a href="#huynh" className="navLink">Huỳnh</a>
                        </li>
                        
                        <li onClick={closeNavbar} className="navItem">
                            <a href="#contact" className="navLink">Liên hệ</a>
                        </li>

                        <li onClick={closeNavbar} className="navItem">
                            <a href="#products" className="navLink">Sản Phẩm</a>
                        </li>

                        
                        <button className="btn">
                            <a href="tel:0523372202">PHONE NOW</a>
                        </button>
                    </ul>

                    <div onClick={closeNavbar} className="closeNavbar">
                        <AiOutlineCloseCircle className="icon"/>
                    </div>
                    
                </div>
                <div onClick={showNavbar} className="toggleNavbar">
                    <FaHamburger className="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Navbar