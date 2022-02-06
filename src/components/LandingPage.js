import React from 'react';
import Logo from '../icons/discordLogo.svg'
import Limage from '../icons/left_bg_landing_header.svg'
import Rimage from '../icons/right_bg_landing_header.svg'
import Mimage from '../icons/center_bg_landing_header.svg'
import './LandingPage.css'

export default function LandingPage() {
  return (
  <div className='container'>
    <div className='navbar-container'>
      <nav className='navbar'>
        <a href="#landingPage" className='brand'><img className='dlogo' src={Logo} alt="Discord-logo" /><span className='textLogo'>Discord</span></a>
        <div className='list'>
          <li><a href="#download">Download</a></li>
          <li><a href="#nitro">Nitro</a></li>
          <li><a href="#safety">Safety</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
        </div>
        <button className='login'>Login</button>
      </nav>
    </div>
    <div className="coverImages">
      <img src={Limage} className="left images" alt="left-landing" />
      <img src={Mimage} className="center images" alt="middle-landing" />
      <img src={Rimage} className="right images" alt="right-landing" />
    </div>
  </div>);
}
