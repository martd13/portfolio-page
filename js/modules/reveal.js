/**
 * Blendet Elemente beim Scrollen sanft ein (Scroll-Reveal).
 * Nutzt den IntersectionObserver: Der Browser meldet, sobald ein Element
 * in den sichtbaren Bereich kommt. Das ist viel sparsamer als ein scroll-Event.
 */

// Diese Elemente werden automatisch animiert (statischer Inhalt im HTML)
const REVEAL_SELECTOR = [
    '.section__label',
    '.section__title',
    '.section__intro',
    '.about__text',
    '.fact-card',
    '.hobby__text',
    '.hobby__media',
    '.result-list__item',
    '.skill-grid > li',
    '.contact__lead',
    '.contact-card',
].join(', ');

let observer = null;

/** Prüft, ob die Person reduzierte Bewegung eingestellt hat. */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Wird aufgerufen, wenn sich die Sichtbarkeit beobachteter Elemente ändert. */
function handleIntersect(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // nur einmal animieren
    });
}

/** Meldet ein Element zur Animation an. Auch für dynamisch erzeugte Cards. */
export function observeReveal(element) {
    element.classList.add('reveal');

    // Ohne Observer-Support oder bei reduzierter Bewegung: sofort anzeigen
    if (!observer) {
        element.classList.add('is-visible');
        return;
    }
    observer.observe(element);
}

/** Startet den Observer und meldet alle statischen Elemente an. */
export function initReveal(root = document) {
    if ('IntersectionObserver' in window && !prefersReducedMotion()) {
        observer = new IntersectionObserver(handleIntersect, {
            rootMargin: '0px 0px -10% 0px', // erst einblenden, wenn das Element etwas im Bild ist
            threshold: 0.1,
        });
    }

    // Klasse auf <html>: CSS versteckt .reveal-Elemente nur, wenn JS läuft
    document.documentElement.classList.add('has-reveal');

    root.querySelectorAll(REVEAL_SELECTOR).forEach(observeReveal);
}
