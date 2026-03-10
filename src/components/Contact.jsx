import { WHATSAPP_NUMBER } from "../data/products";

export default function Contact() {
  return (
    <section id="contato" style={{
      padding: "100px 40px",
      background: "linear-gradient(135deg, #8b2252, #c2537a)",
      textAlign: "center",
    }}>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "12px", fontWeight: 700 }}>Bora conversar?</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "white", marginBottom: "20px" }}>Faça seu Pedido</h2>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7 }}>
        Mande uma mensagem pelo WhatsApp para fazer pedidos, encomendas ou tirar dúvidas. A Cinthia responde rapidinho! 🌸
      </p>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        padding: "17px 42px", borderRadius: "50px",
        background: "white", color: "#c2537a",
        fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "1rem",
        letterSpacing: "0.05em", textDecoration: "none",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.28)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)"; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.522 5.849L.044 23.956l6.282-1.449C8.016 23.488 9.973 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.644-.518-5.145-1.418l-.368-.219-3.73.859.882-3.636-.24-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Chamar no WhatsApp
      </a>
    </section>
  );
}