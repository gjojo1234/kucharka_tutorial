import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <div>
        <Link to="/">Hlavná stránka</Link>
        <Link to="/add-material">Pridanie materiálu</Link>
    </div>
  )
}

export default Menu