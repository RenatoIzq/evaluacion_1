import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import "./index.css";

const DevelopPage = ({ developer }) => {
  return (
    <div className="dev-wrapper">
      <NavBar />

      <main className="dev-main">
        <div className="dev-card">

          {/* Avatar */}
          <div className="dev-avatar">
            {developer.avatar
              ? <img src={developer.avatar} alt={`Foto de ${developer.name}`} className="dev-avatar__img" />
              : (
                <svg viewBox="0 0 24 24" fill="#aaa" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              )
            }
          </div>

          <h1 className="dev-name">{developer.name}</h1>

          <div className="dev-info">
            <div className="dev-info__item">
              <span className="dev-info__label">Carrera</span>
              <span className="dev-info__value">{developer.career}</span>
            </div>
            <div className="dev-info__item">
              <span className="dev-info__label">Ciudad</span>
              <span className="dev-info__value">{developer.city}</span>
            </div>
            <div className="dev-info__item">
              <span className="dev-info__label">GitHub</span>
              <a href={developer.github} target="_blank" rel="noreferrer" className="dev-info__link">
                @{developer.githubUser}
              </a>
            </div>
          </div>

          <a href={developer.github} target="_blank" rel="noreferrer" className="dev-github-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Ver perfil en GitHub
          </a>

          <a href={developer.repo} target="_blank" rel="noreferrer" className="dev-repo-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4 2h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
            </svg>
            Ver proyecto
          </a>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevelopPage;
