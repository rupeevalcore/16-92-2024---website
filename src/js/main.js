// Reveal on scroll animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Accordion functionality
function toggleAccordion(panelId, groupId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const isOpening = panel.classList.contains('hidden');

    // Close others in the same group
    if (groupId) {
        const groups = document.querySelectorAll(`[data-accordion-group="${groupId}"]`);
        groups.forEach((group) => {
            const panels = group.querySelectorAll('div[id]');
            panels.forEach((p) => {
                if (p.id !== panelId) p.classList.add('hidden');
            });

            const btns = group.querySelectorAll('button[aria-controls]');
            btns.forEach((b) => {
                if (b.getAttribute('aria-controls') !== panelId) {
                    b.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    panel.classList.toggle('hidden');

    const btn = document.querySelector(`button[aria-controls="${panelId}"]`);
    if (btn) btn.setAttribute('aria-expanded', String(isOpening));
}

// Make functions available globally
window.toggleAccordion = toggleAccordion;

// Update copyright year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

export { toggleAccordion, revealOnScroll };
