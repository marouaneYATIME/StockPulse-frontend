/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  Layout.js
*/

import React from 'react'
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div style={{minHeight: "80vh"}} className="--pad">
            {children}
        </div>
        <Footer/>
    </>
  );
};

export default Layout;