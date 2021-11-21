import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/bg-logo.png";
import driot from "../../assets/img/hommeDroit.png";
import max from "../../assets/img/SAVEMAX.png";
import Gauche from "../../assets/img/hommeGauche.png";
import twitter from "../../assets/img/Twitter_Bird.svg.png";
import discord from "../../assets/img/discord.png";
import SOLANART from "../../assets/img/SOLANART.png";
import "./headerStyle.css";

const Header = () => {
  return (
    <div>
      <div className='header-card'>
        <img src={driot} alt='' />
        <div className='logo' style={{ backgroundImage: `url(${logo})`, backgroundRepeat:"no-repeat", }}>
          <Link to='/'>
            <img src={max} alt='' />
          </Link>
        </div>
        <img src={Gauche} alt='' />
      </div>
      <div className='header-menu'>
        <button data-href='#' className='islink'>
          <img src={SOLANART} alt='' />
        </button>
        <button data-href='https://twitter.com/SaveMaxNFT' className='islink'>
          <img src={twitter} alt='' />
        </button>
        <button data-href='https://discord.gg/H4uM3QWe28' className='islink'>
          <img src={discord} alt='' />
        </button>
        <button data-href='#' className='islink'>
          <span style={{ fontSize: "12px" }}>CONNECT YOUR</span>
          <br />
          <span style={{ fontSize: "14px" }}>WALLET</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
