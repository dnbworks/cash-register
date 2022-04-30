import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className='container px'>
      <ul className="main__nav d-flex">
        <li className={`${activeLink === 0 && 'active'}`}>
          <Link to="/" onClick={() => setActiveLink(0)}>Home</Link>
        </li>
        <li className={`${activeLink === 1 && 'active'}`}>
          <Link to="/report" onClick={() => setActiveLink(1)}>Report</Link>
        </li>
        <li className={`${activeLink === 2 && 'active'}`}>
          <Link to="/settings" onClick={() => setActiveLink(2)}>Settings</Link>
        </li>
        <li className={`${activeLink === 3 && 'active'}`}>
          <Link to="/charts" onClick={() => setActiveLink(3)}>Charts</Link>
        </li>
        <li className={`${activeLink === 4 && 'active'}`}>
          <Link to="/statistic" onClick={() => setActiveLink(4)}>Statistic</Link>
        </li>
        <li className={`${activeLink === 5 && 'active'}`}>
          <Link to="/options" onClick={() => setActiveLink(5)}>Options</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
