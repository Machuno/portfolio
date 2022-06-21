import React from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';


import "./MainHeader.css"

//<i class="bi bi-chevron-double-left"></i>

const Header = () => {
  return <div className="Header" >
    <span className="Header-Left">
      <button>menu <i class="bi bi-chevron-double-right"></i></button>
    </span>
    <span className="Header-Center">Luis Gustavo Baptista Machuno</span>
    <span className="Header-Right">
      <ul>
        Theme
      </ul>
    </span>
  </div> 
};

export default Header;