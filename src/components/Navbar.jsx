import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "12px 24px" : "20px 24px",
      background: scrolled || menuOpen ? "rgba(255,240,245,0.96)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
      borderBottom: scrolled || menuOpen ? "1px solid rgba(255,182,193,0.3)" : "none",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      transition: "all 0.4s ease",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#c2537a" }}>
        🍓 Cinthia
      </span>

      <div className="nav-links-desktop" style={{ display: "flex", gap: "28px" }}>
        {["Cardápio", "Sobre", "FAQ", "Contato"].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", fontWeight: 600,
            color: "#c2537a", textDecoration: "none", letterSpacing: "0.08em",
            textTransform: "uppercase", transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.6"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >{item}</a>
        ))}
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          background: "none", border: "none", cursor: "pointer",
          padding: "4px", flexDirection: "column",
          gap: "5px", alignItems: "center", justifyContent: "center",
        }}
        aria-label="Menu"
      >
        <span style={{ width: "22px", height: "2px", background: "#c2537a", borderRadius: "2px", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span style={{ width: "22px", height: "2px", background: "#c2537a", borderRadius: "2px", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
        <span style={{ width: "22px", height: "2px", background: "#c2537a", borderRadius: "2px", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
      </button>

      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(255,240,245,0.98)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,182,193,0.3)",
          display: "flex", flexDirection: "column", padding: "16px 24px", gap: "16px",
        }}>
          {["Cardápio", "Sobre", "FAQ", "Contato"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Lato', sans-serif", fontSize: "1rem", fontWeight: 600,
                color: "#c2537a", textDecoration: "none", letterSpacing: "0.08em",
                textTransform: "uppercase", padding: "8px 0",
                borderBottom: "1px solid rgba(255,182,193,0.2)",
              }}
            >{item}</a>
          ))}
        </div>
      )}

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 600px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );}