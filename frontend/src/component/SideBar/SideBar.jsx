//component SideBar
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <Link to="/" className="simple-text">
            <p>Masa Madre</p>
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <Link to="/panificados" className="nav-link">
              <i className="fa fa-home"></i>
              <p>Panes</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pizzas" className="nav-link">
              <i className="fa fa-users"></i>
              <p>Pizzas</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/focaccias" className="nav-link">
              <i className="fa fa-product-hunt"></i>
              <p>Focaccias</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/combos" className="nav-link">
              <i className="fa fa-shopping-cart"></i>
              <p>Combos</p>
            </Link>
          </li>          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;