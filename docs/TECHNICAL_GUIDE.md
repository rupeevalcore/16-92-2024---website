# Technical Guide

## Technology Stack
- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
- **Build Tool:** Vite
- **Version Control:** Git, GitHub

## Project Structure
- `index.html`: Main entry point (Single Page Application structure)
- `package.json`: Dependency management and scripts
- `vite.config.js`: Build configuration
- `/docs`: Documentation folder
- `/public`: Static assets (images, icons)

## Design System
- **Colors:** 
  - Background: `#1a1a1a` (Charcoal)
  - Accents: Blue (`#667eea`) / Purple (`#764ba2`) gradients
- **Typography:** Google Fonts (Inter)
- **Framework:** Tailwind CSS for spacing and utility classes

## Key Components

### Hero Section
- **Classes:** `relative isolate flex items-center pb-12 hero-section-mobile`
- **Features:** 3D parallax effects, floating icons, gradient backgrounds
- **Note:** `min-h-screen` was removed to prevent layout gaps on mobile; `items-center` ensures vertical centering.

### Navigation
- **Mobile:** Mobile-first design with 52px touch targets and solid background for readability.
- **Desktop:** Sticky header with blur effect and CTA button.

### Pricing
- **Standard:** ₹499.00 for group sessions.
- **Implementation:** Hardcoded in HTML, check `index.html` for updates.

### Footer
- **Accessibility:** 48px touch targets for links.
- **Content:** Contact info, quick links, social placeholders.

## CSS Architecture
- **Structure:** 
  - Tailwind utilities for 90% of styling.
  - Custom CSS block in `<head>` for specific overrides and animations.
  - Mobile overlap fixes in `public/mobile-fix.css` (if applicable) or inline.

## Development Workflow

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
# Access at http://localhost:3000
```

### Production Build
```bash
npm run build
```

## Testing Checklist
- [ ] Hero section loads without gaps on mobile
- [ ] Mobile menu opens/closes smoothly with solid background
- [ ] Pricing displays correctly as ₹499
- [ ] 3D animations function without lag
- [ ] Contact links (WhatsApp, Email) work
- [ ] Responsive check: 375px (Mobile), 768px (Tablet), 1920px (Desktop)
