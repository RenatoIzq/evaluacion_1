import { useState, useEffect } from "react";
import "./index.css";

const slides = [
  { id: 1, bg: "#d6e4f0", label: "Colección Primavera" },
  { id: 2, bg: "#d6f0e0", label: "Colección Verano"    },
  { id: 3, bg: "#f0e6d6", label: "Colección Otoño"     },
];

/**
 * HeroSlider — Slide automático con transición CSS (transform/transition).
 * Sin librerías externas.
 */
export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Avance automático cada 3.5 s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <div className="slider" aria-label="Galería de colecciones">
      {/* Track que se desplaza con transform */}
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slider__slide"
            style={{ backgroundColor: slide.bg }}
          >
            {/* Placeholder de imagen */}
            <div className="slider__img-placeholder" aria-hidden="true" />
            <span className="slider__label">{slide.label}</span>
          </div>
        ))}
      </div>

      {/* Dots de navegación */}
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
