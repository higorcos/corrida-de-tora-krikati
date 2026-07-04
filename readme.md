# Projeto Cultural Indígena — TCC

Site estático e moderno em React para documentação de um grupo indígena, com vídeos, 
, fotografias e textos sobre história, cultura e cotidiano.

---

## Identidade Visual

| Elemento | Referência |
|---|---|
| Estilo | Editorial longform (NYT, The Intercept) |
| Paleta | Terroso · Vermelho urucum · Roxo genipapo · Bege/areia |
| Grafismos | Listras e padrões geométricos indígenas discretos |
| Tipografia | Moderna, elegante, boa legibilidade |

### Paleta de Cores

```
Urucum       #C0392B  ████
Genipapo     #1A237E  ████
Marrom       #6B4226  ████
Areia        #F5E6C8  ████
Bege escuro  #D4A843  ████
```

---

## Estrutura do Site

```
/                   → Página inicial (hero + destaques)
/videos             → Grid de vídeos com embed YouTube
/longform           → Lista de longform (card com capa, resumo, data)
/longform/:slug     → Crônica individual (longform: texto + fotos + vídeos)
/galeria            → Masonry grid com lightbox
```

---

## Stack Técnica

- **React + Vite**
- **React Router**
- **CSS Modules** ou **Tailwind CSS**
- **Sem backend** — dados em arquivos locais (`videos.js`, `longform.js`, `galeria.js`)

---

## Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas (Home, Videos, Cronicas, Galeria)
├── data/              # videos.js · longform.js · galeria.js
├── assets/            # Imagens, ícones, fontes
└── styles/            # CSS global e variáveis
```

---

## Assets Visuais

### Imagens reais do projeto
```
img/
├── img01.jpeg  (352 KB)   # Usar como hero ou galeria
├── img02.jpeg  (294 KB)
├── img03.jpeg  (163 KB)
├── img04.jpeg  (214 KB)
├── img05.jpeg  (279 KB)
├── img06.jpeg  (468 KB)
├── img07.jpeg  (346 KB)
├── img08.jpeg  (192 KB)
├── img09.jpeg  (188 KB)
├── img10.jpeg  (520 KB)   # Maior — ideal para hero
└── img11.jpeg  (408 KB)
```

### Placeholders SVG (identidade visual: urucum + genipapo + terroso)
```
assets/images/
├── hero-placeholder.svg              # Banner 1200×600 — fundo terroso + grafismo
├── cronica-placeholder.svg           # Card 800×500 — capa de longform
├── galeria-placeholder.svg           # Masonry 600×600 — preview de galeria
└── video-thumbnail-placeholder.svg   # Thumb 640×360 — fundo genipapo + botão play
```

- Transições de página
- SEO básico (meta tags)




