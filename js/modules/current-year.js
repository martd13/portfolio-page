/**
 * Setzt das aktuelle Jahr in alle Elemente mit dem Attribut data-current-year.
 * So bleibt das Copyright im Footer automatisch aktuell.
 */
export function setCurrentYear(root = document) {
    const year = new Date().getFullYear();
    root.querySelectorAll('[data-current-year]').forEach((element) => {
        element.textContent = year;
    });
}
