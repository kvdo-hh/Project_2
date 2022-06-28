import React from 'react';
import { Link } from "react-router-dom";
import logo from '.images/img-home.jpg';
import { Button, IconButton } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />;
      <h1>Katjas Metropolen</h1>
      <nav>
        <Link to={'button'}><Button /></Link>
        <Link to={'icon'}><IconButton /></Link>
       
      </nav>
    </div>
  );
}

export default Header;