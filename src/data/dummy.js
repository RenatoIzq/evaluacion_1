import ceramica from '../assets/icons/ceramica.png';
import porcelana from '../assets/icons/porcelana.png';
import arcilla from '../assets/icons/elaboracion-de-arcilla.png';

// ── Testimonios / CommentsCard ──────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Sofía Herrera",
    role: "Chef independiente",
    comment:
      "Uso los platos de Condecerámica en mis cenas privadas. Mis clientes siempre preguntan por ellos: aguantan el horno, el lavavajillas y cada vez se ven mejor.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Tomás Valdés",
    role: "Amante del café",
    comment:
      "Compré una taza hace dos años y sigue igual. El grosor de la cerámica mantiene el café caliente mucho más que cualquier taza de loza. No cambio por nada.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Camila Reyes",
    role: "Decoradora de interiores",
    comment:
      "Las macetas son perfectas: tienen el peso justo, drenan bien y el acabado mate combina con todo. Las recomiendo a todos mis clientes.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// ── Propuestas de valor (ValueCard) ────────────────────────────────────────
export const valueProposals = [
  {
    id: 1,
    icon: ceramica,
    title: "Apta para uso diario",
    description:
      "Nuestras piezas soportan microondas, horno y lavavajillas. Están hechas para vivir en tu cocina, no guardadas en una vitrina.",
  },
  {
    id: 2,
    icon: porcelana,
    title: "Modelada a mano",
    description:
      "Cada plato, taza o maceta es única. El modelado manual garantiza que ninguna pieza sea exactamente igual a otra.",
  },
  {
    id: 3,
    icon: arcilla,
    title: "Arcilla Nacional",
    description:
      "Trabajamos con materias primas nacionales, cocida a alta temperatura para lograr piezas densas, resistentes y de larga duración.",
  },
];
