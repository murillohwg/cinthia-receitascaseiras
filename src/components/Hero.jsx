import { WHATSAPP_NUMBER } from "../data/products";
import Particles from "./Particles";
import CircularText from "./CircularText";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #fff0f5 0%, #fde8f0 40%, #ffd6e7 100%)",
      position: "relative", overflow: "hidden", padding: "80px 40px 40px",
    }}>

      {/* Particles background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Particles
          particleColors={["#f0b8cc", "#e8638a", "#ffd6e7", "#c2537a"]}
          particleCount={80}
          particleSpread={8}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,182,193,0.35) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,105,150,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Layout duas colunas */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "60px", width: "100%", maxWidth: "1100px", position: "relative", zIndex: 1, flexWrap: "wrap" }}>

        {/* Coluna esquerda - conteúdo */}
        <div style={{ maxWidth: "580px", textAlign: "left" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#d4789a", marginBottom: "16px", fontWeight: 700 }}>
            ✨ Feito com amor e dedicação
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
            fontWeight: 700, color: "#8b2252", lineHeight: 1.15, marginBottom: "24px",
            animation: "fadeUp 0.8s ease forwards",
          }}>
            Receitas Caseiras<br />
            <span style={{ color: "#c2537a", fontStyle: "italic" }}>da Cinthia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", color: "#9e5070",
            lineHeight: 1.7, marginBottom: "40px",
          }}>
            Salgados crocantes e doces irresistíveis feitos na hora, com ingredientes frescos e muito carinho. Experimente o sabor de casa!
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#cardápio" style={{
              display: "inline-block", padding: "15px 36px",
              background: "linear-gradient(135deg, #e8638a, #c2537a)",
              color: "white", borderRadius: "50px", textDecoration: "none",
              fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "0.95rem",
              letterSpacing: "0.05em", boxShadow: "0 8px 24px rgba(194,83,122,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 32px rgba(194,83,122,0.45)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 24px rgba(194,83,122,0.35)"; }}
            >
              🍽️ Ver Cardápio
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block", padding: "15px 36px",
              background: "white", color: "#c2537a", borderRadius: "50px", textDecoration: "none",
              fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "0.95rem",
              letterSpacing: "0.05em", border: "2px solid #f0b8cc",
              boxShadow: "0 4px 16px rgba(194,83,122,0.12)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Coluna direita - CircularText */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CircularText
            text="*CINTHIA*RECEITAS*CASEIRAS"
            onHover="speedUp"
            spinDuration={20}

/>
        </div>
                    {/* Emojis flutuantes */}
{["🍗", "🍫", "🧁", "🥐", "🍋", "🍓", "🧆", "🍮"].map((em, i) => (
  <span key={i} style={{
    position: "absolute",
    fontSize: "1.8rem",
    top: `${[10, 75, 20, 85, 50, 30, 65, 45][i]}%`,
    left: `${[5, 88, 92, 3, 95, 90, 7, 85][i]}%`,
    opacity: 0.6,
    animation: `float${i % 2} ${3 + i * 0.4}s ease-in-out infinite`,
    pointerEvents: "none",
  }}>{em}</span>
))}

      </div>
    </section>
  );
}