import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import logoIcon from "../../assets/CONDECERAMICA.png";
import "./index.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          <img 
            src={logoIcon}
            alt="CondeCerámicas logo" 
            className="logo-img" 
          />
          <span className="logo-name">CondeCerámicas</span>
        </Link>

        <div className="navbar-actions">
          <Link to="/ventas" className="btn-ventas">
            Ventas
          </Link>
          <Button text="Contáctanos" onClick={() => navigate('/contacto')} />
        </div>
      </div>
    </nav>
  );
};