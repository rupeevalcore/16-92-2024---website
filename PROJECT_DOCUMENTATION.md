# Rupeevalcore Project Documentation

## 1. Project Overview
**Rupeevalcore** is a premium finance education platform based in Chennai, offering both online and offline workshops. The project aims to make financial literacy accessible to everyone—from students to working professionals—through structured, beginner-friendly modules. The website serves as a landing page for curriculum details, learning formats, trust building (reviews/about), and registration via Google Forms.

---

## 2. Features Summary
- **Interactive Workshop Curriculum**: 6+ modules with "View Topics" dropdowns for deep-dives into topics like Stock Market Basics, Taxation, and Insurance.
- **Dynamic 3D Hero Section**: Interactive dashboard card using `vanilla-tilt.js` for a premium desktop experience.
- **Premium Chatbot**: Integrated with Google Sheets to collect user inquiries and leads automatically.
- **Counter Animations**: Numbers like pricing and statistics animate gracefully when scrolled into view using the Intersection Observer API.
- **NISM-XII Certification**: Prominent badging and trainer certification details (Manikandan C) to establish trust and SEBI-aligned educational standards.
- **Comprehensive Legal Disclaimer**: A toggle-based disclaimer system ensuring regulatory transparency while keeping the UI clean.
- **Fully Responsive Design**: Optimized for everything from small mobile devices (360px) to large desktop monitors.

---

## 3. Technical Stack
- **Frontend**: HTML5, Vanilla JavaScript.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN-based for quick iteration).
- **Icons**: [Iconify](https://iconify.design/) (Solar Linear library).
- **Animations**: CSS Keyframes + [Vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) for 3D effects.
- **Backend Integration**: [Google Apps Script](https://developers.google.com/apps-script) (for Chatbot form to Google Sheets).
- **Development Tools**: [Vite](https://vitejs.dev/) for local serving and HMR.

---

## 4. Version History

| Version | Date | Key Changes |
| :--- | :--- | :--- |
| **V1** | Jan 15, 2026 | Initial landing page launch with Hero, About, Curriculum, and Contact. |
| **V2** | Jan 22, 2026 | Added "View Topics" dropdowns to the Curriculum section. |
| **V3** | Jan 29, 2026 | Added NISM Series-XII certification card in the About section. |
| **V4** | Feb 05, 2025 | Integrated Premium Chatbot with Google Sheets lead generation. |
| **V5** | Feb 10, 2026 | Added `vanilla-tilt.js` 3D hover effects to the Hero dashboard. |
| **V6** | Feb 14, 2026 | Mobile UI optimizations, logo alignment fix, and "PREMIUM" badge overlap resolution. |
| **V7** | Feb 15, 2026 | Added comprehensive Disclaimer with toggle; implemented smooth Counter Animations using Intersection Observer. |

---

## 5. File Structure
```text
NEW-WORLD-RUPEE/
├── index.html          # Main application file (HTML, CSS, JS)
├── logo.jpg            # Official project logo
├── package.json        # Project metadata and dependencies (Vite)
└── PROJECT_DOCUMENTATION.md # This documentation file
```

---

## 6. How to Update Content (Business Guide)
### Updating Workshop Prices
1. Open `index.html`.
2. Search for the `animate-counter` tag inside the Pricing section.
3. Update both the `data-target` attribute AND the inner text (e.g., `<span class="animate-counter" data-target="999">999</span>`).

### Updating Registration Links
1. Search for `docs.google.com/forms`.
2. Replace the URL in the `href` attribute of the "Register" and "Book Session" buttons.

### Changing Module Topics
1. Navigate to the `<!-- WORKSHOP CURRICULUM -->` section.
2. Edit the `<li>` items inside the `<ul>` tags of the respective module.

---

## 7. Developer Guide
- **Architecture**: The project follows a single-file architecture for portability. All critical CSS/JS is inline or loaded via CDN.
- **Styling**: Uses Tailwind utility classes. For custom glassmorphism, refer to `.glass-panel` and `.gradient-border` classes in the `<style>` block.
- **Animations**:
    - **Reveal on Scroll**: Controlled by the `reveal` class and `revealOnScroll` function.
    - **Counter**: Triggered via `IntersectionObserver` on elements with the `animate-counter` class.
- **Chatbot Logic**: The `chatState` object manages the conversation flow. Submissions are sent via `fetch()` to a Google Apps Script Web App URL.

---

## 8. Troubleshooting Guide
- **Chatbot Not Submitting**: Check if the `scriptURL` in the JavaScript section is still valid and reachable.
- **3D Effect Not Working**: Ensure the browser is on desktop (width > 768px). Vanilla-tilt is disabled on mobile for performance.
- **Dropdowns Not Opening**: Verify that `toggleAccordion` is called with the correct ID and that IDs are unique across the page.
- **Counters Not Starting**: Ensure JavaScript is enabled and the element is scrolled at least 50% into view.

---

## 9. Performance Notes
- **Resource Hints**: The project uses `preconnect` for Google Fonts and CDNs.
- **Image Optimization**: The logo and assets use `loading="lazy"` where applicable to conserve bandwidth.
- **Script Handling**: Scripts are placed at the bottom of the `<body>` or use `defer` to prevent render-blocking.

---

## 10. Future Recommendations
1. **Asset Separation**: Move inline CSS and JS to external files (`style.css`, `script.js`) for better caching and maintainability.
2. **SEO**: Add Open Graph (OG) tags and a structured data schema for "EducationalOrganization".
3. **Analytics**: Integrate Google Analytics or Plausible to track conversion rates on registration buttons.
4. **Self-Hosted Fonts**: Host fonts locally to reduce external dependencies and improve load times.
