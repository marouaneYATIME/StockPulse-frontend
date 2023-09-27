/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  Sidebar.js
 */

import React, { useState } from 'react';
import  "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem.js";
import { useNavigate } from "react-router-dom";
import logoimg from "../../assets/logo.png";



const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
  
    const goHome = () => {
      navigate("/");
    };  
  return (
    <div className="layout">
        <div className="sidebar" style={{width: isOpen ? "230px" : "60px"}}>

            <div className="top_section">

                {/**Icon Logo */}
                <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
                    <img
                     src={logoimg}
                     alt='logo'
                     width={35}
                     style={{ cursor: "pointer" }}
                     onClick={goHome}
                    />
                </div>

                {/**Icon menu Burger */}
                <div className="bars" style={{ marginLeft: isOpen ? "100px" : "0px"}} >
                    <HiMenuAlt3 
                     onClick={toggle}
                    /> 
                </div>

            </div>
        {menu.map((item, index) => {
            return <SidebarItem key={index} item={item} isOpen={isOpen}/>
        })}
        </div>
        <main style={{ paddingLeft: isOpen ? "230px" : "60px", 
                       transition: "all .5s",
                     }}> 
            {children}
        </main>
    </div>
  );
};

export default Sidebar;