import { WHATSAPP_NUMBER } from "../data/products";

export function buildWhatsAppLink(product) {
  const msg = encodeURIComponent(
    `Olá Cinthia! 😊 Quero fazer um pedido:\n\n🛒 *${product.name}* — ${product.price}\n\nPoderia me dar mais informações?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
