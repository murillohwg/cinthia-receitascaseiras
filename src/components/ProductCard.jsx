import { useState } from "react";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white", borderRadius: "20px", padding: "28px 24px",
        border: "1.5px solid", borderColor: hovered ? "#e8638a" : "#fde8f0",
        boxShadow: hovered ? "0 16px 40px rgba(194,83,122,0.18)" : "0 4px 16px rgba(194,83,122,0.07)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease", display: "flex", flexDirection: "column",
      }}>
      <div style={{ fontSize: "3rem", marginBottom: "16px", textAlign: "center" }}>{product.emoji}</div>
      <span style={{
        display: "inline-block", padding: "3px 12px", borderRadius: "20px",
        background: "#fff0f5", color: "#c2537a",
        fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", alignSelf: "flex-start",
      }}>{product.category}</span>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#8b2252", marginBottom: "8px" }}>{product.name}</h3>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", color: "#b07088", lineHeight: 1.6, flex: 1, marginBottom: "20px" }}>{product.desc}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#c2537a" }}>{product.price}</span>
        <a href={buildWhatsAppLink(product)} target="_blank" rel="noopener noreferrer" style={{
          padding: "9px 20px", borderRadius: "50px",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          color: "white", textDecoration: "none",
          fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "0.82rem",
          letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "6px",
          boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
          transition: "transform 0.2s",
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.522 5.849L.044 23.956l6.282-1.449C8.016 23.488 9.973 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.644-.518-5.145-1.418l-.368-.219-3.73.859.882-3.636-.24-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Pedir
        </a>
      </div>
    </div>
  );
}