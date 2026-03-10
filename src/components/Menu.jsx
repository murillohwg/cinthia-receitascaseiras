import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "./ProductCard";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filtered = PRODUCTS.filter(p => activeCategory === "Todos" || p.category === activeCategory);

  return (
    <section id="cardápio" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#d4789a", marginBottom: "12px", fontWeight: 700 }}>O que temos hoje</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#8b2252", marginBottom: "32px" }}>Nosso Cardápio</h2>

          {/* Filter buttons */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "10px 28px", borderRadius: "50px", border: "2px solid",
                borderColor: activeCategory === cat ? "#c2537a" : "#f0b8cc",
                background: activeCategory === cat ? "linear-gradient(135deg, #e8638a, #c2537a)" : "white",
                color: activeCategory === cat ? "white" : "#c2537a",
                fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "0.88rem",
                letterSpacing: "0.06em", cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: activeCategory === cat ? "0 6px 18px rgba(194,83,122,0.3)" : "none",
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}