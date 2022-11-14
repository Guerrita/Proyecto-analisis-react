import React from 'react';
import { NavLink } from "react-router-dom";
import '@styles/Navbar.css'
import chevron from '@assets/chevron.svg'

const Navbar = () => {
  const toggleMenu = () => document.body.className.toggle("open");
  return (
    <nav class="navbar">
      <button onClick={()=>toggleMenu()} class="burger"></button>
      <button class="button">Home</button>
      <div class="dropdowns">
        <div class="dropdown">
          <button class="button">
            Functions
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
          <button><NavLink className="nav-button" to="/">Incremental Search</NavLink></button>
          <button><NavLink className="nav-button" to="/">False Rule</NavLink></button>
          <button><NavLink className="nav-button" to="/">Newton</NavLink></button>
          <button><NavLink className="nav-button" to="/">Fixed Point</NavLink></button>
          <button><NavLink className="nav-button" to="/">Secant</NavLink></button>

          </div>
        </div>
        <div class="dropdown">
          <button class="button">
            Matrices
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
          <button><NavLink className="nav-button" to="/">Gaussian Simple Elimination</NavLink></button>
          <button><NavLink className="nav-button" to="/">Gaussian Elimination With Partial Pivoting</NavLink></button>
          <button><NavLink className="nav-button" to="/">Gaussian elimination with Total Pivoting</NavLink></button>
          <button><NavLink className="nav-button" to="/">LU with Gaussian Simple Elimination</NavLink></button>
          <button><NavLink className="nav-button" to="/">LU With Partial Pivoting</NavLink></button>
          <button><NavLink className="nav-button" to="/">Crout</NavLink></button>
          <button><NavLink className="nav-button" to="/">Doolittle</NavLink></button>
          <button><NavLink className="nav-button" to="/">Cholesky</NavLink></button>
          <button><NavLink className="nav-button" to="/">Jacobi</NavLink></button>
          <button><NavLink className="nav-button" to="/">Gauss-Seidel</NavLink></button>
          <button><NavLink className="nav-button" to="/">SOR</NavLink></button>
          </div>
        </div>
        <div class="dropdown">
          <button class="button">
          Interpolations
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
          <button><NavLink className="nav-button" to="/">Vandermonde</NavLink></button>
          <button><NavLink className="nav-button" to="/">Newton</NavLink></button>
          <button><NavLink className="nav-button" to="/">Lagrange</NavLink></button>
          <button><NavLink className="nav-button" to="/">Lineal Spline</NavLink></button>
          <button><NavLink className="nav-button" to="/">Cuadratic Spline</NavLink></button>
          <button><NavLink className="nav-button" to="/">Cubic Spline</NavLink></button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;