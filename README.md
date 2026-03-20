# Bryan Kian Sarmen | Software Engineering Portfolio

A high-performance, accessible, and conversion-focused professional portfolio built with React and Vite. Designed to showcase enterprise architecture experience and resilient backend expertise through a striking, modern frontend interface.

## Technology Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Styled Components (CSS-in-JS) with a custom CSS variable design token system
- **Animations:** Framer Motion for scroll-linked reveals, staging, and micro-interactions
- **Icons:** Lucide React & React Icons
- **Forms:** Client-side form submissions via Web3Forms API
- **Tooling:** Vite Compression (Brotli/Gzip), Terser Production Minification

## Key Features
- **Performance Architecture:** Implemented aggressive route-level code splitting (`React.lazy`), structural component caching (`React.memo`), and rigorous Rollup chunking for fast load times.
- **Accessibility by Design (a11y):** Full WCAG 2.1 AA compliance utilizing semantic HTML landmarks, `aria-live` regions for form feedback, and universal keyboard focus visibility rules.
- **Mobile-First Responsiveness:** Fluid layout seamlessly adapting from large enterprise monitors down to mobile devices, featuring a custom framer-animated hamburger menu overlay.
- **"Refined Dark Craft":** A custom UI aesthetic built to communicate engineering rigor, reliability, and precision to technical recruiters and enterprise clients.

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add a Free Access Key from [Web3Forms](https://web3forms.com/) to enable the Contact Section:
   ```env
   # .env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Production Build
To generate a highly optimized bundle ready for Vercel, Netlify, or AWS static hosting:
```bash
npm run build
```
This command leverages Vite and Rollup to produce highly compressed artifact chunks optimized for strict initial-load performance budgets.
