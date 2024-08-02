import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Footer.css'


const Footer = () => {
  return (
    <div className="parentdiv">
      <div className="section1">
        <div className="logoimg"></div>
        <div className="footertext">
         <p>Company # 490039-445, Registered with break</p>
         <p>House of companies.</p>
        </div>
        <div className='appstoreplaystore'></div>
      </div>
      <div className="section2">
        <div className="footera">Legal Pages</div>
        <a href="">Terms and Conditions</a>
        <a href="">Privacy</a>
        <a href="">Cookies</a>
        <a href="">Statements</a>
      </div>
      <div className="section3">
        <div className='footerb'>Important Links</div>
        <a href="">Get help</a>
        <a href="">Add your restaurant</a>
        <a href="">Signup to deliver</a>
        <a href="">Create a business account</a>
      </div>
    </div>
  );
}

export default Footer;
