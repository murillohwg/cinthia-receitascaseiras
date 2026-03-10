import { useState } from "react";
import { FAQS } from "../data/products";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ padding: "100px 40px", background: "white" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#d4789a", marginBottom: "12px", fontWeight: 700 }}>Dúvidas?</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#8b2252" }}>Perguntas Frequentes</h2>
        </div>
        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #fde8f0", marginBottom: "4px", overflow: "hidden" }}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{
              width: "100%", padding: "20px 0", background: "none", border: "none",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              cursor: "pointer", fontFamily: "'Playfair Display', serif",
              fontSize: "1.05rem", color: "#8b2252", textAlign: "left",
            }}>
              {faq.q}
              <span style={{
                color: "#c2537a", fontSize: "1.4rem",
                transition: "transform 0.3s",
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                display: "inline-block",
              }}>+</span>
            </button>
            <div style={{ maxHeight: openIndex === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "#9e5070", lineHeight: 1.7, padding: "0 0 20px" }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}