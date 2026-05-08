import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import "./index.css";

const ContactoPage = () => {
  return (
    <div className="contacto-wrapper">
      <NavBar />

      <main className="contacto-main">
        <div className="contacto-card">
          <span className="contacto-icon" aria-hidden="true">✉️</span>
          <h1 className="contacto-title">¡Hablemos!</h1>
          <p className="contacto-body">
            Estamos trabajando en nuestro formulario de contacto. Mientras
            tanto, puedes escribirnos directamente a nuestras redes sociales
            o visitarnos en nuestro taller en Talca.
          </p>
          <Link to="/" className="contacto-back">
            Volver al inicio
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactoPage;
