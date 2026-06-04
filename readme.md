# Gridd — Build AI Teams, Not AI Tools.

A futuristic, minimalistic, mobile-responsive React landing page for **Gridd**, a Multi-Agent AI Platform.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.tsx        # Sticky nav with mobile hamburger
    Hero.tsx          # Animated agent network visual
    Problem.tsx       # Problem statement section
    Solution.tsx      # Solution with before/after comparison
    Features.tsx      # 8 feature cards
    HowItWorks.tsx    # 4-step process
    UseCases.tsx      # 6 use case cards
    Dashboard.tsx     # Mock dashboard UI
    Pricing.tsx       # 3 pricing tiers
    CTA.tsx           # Final call-to-action
    Footer.tsx        # Links + copyright
  data/
    index.ts          # All dummy data arrays
  App.tsx
  main.tsx
  index.css
```
