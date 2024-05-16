import React from 'react';
import './Navbar.css'
import Logo from "../../assets/logo/logo.png";
import SearchIcon_light from "../../assets/logo/search-w.png"
import SearchIcon_dark from "../../assets/logo/search-b.png"
import toggle_light from "../../assets/logo/night.png"
import toggle_dark from "../../assets/logo/day.png"

const Navbar = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    theme == 'light' ? setTheme ('dark') : setTheme('light');
  }

  return (
    <div className='Navbar'>
      {/* logo */}
      <img src={ Logo }alt=""  className='logo'/>

      {/* menu links */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Collections</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contacts</li>
      </ul>

        {/* search */}
        <div className="search-box">
          <input type="text" placeholder='Search' />
          <img src={ theme == 'light' ? SearchIcon_dark: SearchIcon_light } alt=""  className='search-icon'/>
        </div>

        {/* light/dark mode switch */}
        <img src={ theme == 'light' ? toggle_light: toggle_dark } alt=""  className='toggle-icon'  onClick={() => {toggle_mode()}}/>

    </div>
  )
}

export default Navbar