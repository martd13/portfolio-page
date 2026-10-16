# Changelog

Wöchentliche Updates der Portfolio-Seite. Neueste Einträge oben.

## 2026-10-16 – Roadmap KW 43: Fundament

**Was**
- Ordnerstruktur nach CLAUDE.md: `css/`, `js/modules/`, `assets/img/`
- `base.css` mit Design-Tokens (CSS-Variablen), Reset und Typografie
- Semantisches Grundgerüst: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Hero-Section mit Name, Schwerpunkten und Call-to-Action-Buttons
- Platzhalter-Sections für Über mich, Skills, Projekte, Kontakt
- Skip-Link, sichtbare Fokus-Styles, Favicon
- Erstes JS-Modul: aktuelles Jahr im Footer

**Warum**
Ein sauberes Fundament macht alle weiteren Etappen einfacher: Tokens statt fixer Werte, klare Trennung von HTML/CSS/JS, Module statt einer grossen Skriptdatei.

**Konzepte für die Prüfung**
- **CSS Custom Properties (Design-Tokens):** Farben, Abstände und Schriftgrössen werden einmal in `:root` definiert und überall mit `var(--name)` verwendet. Eine Änderung wirkt auf die ganze Seite.
- **Semantisches HTML:** Elemente nach Bedeutung wählen (`<nav>`, `<main>`, `<section>`), nicht nach Aussehen. Hilft Screenreadern und Suchmaschinen. `aria-labelledby` verknüpft eine Section mit ihrer Überschrift.
- **ES Modules:** `main.js` wird mit `type="module"` geladen und importiert Funktionen per `import { ... } from './modules/...'`. Jede Datei hat eine klare Aufgabe.
- **Mobile-first:** Basis-Styles gelten für kleine Screens, `@media (min-width: 768px)` erweitert für grössere.

**Offene TODOs für Dario**
- Text für «Über mich»
- Skill-Liste mit Einschätzung
- Kontaktwege (E-Mail, LinkedIn, GitHub)
- Hero-Satz «Ich automatisiere Abläufe und mache Systeme sicherer.» prüfen
- Freigabe, welche Projekte öffentlich gezeigt werden dürfen
