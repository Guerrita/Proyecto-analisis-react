import React from 'react';
import { NavLink } from "react-router-dom";
import '@styles/Navbar.css'
import chevron from '@assets/chevron.svg'

const Navbar = () => {
  const toggleMenu = () => document.body.className.toggle("open");
  return (
    <nav class="navbar">
      <button onClick={() => toggleMenu()} class="burger"></button>
      <NavLink className="nav-button" to="/"><button class="button">Home</button></NavLink>
      <div class="dropdowns">
        <div class="dropdown">
          <button class="button">
            Functions
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
            <NavLink className="nav-button" to="/incremental-search"><button>Incremental Search</button></NavLink>
            <NavLink className="nav-button" to="/"><button>False Rule</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Newton</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Fixed Point</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Secant</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Multiple Roots</button></NavLink>
          </div>
        </div>
        <div class="dropdown">
          <button class="button">
            Matrices
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
            <NavLink className="nav-button" to="/"><button>Gaussian Simple Elimination</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Gaussian Elimination With Partial Pivoting</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Gaussian elimination with Total Pivoting</button></NavLink>
            <NavLink className="nav-button" to="/"><button>LU with Gaussian Simple Elimination</button></NavLink>
            <NavLink className="nav-button" to="/"><button>LU With Partial Pivoting</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Crout</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Doolittle</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Cholesky</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Jacobi</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Gauss-Seidel</button></NavLink>
            <NavLink className="nav-button" to="/"><button>SOR</button></NavLink>
          </div>
        </div>
        <div class="dropdown">
          <button class="button">
            Interpolations
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
            <NavLink className="nav-button" to="/"><button>Vandermonde</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Newton</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Lagrange</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Lineal Spline</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Cuadratic Spline</button></NavLink>
            <NavLink className="nav-button" to="/"><button>Cubic Spline</button></NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;