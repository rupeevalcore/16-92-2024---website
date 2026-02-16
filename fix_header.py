import os

file_path = r'd:\NEW-WORLD-RUPEE\index.html'
start_line = 1649 - 1 # 0-indexed
end_line = 1786 # Exclusive in slice if I want to include 1786? No, typical slice is [start:end].
# I want to remove 1649 to 1786 (inclusive).
# So lines[1648 : 1786]

new_css = """    /* ========================================
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
"""

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Verify existing content (safety check)
print(f"Replacing lines {start_line+1} to {end_line}")
print(f"Start content: {lines[start_line][:50].strip()}")
print(f"End content: {lines[end_line-1][:50].strip()}")

# Slice
# lines[start_line : end_line] are the lines to REMOVE.
# Insert new_css at start_line.
lines[start_line:end_line] = [new_css + "\n"]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully applied Nuclear Fix.")
