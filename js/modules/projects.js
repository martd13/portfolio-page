/**
 * Lädt die Projekte aus data/projects.json und rendert sie als Cards.
 * Zeigt dabei einen Loading-, Fehler- und Leer-Zustand an.
 */

const DATA_URL = 'data/projects.json';

/** Holt die Projektdaten. Wirft einen Fehler, wenn die Antwort nicht ok ist. */
async function fetchProjects() {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
}

/** Erstellt ein Element mit Klasse und optionalem Text. */
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

/**
 * Baut eine Liste aus Strings, z. B. für Tags oder Deliverables.
 * role="list" nur bei Listen ohne Aufzählungszeichen (Safari entfernt sonst die Listen-Semantik).
 */
function createList(items, listClass, itemClass, label, unstyled = true) {
    const list = createElement('ul', listClass);
    if (unstyled) list.setAttribute('role', 'list');
    if (label) list.setAttribute('aria-label', label);
    items.forEach((item) => list.append(createElement('li', itemClass, item)));
    return list;
}

/** Baut eine einzelne Projekt-Card. */
function createProjectCard(project) {
    const item = createElement('li', 'project-grid__item');
    if (project.featured) item.classList.add('project-grid__item--featured');

    const card = createElement('article', 'project-card');
    if (project.featured) card.classList.add('project-card--featured');

    const meta = createElement('p', 'project-card__meta', `${project.module} · ${project.type}`);
    const title = createElement('h3', 'project-card__title', project.title);
    const summary = createElement('p', 'project-card__summary', project.summary);
    const deliverables = createList(project.deliverables, 'project-card__list', 'project-card__list-item', 'Ergebnisse', false);
    const tags = createList(project.tags, 'project-card__tags', 'tag', 'Technologien und Themen');

    card.append(meta, title, summary, deliverables, tags);
    item.append(card);
    return item;
}

/** Ersetzt den Inhalt des Containers durch eine Statusmeldung. */
function showStatus(container, message, modifier) {
    const status = createElement('p', 'project-status', message);
    if (modifier) status.classList.add(`project-status--${modifier}`);
    container.replaceChildren(status);
}

/** Rendert alle Projekte und den Satz zur beruflichen Tätigkeit. */
function renderProjects(container, data) {
    const projects = Array.isArray(data.projects) ? data.projects : [];

    if (projects.length === 0) {
        showStatus(container, 'Noch keine Projekte erfasst.');
        return;
    }

    const grid = createElement('ul', 'project-grid');
    grid.setAttribute('role', 'list');
    projects.forEach((project) => grid.append(createProjectCard(project)));

    container.replaceChildren(grid);

    if (data.work && data.work.text) {
        container.append(createElement('p', 'project-work', data.work.text));
    }
}

/** Einstieg: sucht den Container, lädt die Daten und rendert sie. */
export async function initProjects(root = document) {
    const container = root.querySelector('[data-projects]');
    if (!container) return;

    container.setAttribute('aria-busy', 'true');
    showStatus(container, 'Projekte werden geladen …');

    try {
        const data = await fetchProjects();
        renderProjects(container, data);
    } catch (error) {
        console.error('Projekte konnten nicht geladen werden:', error);
        showStatus(container, 'Die Projekte konnten nicht geladen werden. Bitte Seite neu laden.', 'error');
    } finally {
        container.removeAttribute('aria-busy');
    }
}
