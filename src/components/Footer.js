import React from "react";
import facebook from "../images/facebook-icon.png";
import X from "../images/x-icon.png";
import discord from '../images/discord-icon.png';
import youtube from '../images/youtube-icon.png';

export default function Footer(){
    return(
      <footer className="footer">
        <img src={facebook} alt="" />
        <img src={X} alt=""/>
        <img src={discord} alt="" />
        <img src={youtube} alt="" />
      </footer>  
    )
}
