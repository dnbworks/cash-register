import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='container px'>
      <ul className="main__nav d-flex">
        <li>
          <Link to="/cart">Home</Link>
        </li>
        <li>
          <Link to="/cart">Report</Link>
        </li>
        <li>
          <Link to="/cart">Setting</Link>
        </li>
        <li>
          <Link to="/cart">Charts</Link>
        </li>
        <li>
          <Link to="/cart">Statistic</Link>
        </li>
        <li>
          <Link to="/cart">Option</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
