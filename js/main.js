/**
 * Einstiegspunkt der Seite.
 * Lädt die einzelnen Feature-Module und initialisiert sie.
 */
import { setCurrentYear } from './modules/current-year.js';
import { initReveal } from './modules/reveal.js';
import { initProjects } from './modules/projects.js';

setCurrentYear();
initReveal(); // vor initProjects, damit die Cards den Observer nutzen können
initProjects();
