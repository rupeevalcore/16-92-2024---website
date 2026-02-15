# Project Overview
- **Website**: Rupeevalcore Financial Education Platform
- **Purpose**: Educational workshops on personal finance and stock markets
- **Target audience**: Beginners with no prior knowledge
- **Primary device**: Mobile-first (60%+ traffic)
- **Compliance**: SEBI-compliant educational content (not investment advisory)

# Features Summary

## For Business Users:
- **Hero section** with workshop overview
- **Workshop curriculum** (6 modules with dropdowns)
- **Learning levels** (Beginner, Intermediate, Advanced)
- **Pricing tiers** (Group ₹499, One-to-One custom)
- **About section** with NISM Series-XII certification
- **Why Trust section** (4 credibility points)
- **Founder & Team profiles** (3 members)
- **Testimonials carousel**
- **FAQ section**
- **Premium animated chatbot** (RupeeBot)
- **Comprehensive legal disclaimer**
- **Contact form** and footer

## For Developers:
- **Tailwind CSS** framework
- **Vanilla JavaScript** (no heavy libraries)
- **Iconify** for icons
- **Google Sheets backend** via Apps Script
- **Intersection Observer** for animations
- **GPU-accelerated CSS animations**
- **Mobile-first responsive design**
- **Vanilla-tilt.js** for 3D effects

# Technical Stack
- **HTML5** (semantic structure)
- **CSS**: Tailwind CSS v3.x (CDN) + custom inline styles
- **JavaScript**: Vanilla JS
- **Icons**: Iconify
- **3D Effects**: Vanilla-tilt.js (desktop only)
- **Backend**: Google Apps Script
- **Database**: Google Sheets
- **Hosting**: Vercel
- **Domain**: www.rupeevalcore.in
- **Performance**: Lazy loading, deferred scripts, Intersection Observer

# Version History

- **Version 1 - Workshop Curriculum Hidden Topics**
  - Date: February 2026
  - Changes: Curriculum subtopics hidden by default, "View Topics" dropdown, improved mobile UX

- **Version 2 - NISM Certification Badge**
  - Date: February 2026
  - Changes: Added NISM Series-XII certification card, SEBI-compliant wording

- **Version 3 - Premium Animations & 3D Effects**
  - Date: February 2026
  - Changes: Floating gradient blobs, 3D card hover, vanilla-tilt, counter animations

- **Version 4 - Chatbot Google Sheets Fix**
  - Date: February 2026
  - Changes: Fixed CORS error, updated Apps Script URL

- **Version 5 - Comprehensive Disclaimer**
  - Date: February 2026
  - Changes: Added detailed legal disclaimer with toggle

- **Version 6 - Manikandan NISM Certification**
  - Date: February 2026
  - Changes: Added NISM certification to team profile

- **Version 7 - Premium Chatbot Dark Theme**
  - Date: February 2026
  - Changes: Rebuilt chatbot with dark theme, premium animations

- **Version 8 - Final Production**
  - Date: February 16, 2026
  - Changes: Apps Script URL updated, Google Sheets integration working, complete documentation

# File Structure
```
/
├── index.html (all-in-one: HTML + CSS + JavaScript)
├── logo.jpg (Rupeevalcore logo)
├── PROJECT_DOCUMENTATION.md (this file)
└── README.md (GitHub readme)
```

# How to Update Content (Business Users - Non-Technical)

## Update Pricing:
- Search for: "Starting from" or "₹499"
- Change the numbers
- Save file

## Update Curriculum Topics:
- Search for: `id="curriculum"`
- Edit the bullet list items under each card
- Save file

## Update Team Members:
- Search for: "Founder & Team"
- Edit names, roles, descriptions
- Save file

## Update Testimonials:
- Search for: "Top Review Picks"
- Add/remove testimonial cards
- Keep same structure

## Update Contact Details:
- Search for: "contactrupeevalcoregmail.com" or "8248589694"
- Replace with new contact info
- Save file

# Developer Guide

## Update Chatbot Apps Script URL:
```javascript
// Find in chatbot section:
const SCRIPTURL = "https://script.google.com/macros/s/YOUR_ID/exec";
// Replace after redeploying Apps Script
```

## Modify Animations:
- Find `@keyframes` CSS rules
- Adjust timing in `.reveal`, `.float` classes
- Change easing functions

## Add New Sections:
- Follow existing section structure
- Use Tailwind utility classes
- Add `.reveal` class for scroll animations
- Test mobile-first (360px width)

## Customize Colors:
- Primary gradient: `#667eea` to `#764ba2`
- Background: `#0a1f3d`
- Update consistently

# Troubleshooting Guide

## Chatbot not saving to Google Sheets:
- Check Apps Script deployment (Execute as: Me, Access: Anyone)
- Verify `SCRIPTURL` matches deployed URL
- Check browser console for CORS errors
- Ensure Sheet has headers: Timestamp, Name, Email, Phone, Course

## Animations laggy on mobile:
- Disable vanilla-tilt on touch devices
- Reduce animation duration
- Remove blur effects on mobile

## Horizontal scroll on mobile:
- Check for fixed-width elements
- Use `max-w-full`
- Test on real device

## Dropdowns not working:
- Check console for JavaScript errors
- Verify `toggleAccordion` function exists
- Ensure click handlers attached

# Performance Notes

## Current optimizations:
- Lazy loading images
- Deferred JavaScript
- GPU-accelerated animations
- Intersection Observer API
- Mobile-first design

## Lighthouse targets:
- Performance: 90+ (mobile), 95+ (desktop)
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

# Future Recommendations

## Short-term (1-3 months):
- Google Analytics
- WhatsApp CTA button
- Blog section for SEO
- Downloadable PDF syllabus

## Medium-term (3-6 months):
- Payment gateway (Razorpay)
- Workshop calendar
- Email automation
- Multi-language support

## Long-term (6-12 months):
- Progressive Web App
- Live streaming
- Community forum
- Certificate issuance
