export default function Footer() {
  return (
    <footer style={{
      padding: "32px 40px", background: "#6b1a3f",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "12px",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
        🍓 Receitas Caseiras da Cinthia
      </span>
      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
        © {new Date().getFullYear()} — Feito com muito amor 🤍
      </span>
    </footer>
  );
}