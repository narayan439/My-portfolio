# AI Copilot Instructions for Portfolio

## Project Overview
React portfolio website built with Vite, featuring animated sections, optimized background particles, custom cursor animation, and responsive design. Uses Framer Motion for animations and Lucide React for icons.

**Tech Stack:** React 19, Vite 7, Framer Motion, Lucide React, CSS3 (no Tailwind/styled-components)

**Key Features:**
- Optimized Canvas-based animated particle background (indigo/pink)
- Custom animated mouse cursor
- Scroll-triggered section animations
- **No theme switching** - Fixed indigo/pink color scheme
- Mobile-responsive design with hamburger menu

## Architecture

### Component Structure
```
App.jsx (root)
├── AnimatedBackground.jsx (canvas particle system - indigo/pink colors)
├── MouseCursor.jsx (custom cursor with smooth follow)
├── Layout/
│   ├── Navbar.jsx (indigo/pink gradient navbar, mobile responsive)
│   └── Footer.jsx
├── Sections/ (main content regions)
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── hooks/
    └── useMediaQuery.js (responsive helpers)
```

### Navbar Styling (Indigo/Pink Color Scheme)
The navbar uses a gradient matching the particle background:
- **Desktop:** Full navigation with icon + text, CV button
- **Mobile:** Hamburger menu at 768px breakpoint
- **Colors:** Indigo (#818cf8) + Pink (#f472b6) gradient with 0.8 opacity on scroll
- **Responsive:** Padding and font sizes adjust for mobile (0.75rem vs 1rem)
- **Overlay menu:** Slides in from right with blur backdrop

### Data Flow
- **Static data**: [projects.js](src/components/data/projects.js) contains project definitions exported as `projects` array
- **Props passing**: Sections use internal state for filters (e.g., Projects category filtering); no Redux/Context
- **Responsive**: Custom `useMediaQuery()` hook with breakpoints (768px mobile, 1024px tablet)

## Key Patterns

### Canvas Background Animation (AnimatedBackground.jsx)
- Uses `requestAnimationFrame` for 60fps performance
- Dynamically adjusts particle count based on window size (100 max)
- Draws connections between nearby particles for depth effect
- Cleanup on unmount prevents memory leaks
- **Avoid:** Heavy calculations in draw loop; use delta time throttling

### Custom Mouse Cursor (MouseCursor.jsx)
- Two-element design: outer ring + center dot with different easing
- Uses `transform` for 60fps performance (GPU accelerated)
- Hides on mouse leave, shows on re-entry
- Cursor ring uses `mix-blend-mode: overlay` for visual blending
- **Important:** Sets `document.body.style.cursor = 'none'` in useEffect

### Scroll Performance Optimization (Navbar)
- Throttles scroll events using `requestAnimationFrame` pattern
- Adds `{ passive: true }` to scroll listener for better performance
- Uses `willChange: 'box-shadow'` for hardware acceleration
- Memoizes nav items with `useMemo` to prevent recreations
- Mobile detection via window resize listener (768px breakpoint)
- Indigo/pink gradient background with blur effect
- **No theme switching** - Uses fixed color scheme matching particles

## Development Workflow

**Build Commands:**
- `npm run dev` - Start Vite dev server (HMR enabled)
- `npm run build` - Production build to `dist/`
- `npm run lint` - ESLint check (flat config in [eslint.config.js](eslint.config.js))
- `npm run preview` - Local preview of built output

**ESLint Rules:**
- Ignores: `dist` folder
- React Refresh rules enforced for dev builds
- Custom: Unused variables allowed if uppercase/underscore prefix

## Common Tasks

**Adding a new section:**
1. Create file in [src/components/Sections/](src/components/Sections/)
2. Import in [App.jsx](src/App.jsx) and add to main
3. Add section-level ID for anchor links (e.g., `<section id="about">`)
4. Use Framer Motion variants matching existing pattern

**Updating projects data:**
- Edit [src/components/data/projects.js](src/components/data/projects.js) array
- Include: `id`, `title`, `category`, `description`, `image`, `tags`, `link`, `featured`
- Categories: "UI/UX Design", "Web Design", "Mobile Design", "Product Design", or "all"

**Mobile-first responsive design:**
- Use custom media query hooks or inline `window.innerWidth < 768` checks
- Common breakpoint: 768px (mobile), 1024px (tablet)
- Adjust animation stagger values for mobile: `staggerChildren: isMobile ? 0.1 : 0.2`

## Dependencies Notes
- **framer-motion**: Animation library (v12.23+) - use `motion` components and variants
- **lucide-react**: Icon library - import specific icons as needed (e.g., `import { Menu, X } from 'lucide-react'`)
- **react-intersection-observer**: Available but check if actively used
- No CSS framework; styles are plain CSS in individual files + global.css

## Performance Considerations
- **Background Animation:** Canvas rendering throttled at ~60fps with delta time checks
- **Mouse Cursor:** Uses `transform` + `requestAnimationFrame` for GPU acceleration
- **Scroll Events:** Throttled with `requestAnimationFrame` (not on every frame)
- **Particle Count:** Adaptive—fewer particles on mobile (`Math.floor(width / 20)`)
- **Use `whileInView`:** Trigger animations only when sections enter viewport to save CPU
- **Avoid redraws:** Canvas clears are necessary; connections drawn only for nearby particles (150px radius)
