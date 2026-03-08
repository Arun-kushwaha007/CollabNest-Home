# Frontend Performance Audit Report

Date: 2026-03-08
Project: `CollabNest-Home`

## 1) Build Baseline (Measured)

- Production build command: `npm run build`
- Output:
  - `dist/assets/index-B0uC9-Vn.js`: **1,459.49 kB** (gzip **429.81 kB**)
  - `dist/assets/index-da5Aq41b.css`: 66.48 kB (gzip 11.43 kB)
  - `dist/assets/avatar-BhvvuqNk.png`: **1,173.34 kB**
  - `dist/assets/arun1-BBtz47e5.png`: 260.19 kB
- Vite warning: large chunk over 500 kB (code-splitting needed)

## 2) Highest-Impact Performance Problems

### Critical-1: Very large initial JS bundle (slow first load/parse/execute)

- Evidence:
  - Single JS bundle is ~1.46 MB minified.
  - Heavy animation/rendering libraries are imported in the initial route path (`gsap`, `ScrollSmoother`, `@react-three/fiber`, `three`, `ogl`, `framer-motion` usage across core sections).
- Key files:
  - `src/App.jsx` (imports and route composition)
  - `src/sections/Hero.jsx` (always renders `Beams` + `TextPressure`)
  - `src/sections/Contact.jsx` (always renders `Threads`)
  - `src/animations/Beams.jsx`, `src/animations/Threads.jsx`, `src/animations/TextPressue.jsx`
- Impact:
  - Slow Time to Interactive, high CPU on low-end/mobile devices, scroll/input lag soon after load.

### Critical-2: Continuous GPU/CPU animation loops running every frame

- Evidence:
  - `Beams` canvas uses `frameloop="always"` (`src/animations/Beams.jsx:66`).
  - `Threads` runs perpetual `requestAnimationFrame` render loop (`src/animations/Threads.jsx:191-207`).
  - `TextPressure` runs perpetual `requestAnimationFrame`, repeatedly reading layout and mutating style per character (`src/animations/TextPressue.jsx:104-145`).
- Impact:
  - Continuous main-thread + GPU pressure, causing scroll stutter and dropped frames even when user is not interacting.

### Critical-3: Layout thrashing in text animation

- Evidence:
  - For each frame, for each character span:
    - `getBoundingClientRect()` is called (`src/animations/TextPressue.jsx:117`),
    - inline style is mutated (`src/animations/TextPressue.jsx:135-136`).
  - This mixes layout reads and writes inside RAF loop.
- Impact:
  - Forced reflows and expensive style recalculation; severe scroll jank on complex pages.

### Critical-4: Scroll pipeline conflict (GSAP smooth scroll + native smooth behavior + JS scroll logic)

- Evidence:
  - `ScrollSmoother.create(...)` applied on home route (`src/App.jsx:60-64`).
  - Global `html { scroll-behavior: smooth; }` (`src/index.css`).
  - Multiple features rely on `scrollIntoView({ behavior: "smooth" })` and anchor jumping.
  - Navbar also performs scroll work on every scroll event (`src/components/Navbar.jsx:21-41`).
- Impact:
  - Competing scroll systems and extra per-scroll work cause unstable/flickery scroll and degraded smoothness.

## 3) High-Severity Functional/Performance Bugs

### High-1: Duplicate `id="features"` breaks section targeting and active-link logic

- Evidence:
  - `src/sections/Features.jsx:52`
  - `src/components/FeatureGrid.jsx:77`
- Impact:
  - `document.querySelector('#features')` resolves only first match; navigation highlight and scroll targeting become inconsistent.

### High-2: Scroll handler does repeated DOM queries every scroll tick

- Evidence:
  - `document.querySelector(...)` called repeatedly inside `handleScroll` and inside `setActiveSection` lookup (`src/components/Navbar.jsx:25-33`).
  - Scroll listener is unthrottled (`src/components/Navbar.jsx:39`).
- Impact:
  - Unnecessary main-thread work on scroll, causing jank.

### High-3: Full page reloads for internal navigation

- Evidence:
  - `window.location.href` used in Navbar and Footer (`src/components/Navbar.jsx:56`, `src/sections/Footer.jsx:24`).
- Impact:
  - Route changes perform hard reload, re-download/re-execute app, losing SPA performance benefits.

### High-4: Large unused image is still bundled

- Evidence:
  - Unused import `avatarImage` (`src/sections/AboutMe.jsx:19`), but emitted asset is 1.17 MB.
- Impact:
  - Significant unnecessary payload, slower initial network/download.

### High-5: Invalid utility value in inline style (`backgroundSize`)

- Evidence:
  - `backgroundSize: '40px 40px sm:60px 60px'` (`src/sections/Features.jsx:63`).
- Impact:
  - Invalid CSS value; browser fallback + inconsistent rendering.

## 4) Medium Issues (Still Meaningful)

### Medium-1: Duplicate theme ownership logic

- Evidence:
  - Theme management exists in `useDarkMode` (`src/hooks/useDarkMode.js`) and again in `Features` local state/effect (`src/sections/Features.jsx:30-48`).
- Impact:
  - Extra rerenders and state divergence risk; maintenance complexity.

### Medium-2: Many inline `onMouseEnter/onMouseLeave` style mutations

- Evidence:
  - Widespread direct style writes across Navbar, Hero, FeatureGrid, Footer, AboutMe.
- Impact:
  - Extra style recalculation overhead and occasional event-target inconsistencies (when target is child element).

### Medium-3: `style jsx` block in plain React component

- Evidence:
  - `src/components/FeatureGrid.jsx:308`
- Impact:
  - `jsx` prop is non-standard in this setup; can produce warnings and unclear styling behavior.

### Medium-4: `touchmove` listener marked `passive: false` without preventing default

- Evidence:
  - `src/animations/TextPressue.jsx:57`
- Impact:
  - Can interfere with browser scroll optimizations on touch devices.

## 5) Tooling/Quality Issues That Increase Regression Risk

- `npm run lint` currently fails with multiple errors (unused vars, missing rule config, etc.), reducing confidence and making performance regressions easier to introduce.

## 6) Prioritized Remediation Plan

1. Split routes and defer heavy sections:
   - Lazy-load `About` route.
   - Lazy-load/conditionally mount `Beams`, `Threads`, and `TextPressure` (only when visible; disable for reduced motion / small screens).
2. Remove continuous RAF where possible:
   - Pause effects when section is offscreen (`IntersectionObserver`) and when tab is hidden (`visibilitychange`).
3. Replace `TextPressure` per-frame layout reads:
   - Cache character positions; update only on resize/initialization.
   - Avoid per-character `getBoundingClientRect()` each frame.
4. Simplify scroll model:
   - Keep one scroll system (prefer native unless GSAP is essential).
   - If GSAP remains, remove conflicting smooth behaviors and optimize Navbar scroll tracking.
5. Fix navigation/DOM correctness:
   - Make IDs unique (separate `features` and `feature-grid`).
   - Replace `window.location.href` with router navigation.
6. Remove payload waste:
   - Delete unused `avatar.png` import or compress/resize and lazy-load non-critical images.
7. Clean lint baseline so performance fixes stay stable.

## 7) Expected Result After Fixes

- Substantially smaller initial JS payload.
- Lower main-thread work on idle and during scroll.
- Smoother scroll and animation responsiveness.
- Faster first paint and faster interaction readiness, especially on mobile devices.
