import "./index.css";

export const ValueCard = ({ icon, title, description }) => {
  return (
    <article className="value-card">
      <div className="value-card__icon" aria-hidden="true">{icon}</div>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__description">{description}</p>
    </article>
  );
};
