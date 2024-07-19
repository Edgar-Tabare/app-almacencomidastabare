import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidtget from "./CartWidtget";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Almacén de Comidas</h1>
      </Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/">Inicio</Link></li>     
        <li 
          className="menu-link"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/productos">Productos</Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link className="menu-link" to="/productos/Aperitivos">Aperitivos</Link></li>
              <li><Link className="menu-link" to="/productos/Internacional">Internacional</Link></li>
              <li><Link className="menu-link" to="/productos/Carnes">Carnes</Link></li>
              <li><Link className="menu-link" to="/productos/Pastas">Pastas</Link></li>
            </ul>
          )}
        </li>
        <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
        <li><Link className="menu-link" to="/contactos">Contactos</Link></li>
        <li><CartWidtget/></li>
      </ul>
    </nav>
  );
};

export default NavBar;
