import { Link } from "react-router-dom";
import iconX         from "../../assets/icons/x.svg";
import iconYoutube   from "../../assets/icons/youtube.svg";
import iconLinkedin  from "../../assets/icons/linkedin-svgrepo-com (1).svg";
import iconInstagram from "../../assets/icons/instagram.svg";
import iconFacebook  from "../../assets/icons/facebook.svg";
import iconTiktok    from "../../assets/icons/tiktok.svg";
import "./index.css";

const socials = [
  { href: "https://twitter.com", icon: iconX, label: "Twitter / X"},
  { href: "https://youtube.com", icon: iconYoutube, label: "YouTube"  },
  { href: "https://linkedin.com", icon: iconLinkedin, label: "LinkedIn"     },
  { href: "https://instagram.com", icon: iconInstagram, label: "Instagram"    },
  { href: "https://facebook.com", icon: iconFacebook, label: "Facebook"     },
  { href: "https://tiktok.com", icon: iconTiktok, label: "TikTok"       },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-socials">
          {socials.map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <img src={icon} alt={label} className="footer-social-icon" />
            </a>
          ))}
        </div>

        <Link to="/develop" className="footer-dev-link">Desarrollador</Link>
      </div>

      <p className="footer-location">Talca, 2026</p>
    </footer>
  );
};
