import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import "./index.css";

const VentasPage = () => {
  return (
    <div className="ventas-wrapper">
      <NavBar />

      <main className="ventas-main">
        <div className="ventas-card">
          <span className="ventas-icon" aria-hidden="true">🏺</span>
          <h1 className="ventas-title">Próximamente</h1>
          <p className="ventas-body">
            Nuestra tienda en línea está en construcción. Pronto podrás
            explorar y adquirir nuestras piezas directamente desde aquí.
          </p>
          <Link to="/" className="ventas-back">
            Volver al inicio
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VentasPage;
