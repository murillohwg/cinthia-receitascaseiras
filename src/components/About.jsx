export default function About() {
  return (
    <section id="sobre" style={{
      padding: "100px 40px",
      background: "linear-gradient(135deg, #fde8f0 0%, #fff0f5 100%)",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#d4789a", marginBottom: "12px", fontWeight: 700 }}>Quem faz tudo isso?</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#8b2252", marginBottom: "32px" }}>A Cinthia 🍓</h2>
        <div style={{
          width: "90px", height: "90px", borderRadius: "50%",
          background: "linear-gradient(135deg, #e8638a, #c2537a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "3rem", margin: "0 auto 32px",
          boxShadow: "0 8px 24px rgba(194,83,122,0.3)",
        }}>👩‍🍳</div>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "#9e5070", lineHeight: 1.8, marginBottom: "20px" }}>
          Há mais de 10 anos na cozinha, a Cinthia transforma ingredientes simples em momentos especiais. Cada salgadinho, cada docinho é feito com receitas da família e muito amor.
        </p>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "#9e5070", lineHeight: 1.8 }}>
          Sem conservantes, sem industrializados. Só o melhor para você e sua família. 🤍
        </p>
      </div>
    </section>
  );
}