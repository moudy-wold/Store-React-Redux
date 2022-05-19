import React from 'react';
import "../../css/footer/footer.css";
import { words } from '../../words';



export default function Footer() {
  return (
    <footer className='footer'>
      <div className='main'>
        <div className='footer-logo'><p>Moudy</p></div>
        <div className='footer-links'>
          <ul>
            <li>Contact Us</li>
            <li>News</li>
            <li>Services</li>
            <li>Support</li>
            <li>About</li>
          </ul>
        </div>
        <div className='social'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <p className='footer-word'>{words.footerTitle}</p>
    </footer>
  )
}
