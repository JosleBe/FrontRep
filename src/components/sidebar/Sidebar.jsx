import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/img/logo-pro-help.png';
import '../sidebar/Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState("Perfil");

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '280px', height: '100vh', background: '#AFCCD0' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span><img className='logo-sidebar' src={logo} alt="Logo" /></span>
      </a>
      <hr style={{background:'white',height:'4px'}}/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
        <NavLink
            to="/profile"
            className="nav-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#FFFFFF" : "transparent",
              color: isActive ? "black" : "inherit",
            })}
          >
            <i className="fas fa-home me-2"></i>
            Perfil
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/campaigns"
            className="nav-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#FFFFFF" : "transparent",
              color: isActive ? "black" : "inherit",
            })}
          >
            <i className="fas fa-tachometer-alt me-2"></i>
            Campañas
          </NavLink>
        </li>
        <li>
          <a 
            href="#" 
            className={`nav-link ${active === "Salir" ? "active" : "link-dark"}`}
            style={{ backgroundColor: active === "Salir" ? "#FFFFFF" : "transparent", color: active === "Salir" ? "black" : "inherit" }}
            onClick={() => setActive("Salir")}
          >
            <i className="fas fa-box me-2"></i>
            Salir
          </a>
        </li>
      </ul>
      
      <div className="dropdown">
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
          
        </ul>
        
      </div>
    </div>
  );
}

export default Sidebar;
