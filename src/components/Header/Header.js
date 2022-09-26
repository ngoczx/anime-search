import React from 'react';
import './Header.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="header">
      <h1>
        The<strong>Anime</strong>ZX
      </h1>
      <h3>Simple anime-searching website built by BNgoc using Jikan API</h3>
      <a href="https://www.facebook.com/ngoc.nguyen.03/">
        <BsFacebook />
      </a>
      <a href="https://github.com/ngoczx">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/ngoczx/">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default Header;
