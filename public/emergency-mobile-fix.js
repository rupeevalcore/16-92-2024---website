// Emergency Mobile Overlap Fix - JavaScript
// Forces spacing on mobile regardless of CSS

(function () {
    // Only run on mobile
    if (window.innerWidth > 768) return;

    function fixMobileSpacing() {
        // Find all elements that might be certification badges
        const selectors = [
            '[class*="emerald"]',
            '[class*="certified"]',
            '[class*="certification"]',
            '[class*="instructor"]',
            '[class*="border-green"]',
            '.border-emerald-500\\/20'
        ];

        selectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.marginBottom = '80px';
                    el.style.paddingBottom = '30px';
                    el.style.display = 'block';
                    el.style.clear = 'both';

                    // Add space to next element too
                    if (el.nextElementSibling) {
                        el.nextElementSibling.style.marginTop = '40px';
                        el.nextElementSibling.style.paddingTop = '20px';
                    }
                });
            } catch (e) {
                console.log('Skipping selector:', selector);
            }
        });

        console.log('✅ Emergency mobile spacing applied!');
    }

    // Run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixMobileSpacing);
    } else {
        fixMobileSpacing();
    }

    // Re-run on resize (orientation change)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(fixMobileSpacing, 250);
    });
})();
