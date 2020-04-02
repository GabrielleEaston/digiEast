import React from 'react';
import './Footer.css';
import github from './github.png';
import logo from '../assets/logo.png';

function Footer() {

  return (<footer>
    <img src={logo} alt="logo"></img>
    <a href="https://github.com/GabrielleEaston/digiEast"><img src={github}></img></a>
    <p>Build with React| Unsplash API </p>
    <small>Using jest enzyme testing</small>
    <span>©2019 by Gabrielle Easton</span>
  </footer>
  );
}

export default Footer