# CLAUDE.md – Portfolio-Page (BFH Web Engineering)

## Projektkontext

- **Repo:** `martd13/portfolio-page`
- **Live:** https://martd13.github.io/portfolio-page/ (GitHub Pages, Deploy from branch `main`, root `/`)
- **Zweck:** Kompetenznachweis (60 % der Modulnote) im Modul *Web Engineering* an der BFH. Die Seite ist meine öffentliche Visitenkarte: wer ich bin, realisierte Projekte, Erfahrung in Technologien.
- **Owner:** Dario Martig – ICT Trainee bei einer Schweizer Anwaltskanzlei, Studium Digital Business & AI (BFH), Hintergrund als Elektroniker. Schwerpunkte: Cybersecurity, Automatisierung (Power Automate, Copilot Studio), digitale Transformation.
- **Aktueller Stand:** Siehe `CHANGELOG.md` (KW 43 «Fundament» am 2026-10-16 umgesetzt).

## Bewertungskriterien (immer im Blick behalten)

| Kriterium | Punkte | Was das für jeden Commit heisst |
|---|---|---|
| Erreichbarkeit | K.-o. | `main` muss jederzeit auf GitHub Pages funktionieren. Nie einen kaputten Stand zum Merge vorschlagen. |
| Responsivität | 15 | Mobile-first. Kein abgeschnittener Inhalt, keine horizontale Scrollleiste bei 360 px, 768 px, 1024 px, 1920 px. |
| Codequalität & Komplexität | 20 | Saubere Trennung HTML/CSS/JS, modular, dynamische Inhalte, API-Calls, Caching, Pagination, Third-Party-Lib (Chart.js oder D3.js). |
| Commit-History | 10 | Regelmässig über die ganze Projektdauer, prägnante Messages, die die Änderung beschreiben. |
| Gestaltung & Funktionalität | 15 | Konsistentes Design, klare visuelle Hierarchie, intuitive Navigation, alle Funktionen funktionieren. |

Frameworks bringen keine Zusatzpunkte → **reines HTML, CSS und JavaScript (Vanilla)**.

## Technische Regeln

### Allgemein
- Kein Build-Step, kein Framework, kein npm-Bundling. Externe Libraries nur via CDN (z. B. jsDelivr) mit fixer Version.
- **Alle Pfade relativ** (`css/style.css`, nicht `/css/style.css`), weil die Seite unter `/portfolio-page/` läuft.
- Dateinamen klein, mit Bindestrich: `project-card.js`, nicht `ProjectCard.js`.

### Struktur
```
/
├── index.html
├── css/
│   ├── base.css         # Reset, CSS-Variablen, Typografie
│   ├── layout.css       # Grid/Flexbox, Header, Footer, Sections
│   ├── components.css   # Buttons, Cards, Formulare, Nav
│   └── responsive.css   # Media Queries (oder pro Datei mobile-first)
├── js/
│   ├── main.js          # Einstiegspunkt, importiert Module
│   └── modules/         # je ein Feature pro Datei (ES Modules)
├── data/
│   └── projects.json    # Projektdaten, per fetch() geladen
├── assets/
│   └── img/
├── CHANGELOG.md
└── README.md
```

### HTML
- Semantisch: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Keine `<div>`-Suppe.
- Genau ein `<h1>`, Überschriften-Hierarchie ohne Sprünge.
- Im `<head>`: `charset`, `viewport`, `title`, `meta description`, Favicon, Stylesheets.
- Alle Bilder mit sinnvollem `alt`. Attribute kleingeschrieben und in Anführungszeichen.
- **Kein Inline-CSS (`style=""`) und keine Inline-Event-Handler (`onclick=""`).**
- Skripte am Ende des `<body>` oder mit `type="module"`.

### CSS
- Design-Tokens als CSS-Variablen in `:root` (Farben, Abstände, Schriftgrössen, Radien).
- `box-sizing: border-box` global.
- Layout mit Grid und Flexbox, keine Tabellen fürs Layout, keine Floats.
- Mobile-first: Basis-Styles für schmale Screens, dann `@media (min-width: 768px)` und `@media (min-width: 1024px)`.
- Sprechende Klassennamen (BEM-ähnlich: `.project-card__title`). IDs nicht fürs Styling.
- `!important` vermeiden.
- Sichtbare Fokus-Styles für Tastaturnavigation.

### JavaScript
- ES Modules (`import`/`export`), `const`/`let`, kein `var`.
- Jedes Feature in eigenem Modul, kleine Funktionen mit klarer Aufgabe.
- Event-Listener per `addEventListener`.
- Bei jedem `fetch()`: Loading-State, Fehler-State (`try/catch`), leerer State.
- `localStorage`-Zugriffe immer in `try/catch` (kann im privaten Modus fehlschlagen).
- Keine Secrets, Tokens oder API-Keys im Code – das Repo ist öffentlich.

## Inhalt & Vertraulichkeit

- Sprache der Seite: **Deutsch**.
- Ton: sachlich, direkt, nicht übertrieben werblich, keine KI-Floskeln.
- **Arbeitgeber-Projekte nur generisch beschreiben:** keine internen Daten, keine Kundennamen, keine Screenshots aus internen Systemen, keine Mitarbeitenden-Namen. Fokus auf Problem → Lösung → Technologie. Im Zweifel nachfragen, bevor etwas veröffentlicht wird.
- Keine erfundenen Projekte, Zahlen oder Skills. Fehlt Inhalt, Platzhalter mit `TODO:` setzen und mich darauf hinweisen.

Mögliche Projekte für `projects.json` (vor Veröffentlichung mit mir abstimmen):
- Automatisiertes Security-Awareness-Reporting (Power Automate, CSV-Verarbeitung)
- Fristen-Sammel-Flow für Outlook (Power Automate)
- Kontaktlisten-Bereinigung für ERP-Import (Power Automate + Office Scripts)
- Copilot-Studio-Agent für Rechtsprechungsrecherche (MCP-Anbindung)
- Visitenkarten-Scanner als Copilot-Studio-Agent
- USB-Drop-Test für Security Awareness
- SkillSwap – Skill-Tausch-Plattform (Vue 3 + Strapi)
- STOA – Musik-Sharing-PWA (Spotify ↔ Apple Music)

## Wöchentlicher Workflow

Jede Woche eine Session. Ablauf:

1. `git checkout main && git pull` und `CHANGELOG.md` lesen → wo stehen wir?
2. Nächsten offenen Punkt aus der **Roadmap** unten nehmen.
3. **Neuen Branch anlegen** (siehe Branching & Freigabe), bevor irgendetwas geändert wird.
4. Umsetzen, in **1–3 kleinen, thematisch sauberen Commits** (nicht alles in einen).
5. Selbst prüfen (siehe Checkliste).
6. `CHANGELOG.md` ergänzen (Datum, was, warum) – ebenfalls auf dem Branch.
7. Branch pushen und Pull Request nach `main` eröffnen (siehe Branching & Freigabe). **Nicht selbst mergen.** Die Seite wird erst live, wenn Dario den PR mergt.
8. Am Ende mir eine kurze Zusammenfassung geben: **was geändert wurde, welches Konzept dahintersteckt** (z. B. «Event Delegation», «Cache mit TTL»), und was ich selbst verstehen sollte. Ich muss den Code an der Prüfung ohne Hilfsmittel erklären können.

### Branching & Freigabe
- **Nie direkt auf `main` committen und nie selbst in `main` mergen.** Dario gibt jede Änderung selbst frei.
- Branch-Name: `<typ>/<kurze-beschreibung>`, z. B. `feat/kw44-about-skills`, `fix/mobile-nav-overflow`.
- Branch frisch von aktuellem `main` abzweigen: `git checkout main && git pull && git checkout -b <branch>`.
- **Ausnahme – vorheriges Update noch nicht gemergt:** Gibt es einen offenen Pull Request eines früheren Updates, den neuen Branch vom neusten offenen Update-Branch abzweigen (gestapelt), damit nichts verloren geht. Im neuen PR erwähnen, auf welchem PR er aufbaut.
- Branch pushen (`git push -u origin <branch>`) und einen **Pull Request nach `main`** eröffnen per `gh api repos/martd13/portfolio-page/pulls -X POST -f base=main -f head=<branch> -f title="..." -f body="..."` (REST-API; `gh pr create` nutzt GraphQL und ist in Claude-Sessions blockiert). Titel = Hauptänderung, Beschreibung: was, warum, Konzepte zum Lernen, Testergebnis, offene TODOs.
- Klappt das nicht: in der Zusammenfassung den Link `https://github.com/martd13/portfolio-page/pull/new/<branch>` angeben.
- Nur einen PR eröffnen, wenn die Checkliste erfüllt ist. Ist etwas kaputt: Branch pushen, aber im PR-Titel `[WIP]` und das Problem beschreiben.
- Dario mergt auf GitHub mit **«Create a merge commit»** (nicht Squash), damit die einzelnen Commits in der History bleiben.

### Commit-Konventionen
- Format: `<typ>: <kurze Beschreibung im Imperativ>` (Englisch), max. ~60 Zeichen.
- Typen: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`, `a11y`, `perf`.
- Beispiele:
  - `feat: load projects dynamically from projects.json`
  - `style: add responsive grid for project cards`
  - `fix: prevent horizontal scroll on mobile nav`
- Keine generischen Messages wie `update`, `changes`, `wip`.
- **Commit-Daten niemals manipulieren** (kein `--date`, kein `GIT_COMMITTER_DATE`, kein Rückdatieren). Die History muss echt sein.

### Checkliste vor jedem Push
- [ ] Seite lokal getestet (`npx http-serve` oder VS Code Live Server)
- [ ] Keine Fehler in der Browser-Konsole
- [ ] Getestet bei 360 px, 768 px, 1024 px, 1920 px – keine horizontale Scrollleiste
- [ ] Kein Inline-CSS, keine Inline-Handler
- [ ] Alle Pfade relativ
- [ ] Tastaturnavigation funktioniert, Fokus sichtbar
- [ ] HTML valide (W3C Validator, wenn möglich)

## Roadmap (eine Etappe pro Woche)

| Woche | Fokus | Inhalt |
|---|---|---|
| KW 43 | Fundament | Ordnerstruktur, semantisches Grundgerüst (Header, Nav, Main, Footer), `base.css` mit Variablen und Reset, Hero-Section, README |
| KW 44 | Layout & Responsive | «Über mich» und Skills-Section, Grid/Flexbox-Layout, mobile-first Media Queries |
| KW 45 | Dynamische Inhalte | `projects.json` anlegen, Projekt-Cards per `fetch()` + DOM-Rendering, Loading-/Error-States |
| KW 46 | Interaktion | Filter nach Tags + Suchfeld, mobile Navigation (Burger-Menü mit `aria-expanded`), Smooth Scroll, aktiver Nav-Link |
| KW 47 | API-Integration | GitHub REST API: öffentliche Repos laden, Cache in `localStorage` mit Ablaufzeit (TTL), Pagination, Rate-Limit-Handling |
| KW 48 | Third-Party & Theme | Skills-Visualisierung mit Chart.js (oder D3.js), Dark-Mode-Toggle mit `prefers-color-scheme` und gespeicherter Wahl |
| KW 49 | Formular & Qualität | Kontaktformular mit Client-Validierung (ohne Backend, z. B. `mailto:`), Accessibility-Pass, Lighthouse-Audit, Fixes |
| KW 50 | Feinschliff | SEO-Meta, Open-Graph-Tags, Favicon, Performance (Bildgrössen, `loading="lazy"`), Cross-Browser-Test, README finalisieren |

Danach: Pflege (Projekte ergänzen, kleine Verbesserungen), weiterhin regelmässige Commits bis zur Abgabe.

Wenn eine Etappe zu gross ist: aufteilen und den Rest in die nächste Woche schieben, statt halbfertig zu pushen.

## Was Claude Code NICHT tun soll

- Kein Framework (React, Vue, Tailwind etc.) einführen.
- Keine grossen Rewrites ohne Rückfrage.
- Nichts pushen, das die Live-Seite kaputt macht.
- Keine Inhalte über mich, meinen Arbeitgeber oder Projekte erfinden.
- Keine Dateien ausserhalb dieses Repos ändern.
