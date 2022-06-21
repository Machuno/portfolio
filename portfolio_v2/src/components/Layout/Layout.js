import React from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';

import "./Layout.css";
import MainHeader from '../MainHeader/MainHeader';
import MainFooter from '../MainFooter/MainFooter';
import Aside from "../Aside/Aside";
import Main from "../Main/Main";

const Layout = () => {
  return (
  <div className="Layout" >
    <div class="container">
        <MainHeader />
        <Aside />
        <Main />
        <MainFooter />
    </div>
  </div> 
)};

export default Layout;







  
