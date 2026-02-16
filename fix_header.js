const fs = require('fs');

const filePath = 'd:/NEW-WORLD-RUPEE/index.html';
// Lines are 1-based in my notes, but array is 0-based.
// Remove lines 1649 to 1786 (inclusive).
// 0-based index: 1648 to 1785.
const startLine = 1648; // Line 1649
const endLine = 1786;   // Line 1786 (exclusive in slice? No, I want to remove it too).
// slice(start, end) removes up to end-1.
// So I want to remove up to index 1786 (line 1787).
// Let's be precise.
// I want to replace lines[1648] through lines[1785].
// So splice(1648, 1786 - 1648).

const newCss = `    /* ========================================
       MOBILE HEADER - NUCLEAR FIX
       ======================================== */

    @media (max-width: 768px) {
      
      /* Force header to exact specifications */
      header,
      nav,
      .header,
      .navbar,
      .mobile-header-fix {
        display: grid !important;
        grid-template-columns: 1fr auto !important;
        align-items: center !important;
        gap: 16px !important;
        padding: 14px 20px !important;
        height: 64px !important;
        background: rgba(10, 31, 61, 0.95) !important;
        backdrop-filter: blur(12px) !important;
        position: sticky !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 1000 !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      
      /* FORCE remove any conflicting styles */
      header *,
      nav *,
      .mobile-header-fix * {
        position: relative !important;
        top: auto !important;
        bottom: auto !important;
        left: auto !important;
        right: auto !important;
        transform: none !important;
        margin: 0 !important;
        float: none !important;
      }
      
      /* Left container: Logo + Brand Text */
      header > a:first-child,
      nav > a:first-child,
      .mobile-header-fix > a:first-child {
        display: grid !important;
        grid-template-columns: 40px 1fr !important;
        grid-template-rows: auto auto !important;
        gap: 0 12px !important;
        align-items: center !important;
        text-decoration: none !important;
        height: 40px !important;
      }
      
      /* Logo image - EXACT positioning */
      header > a:first-child > img,
      nav > a:first-child > img,
      .mobile-header-fix > a:first-child > div:first-child img {
        grid-row: 1 / 3 !important;
        grid-column: 1 !important;
        width: 40px !important;
        height: 40px !important;
        border-radius: 8px !important;
        object-fit: contain !important;
        align-self: center !important;
      }
      
      /* Brand name container */
      header > a:first-child > div,
      nav > a:first-child > div,
      .mobile-header-fix > a:first-child > div.brand-text {
        grid-column: 2 !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        gap: 2px !important;
        align-self: center !important;
        line-height: 1 !important;
      }
      
      /* "Rupeevalcore" text */
      .brand-name {
        font-size: 16px !important;
        font-weight: 600 !important;
        color: #ffffff !important;
        line-height: 1.2 !important;
        white-space: nowrap !important;
      }
      
      /* "Finance Education" text */
      .brand-tagline {
        font-size: 11px !important;
        font-weight: 400 !important;
        color: rgba(226, 232, 240, 0.7) !important;
        line-height: 1 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        white-space: nowrap !important;
      }
      
      /* Hamburger button - EXACT positioning */
      header > button,
      nav > button,
      .mobile-header-fix > button,
      .hamburger,
      .menu-toggle {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 44px !important;
        height: 44px !important;
        padding: 0 !important;
        background: transparent !important;
        border: none !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        align-self: center !important;
        justify-self: end !important;
      }
      
      /* Hamburger icon */
      .hamburger svg,
      .menu-toggle svg {
        width: 24px !important;
        height: 24px !important;
        color: #ffffff !important;
      }
      
      /* Hover state */
      .hamburger:hover,
      .menu-toggle:hover {
        background: rgba(255, 255, 255, 0.1) !important;
      }
    }
`;

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\\n');

    console.log(`Total lines: ${lines.length}`);
    console.log(`Replacing lines ${startLine + 1} to ${endLine}`);
    console.log(`Start content: ${lines[startLine].trim().substring(0, 50)}`);
    console.log(`End content: ${lines[endLine - 1].trim().substring(0, 50)}`);

    // Splice replacement
    // splice(start, deleteCount, items...)
    // deleteCount = endLine - startLine (1786 - 1648 = 138 lines)
    lines.splice(startLine, endLine - startLine, newCss);

    const newContent = lines.join('\\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Successfully applied Nuclear Fix.");

} catch (err) {
    console.error("Error:", err);
    process.exit(1);
}
