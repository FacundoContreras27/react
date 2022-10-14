import '../NavBar/NavBar.css'
import logo from  "../NavBar/logo.svg.png"
import CartWidget from '../CartWidget/CartiWidget'
import { Link } from 'react-router-dom'

const NavBAr = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="navbar container-fluid ">
          <img src={logo}/>
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to = '/'>
                <a id="item">Inicio</a>
                </Link>
              </li>
              <li >
              <Link to = '/category/Remeras'>
                <a id="item">Remeras</a>
                </Link>
              </li>
              <li>
              <Link to = '/category/Camisas'>
                <a id="item">Camisas</a>
              </Link>
              </li>
              <li>
              <Link to = '/category/Buzos'>
                <a id="item">Buzos</a>
                </Link>
              </li>
            </ul>
          </div>
          <a>
            <CartWidget />
          </a>
        </div>
      </nav>
    )
    
}

export default NavBAr