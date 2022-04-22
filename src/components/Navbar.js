import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='container px'>
      <ul className="main__nav d-flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
        <li>
          <Link to="/options">Options</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
