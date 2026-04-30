import "./index.css";

export const CommentsCard = ({ name, role, comment }) => {
  return (
    <article className="comments-card">
      <div className="card-avatar" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="#999" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </div>
      <div className="card-body">
        <p className="card-name">{name || "Usuario"} <span className="card-role">{role || ""}</span></p>
        <p className="card-comment">{comment || "Sin comentario disponible."}</p>
      </div>
    </article>
  );
};
