# Changelog

Wöchentliche Updates der Portfolio-Seite. Neueste Einträge oben.

## 2026-10-22 – Roadmap KW 44: Layout & Responsive

**Was**
- «Über mich»-Section: Einleitungstext (nur bekannte Fakten) und Kurzprofil-Card mit Definitionsliste (`<dl>`)
- Skills-Section: Skill-Gruppen als Cards in einem Grid (1 Spalte mobil, 2 ab 768 px, 4 ab 1280 px)
- Sichtbare `TODO:`-Platzhalter (`.placeholder-note`) für Inhalte, die von Dario kommen müssen
- Tags brechen nicht mehr mitten im Begriff um (`white-space: nowrap`)

**Warum**
Die beiden Sections waren nur Platzhalter. Jetzt steht das responsive Layout; der persönliche Text und die Skill-Einschätzung können später eingesetzt werden, ohne das Layout anzufassen.

**Getestet**
Playwright/Chromium bei 320, 360, 768, 1024, 1280 und 1920 px: keine horizontale Scrollleiste, genau ein `<h1>`, kein Inline-CSS, keine JS-Fehler.

**Konzepte für die Prüfung**
- **CSS Grid mit `minmax(0, 1fr)`:** Spalten teilen den Platz gleichmässig. Das `0` als Minimum verhindert, dass langer Inhalt eine Spalte breiter drückt und so horizontal scrollt.
- **Mobile-first Breakpoints:** Basis = 1 Spalte. `@media (min-width: …)` *fügt* Spalten hinzu, statt sie für Mobile wieder wegzunehmen. Der Breakpoint richtet sich nach dem Inhalt (4 Spalten erst ab 1280 px, weil die Tags sonst zu eng wären), nicht nach Gerätenamen.
- **Grid für 2D, Flexbox für 1D:** Grid ordnet die Cards in Zeilen *und* Spalten; Flexbox (`flex-wrap`) reiht die Tags in einer Zeile auf und bricht um.
- **Gleich hohe Cards:** Das `<li>` ist ein Flex-Container, die Card darin hat `flex: 1` und füllt die Höhe der Grid-Zeile.
- **Semantik:** `<dl>/<dt>/<dd>` für Begriff-Wert-Paare (Kurzprofil), `<aside>` für ergänzende Infos, Skill-Gruppen als `<article>` mit `<h3>` (Hierarchie h1 → h2 → h3 ohne Sprung).

**Offene TODOs für Dario**
- Persönlicher Text «Über mich» (Werdegang, Motivation)
- Skill-Liste prüfen/ergänzen und pro Skill eine Einschätzung (wird in KW 48 mit Chart.js visualisiert)
- Kontaktwege (E-Mail, LinkedIn, GitHub)
- Freigabe, welche Projekte öffentlich gezeigt werden dürfen (nötig für KW 45)

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
