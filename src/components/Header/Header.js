import "./header.css"
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <Link className="logo" to="/" >Prime Flix</Link>
    <Link className="favoritos" to="/favoritos" >Meus Filmes</Link>
    </header>
  );
};

export default Header;