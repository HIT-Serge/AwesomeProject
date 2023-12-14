
import { Outlet, Link } from "react-router-dom";
import Logo from '../img/netnietflix.png';
// import Netnietflix from './Home';


const Layout = () => {
  return (
    <>
    
      <nav>
      <img className="logo" alt="netnietflix" src={Logo} />
        <ul>
          <li>
            <Link to="/" reloadDocument={true}><h3>Home</h3></Link>
          </li>
          <li>
            <Link to="/Search"><h3>Search</h3></Link>
          </li>
        </ul>
      </nav>
      <div>

      <Outlet />
      </div>
    </>
  )
};

export default Layout;