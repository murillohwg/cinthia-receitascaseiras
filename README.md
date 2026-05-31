# Receitas Caseiras da Cinthia
> Landing page desenvolvida como projeto de extensão universitária para estruturar a presença digital de um pequeno comércio de salgados e doces caseiros.

---

## Sobre o Projeto

A Cinthia é dona de um pequeno comércio de receitas caseiras — salgados crocantes e doces irresistíveis feitos com ingredientes frescos e muito carinho. O objetivo do projeto foi criar uma presença digital simples, bonita e funcional para o negócio, sem necessidade de banco de dados ou servidor — já que a realidade do cliente não comporta esses custos.

O resultado é uma **landing page responsiva** com catálogo de produtos, filtro por categoria e integração direta com WhatsApp para pedidos.

---

## Funcionalidades

- Catálogo de produtos com filtro por categoria (Salgados / Doces)
- Botão de pedido direto no WhatsApp com mensagem pré-formatada
- Navbar responsiva com menu hamburguer no mobile
- Animação de partículas no Hero
- Texto circular giratório decorativo
- Seção Sobre, FAQ com accordion e seção de Contato
- Deploy estático via Netlify

---

##  Tecnologias

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [ogl](https://github.com/oframe/ogl) `@0.0.98` — animação de partículas WebGL
- [motion](https://motion.dev/) — animação do texto circular
- Google Fonts — Playfair Display + Lato

---

##  SecDevOps na Prática

Este projeto foi desenvolvido com conceitos de SecDevOps aplicados desde o início:

| Conceito | Aplicação |
|---|---|
| **Zero hardcode** | Número do WhatsApp centralizado em `data/products.js` |
| **Separation of Concerns** | `/data` para dados, `/utils` para lógica, `/components` para visual |
| **Encode de inputs** | `encodeURIComponent()` na URL do WhatsApp — prevenção contra injeção de caracteres |
| **Tabnabbing prevention** | `rel="noopener noreferrer"` em todos os links externos |
| **Dependency pinning** | Versão do `ogl` fixada em `0.0.98` após identificar incompatibilidade na `1.0.11` |
| **Supply chain awareness** | Bibliotecas externas avaliadas antes de entrar no projeto |
| **Privacy by design** | Repositório privado para proteger dados do cliente |

---

## Estrutura do Projeto

```
src/
├── App.jsx                  # Orquestra todos os componentes
├── main.jsx                 # Entrada da aplicação
├── data/
│   └── products.js          # Produtos, categorias, FAQs e configurações
├── utils/
│   └── whatsapp.js          # Lógica de geração do link do WhatsApp
└── components/
    ├── Navbar.jsx            # Navbar fixa e responsiva
    ├── Hero.jsx              # Seção principal com partículas
    ├── Menu.jsx              # Cardápio com filtro por categoria
    ├── ProductCard.jsx       # Card individual de produto
    ├── About.jsx             # Seção sobre a Cinthia
    ├── FAQ.jsx               # Perguntas frequentes com accordion
    ├── Contact.jsx           # CTA de contato via WhatsApp
    ├── Footer.jsx            # Rodapé
    ├── Particles.jsx         # Animação de partículas WebGL
    └── CircularText.jsx      # Texto circular giratório
```
---

**link: https://cinthia-receitas.onrender.com/**

---

##  Licença

Projeto acadêmico. Todos os direitos do conteúdo reservados à Cinthia Receitas Caseiras.
