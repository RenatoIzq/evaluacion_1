import { useState, useEffect } from "react";
import img1 from "../../assets/imagens/Screenshot 2026-04-30 182633.png";
import img2 from "../../assets/imagens/Screenshot 2026-04-30 182721.png";
import img3 from "../../assets/imagens/Screenshot_1.png";
import img4 from "../../assets/imagens/Screenshot_2.png";
import "./index.css";

const slides = [
  { id: 1, img: img1, label: "Tazas" },
  { id: 2, img: img2, label: "Platos para salsa" },
  { id: 3, img: img3, label: "Set Tucan" },
  { id: 4, img: img4, label: "Set platos bajos azul" },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <div className="slider" aria-label="Galería de colecciones">
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slider__slide">
            <img src={slide.img} alt={slide.label} className="slider__img" />
            <span className="slider__label">{slide.label}</span>
          </div>
        ))}
      </div>

      <div className="slider__dots" role="tablist" aria-label="Seleccionar slide">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider__dot${i === current ? " slider__dot--active" : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
