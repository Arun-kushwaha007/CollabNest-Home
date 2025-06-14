# 🚀 CollabNest — Real-Time Teamwork, Beautifully Engineered

> 🌐 A visually stunning, highly interactive landing page for CollabNest — your all-in-one platform for seamless real-time collaboration, task management, and organization-level efficiency.

<!-- ![Hero Banner](https://user-images.githubusercontent.com/your-screenshot/hero-preview.png) -->

---

## ✨ Features

- 🎯 **Hero Section with 3D Animation** — Built using Three.js (`@react-three/fiber`) with animated nodes, glowing lines, and motion blur.
- 🎬 **Smooth Animations** — Powered by [Framer Motion](https://www.framer.com/motion/) for transitions, reveals, and hover effects.
- 🎨 **Responsive Dark Mode** — Toggle between light and dark themes with persisted user preference using a custom React hook.
- 🧱 **Tailwind CSS 3.0** — Utility-first CSS framework with a clean and maintainable structure.
- 📱 **Responsive Design** — Works across all screen sizes with adaptive layouts.
- 💡 **Feature Sections** — Modular, reusable components highlighting platform capabilities.
- ⚡ **Quick Access Navbar** — Smooth scroll + theme toggle + mobile menu with animated transitions.

---

## 📁 Folder Structure

```bash
collabnest-landing/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, icons
│   ├── components/          # Reusable UI components (Navbar, Footer, etc.)
│   ├── sections/            # Page sections (Hero, Features, Contact, etc.)
│   ├── hooks/               # Custom hooks (e.g., useDarkMode, useResponsiveScale)
│   ├── utils/               # Motion variants, animations
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
├── tailwind.config.js       # Tailwind config
├── vite.config.js           # Vite config
└── README.md
```

---

## 🧪 Tech Stack

| Technology           | Purpose                                |
|----------------------|----------------------------------------|
| **React**            | UI Library                             |
| **Vite**             | Lightning-fast dev/build tool          |
| **Tailwind CSS**     | Styling with utility classes           |
| **Framer Motion**    | Animations & transitions               |
| **Three.js**         | 3D rendering                           |
| **@react-three/fiber** | React renderer for Three.js          |
| **Lucide React**     | Beautiful icon set                     |

---

## 🖥️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/collabnest-landing.git
cd collabnest-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173)

---

## 🌓 Toggle Dark Mode

We use a custom `useDarkMode()` hook that:

- Reads from `localStorage`
- Applies Tailwind’s `dark:` utility classes
- Syncs with the theme toggle button in the Navbar

<!-- ---

## 📸 Screenshots

| 💻 Desktop View | 📱 Mobile View |
|:--------------:|:-------------:|
| ![Desktop](https://user-images.githubusercontent.com/your-screenshot/desktop.png) | ![Mobile](https://user-images.githubusercontent.com/your-screenshot/mobile.png) | -->

<!-- --- -->

<!-- ## 🔗 Live Demo

🌐 Hosted on Vercel:  
👉 [collabnest-landing.vercel.app](https://collabnest-landing.vercel.app) -->

---

## 🧠 Author

**Arun Kushwaha**  
🎓 NIT Hamirpur | 💻 Full-Stack Developer | 🚀 DevOps Enthusiast  
[🔗 LinkedIn](https://www.linkedin.com/in/arun-kushwaha-394b5a340/) | [🐙 GitHub](https://github.com/Arun-kushwaha007)

---

## 🛡️ License

<!-- This project is licensed under the **MIT License**.   -->
Feel free to use and modify it for your own SaaS ideas 🚀.

---

## 🙌 Contribute

Pull requests are welcome! If you have ideas for improvements, new animations, or better UX — go for it.

```bash
git checkout -b feature/your-cool-feature
git commit -m "Add cool feature"
git push origin feature/your-cool-feature
```

Don’t forget to ⭐ the repo if you liked it!

---

## 🧭 Navigate the Page

- `/` → Hero + Animated 3D Canvas
- `#features` → Feature Highlights
- `#contact` → Get in touch
- **External:** [CollabNest Dashboard](/)
<!-- (https://collabnest-dashboard.vercel.app) -->

---

## 📣 Coming Soon

- 🌟 Testimonials & use cases
- 🔗 Newsletter integration
- 📥 Form submission to backend
- 📈 Analytics

---

_Made with ❤️ using React + Tailwind + Framer Motion + Coffee._