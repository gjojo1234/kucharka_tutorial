import React from 'react';
import {Link} from 'react-router-dom';
import "./menu.css";

const Menu = () => {
  return (
    <div className='navmenu'>
        <Link to="/" className='navmenu1'>Hlavná stránka</Link>
        <Link to="/add-material" className='navmenu1'>Pridanie materiálu</Link>
    </div>
  )
}

export default Menu