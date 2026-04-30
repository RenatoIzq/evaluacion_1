import { Link } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/condeceramicalogo.png"
import "./index.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          <img 
            src={logo}
            alt="Logo" 
            className="logo-img" 
          />
        </Link>

        <div className="navbar-actions">
          <Link to="/ventas" className="btn-ventas">
            Ventas
          </Link>
          <Button text="Comience Ahora" />
        </div>
      </div>
    </nav>
  );
};