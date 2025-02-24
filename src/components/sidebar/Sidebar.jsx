import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/img/logo-pro-help.png';
import '../sidebar/Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
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
            <i style={{fontSize:18}}className="fas fa-home me-2"></i>
            <span style={{fontSize:17, fontWeight:500}}>Perfil</span> 
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
            <i style={{fontSize:18}} className="fas fa-tachometer-alt me-2"></i>
           <span style={{fontSize:17, fontWeight:500}}>Campañas</span> 
          </NavLink>
        </li>
        <NavLink
            to="/chat"
            className="nav-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#FFFFFF" : "transparent",
              color: isActive ? "black" : "inherit",
            })}
          >
            <i className="fas fa-tachometer-alt me-2"></i>
            <span style={{fontSize:17, fontWeight:500}}>Chat</span> 
          </NavLink>
      </ul>
      
      
    </div>
  );
}

export default Sidebar;
