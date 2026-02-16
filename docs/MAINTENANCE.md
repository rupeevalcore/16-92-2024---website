# Maintenance & Troubleshooting Guide

## Regular Maintenance Tasks

### Daily
- [ ] Check website availability.
- [ ] Monitor email and WhatsApp for inquiries.

### Weekly
- [ ] Review Google Analytics for traffic trends.
- [ ] Check for broken links.
- [ ] Backup project files (Git push).

### Monthly
- [ ] content refresh (if needed).
- [ ] Test mobile responsiveness on new devices/browsers.

### Quarterly
- [ ] SEO audit (Meta tags, keywords).
- [ ] Performance check (Load times).

## How to Update Content

### Update Pricing
1.  Open `index.html`.
2.  Search for `₹499`.
3.  Update the value.
4.  Save and deploy.

### Update Contact Info
1.  Open `index.html`.
2.  Update phone numbers and emails in the Footer and Contact sections.
3.  Update meta tags if necessary.

### Add New Workshop
1.  Copy an existing "Curriculum Card" HTML block.
2.  Paste it in the relevant section.
3.  Update title, description, and icon.
4.  Test the layout.

## Troubleshooting

### Website Not Loading
1.  **Local:** Check if `npm run dev` is running.
2.  **Port:** Ensure port 3000 is not blocked.
3.  **Cache:** Hard refresh (Ctrl+Shift+F5).

### Styling Broken
1.  **Syntax:** Check for unclosed HTML tags or malformed CSS.
2.  **Cache:** Clear Vite cache: `rm -rf node_modules/.vite`.
3.  **Restart:** Restart the development server.

### Forms Not Working
1.  **Link:** Verify the Google Form link is active.
2.  **Network:** Check the Network tab in browser DevTools.
3.  **Browser:** Test on a different browser.

## Security Best Practices
- **Credentials:** Keep GitHub tokens and passwords secure.
- **Backups:** Regularly push changes to GitHub.
- **SSH:** Use SSH keys for Git operations.

## Emergency Contacts
- **Developer:** [Insert Developer Name]
- **Repository:** https://github.com/rupeevalcore/16-92-2024---website
