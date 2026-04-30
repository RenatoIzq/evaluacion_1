import "./index.css";

export const ValueCard = ({ icon, title, description }) => {
  return (
    <article className="value-card">
      <div className="value-card__icon">
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__description">{description}</p>
    </article>
  );
};
