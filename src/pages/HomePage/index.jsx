import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { CommentsCard } from '../../components/CommentsCard';
import { ValueCard } from '../../components/ValueCard';
import { HeroSlider } from '../../components/HeroSlider';
import { testimonials, valueProposals } from '../../data/dummy.js';
import screenshot3 from '../../assets/imagens/Screenshot_3.png';
import './index.css';

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <NavBar />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Cerámica para el día a día
          </h1>
          <p className="hero-body">
            Platos, tazas, macetas y más, hechos a mano con arcilla nacional.
            Cada pieza está pensada para usarse, no solo para verse: resistente,
            funcional y con el carácter único que solo da el trabajo artesanal.
          </p>
          <p className="hero-body">
            Trabajamos en pequeños lotes para cuidar cada detalle. Desde el
            amasado de la arcilla hasta el esmaltado final, todo ocurre en
            nuestro taller en Talca, con materiales nacionales y sin
            intermediarios.
          </p>
          <div className="hero-cta">
            <Button text="Comience Ahora" />
          </div>
        </div>

        <div className="hero-slider-desktop">
          <HeroSlider />
        </div>
      </section>

      <div className="hero-slider-mobile">
        <HeroSlider />
      </div>

      <section className="feature-section">
        <div className="feature-content">
          <h2 className="feature-title">
            Piezas que se usan, se sienten y duran
          </h2>
          <p className="feature-body">
            Cada taza, plato o maceta pasa por un proceso de modelado a mano,
            secado lento y cocción en horno de alta temperatura. El resultado es
            una pieza gres de paredes firmes, apta para microondas y lavavajillas.
          </p>
          <p className="feature-body">
            No usamos moldes industriales ni procesos en serie. Cada pieza lleva
            la huella de quien la hizo: pequeñas variaciones en el esmalte, en
            el grosor, en la forma, que la hacen completamente única y le dan
            un valor que ninguna cerámica de fábrica puede igualar.
          </p>
        </div>

        <div className="feature-image-wrap">
          <img
            src={screenshot3}
            alt="Piezas de cerámica artesanal Condecerámica"
            className="feature-image"
          />
          <div className="feature-stars" aria-label="Valoración 5 estrellas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="values-title">¿Por qué elegirnos?</h2>
        <div className="values-grid">
          {valueProposals.map((item) => (
            <ValueCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title">Nuestro equipo</h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <CommentsCard
              key={item.id}
              name={item.name}
              role={item.role}
              comment={item.comment}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
