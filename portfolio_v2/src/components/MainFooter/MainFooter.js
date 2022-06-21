import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./MainFooter.css"

const Footer = () => {
  return <div className="Footer" >
    <span className="Footer-Left">© 2022 Machuno.info</span>
    <span className="Footer-Center">Desenvolvido por Luis Gustavo Baptista Machuno</span>
    <span className="Footer-Right">
      <ul>
        <li><p>Contatos:</p></li>
        <li><a class="bi-envelope-fill" href="mailto:machuno@gmail.com"></a></li>
        <li><a class="bi-github" href="https://github.com/Machuno" target="_blank"
          rel="noopener noreferrer"></a></li>
        <li><a class="bi-linkedin" href="https://www.linkedin.com/in/luisgbmachuno/"
          target="_blank" rel="noopener noreferrer"></a></li>
      </ul>
    </span>
  </div> 

};

export default Footer;