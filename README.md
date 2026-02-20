# 🚀 Maxence Poizat — Portfolio

Portfolio personnel de développeur full-stack, conçu avec React, TypeScript et Tailwind CSS.

> **[maxencepzt.fr](https://maxencepzt.fr)** — Design minimaliste, animations fluides, i18n FR/EN.

---

## ✨ Features

- ⚡ **Vite** — Build ultra-rapide avec HMR
- 🎨 **Tailwind CSS v4** — Design system tokens personnalisés
- 🌐 **i18n** — Détection automatique FR/EN
- 🎭 **Framer Motion** — Animations et transitions fluides
- 🗺️ **Leaflet** — Carte interactive de localisation
- ✨ **Particle Canvas** — Fond interactif avec gravité
- 📱 **Responsive** — Mobile-first, navigation adaptative
- 🐳 **Docker** — Build multi-stage avec Nginx

---

## 🛠️ Tech Stack

| Catégorie      | Technologies                          |
| -------------- | ------------------------------------- |
| **Frontend**   | React 19, TypeScript, Tailwind CSS v4 |
| **Animations** | Framer Motion                         |
| **Routing**    | React Router DOM v7                   |
| **Maps**       | Leaflet + React Leaflet               |
| **Build**      | Vite 6                                |
| **Linting**    | ESLint, Prettier, Husky + lint-staged |
| **Deploy**     | Docker (Nginx Alpine)                 |

---

## 📦 Getting Started

```bash
# Cloner le projet
git clone https://github.com/maxencepzt/portfolio-2025.git
cd portfolio-2025

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

---

## 📜 Scripts

| Commande               | Description                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Serveur de développement Vite               |
| `npm run build`        | Build de production (TypeScript + Vite)     |
| `npm run preview`      | Prévisualiser le build de production        |
| `npm run lint`         | Vérifier le code avec ESLint                |
| `npm run lint:fix`     | Corriger automatiquement les erreurs ESLint |
| `npm run format`       | Formater le code avec Prettier              |
| `npm run format:check` | Vérifier le formatage sans modifier         |
| `npm run type-check`   | Vérifier les types TypeScript               |

> Les hooks **Husky** exécutent automatiquement le lint, le formatage et le type-check avant chaque commit.

---

## 🐳 Docker

```bash
# Build de l'image
docker build -t portfolio-2025 .

# Lancer le conteneur
docker run -d -p 8080:8080 --name portfolio-2025 portfolio-2025
```

Le site est servi par Nginx sur `http://localhost:8080`.

---

## 📁 Structure

```
src/
├── components/
│   ├── interactive/     # ParticleCanvas, GravityToggle
│   ├── layout/          # Navbar, Layout
│   └── ui/              # Card, Button, AnimatedText, LocationMap
├── i18n/                # Traductions FR/EN, Provider, Hook
├── sections/            # Hero, About, Projects, Experience, Contact
├── App.tsx
├── main.tsx
└── index.css            # Design tokens & global styles
```

---

## 📄 License

Ce projet est open-source.

---

<p align="center">
  <sub>Built with ☕ by <a href="https://github.com/maxencepzt">Maxence Poizat</a></sub>
</p>
