# Changelog

Wöchentliche Updates der Portfolio-Seite. Neueste Einträge oben.

## 2026-11-27 – Illustrationen und Animationen

**Was**
- Eigene SVG-Illustrationen in den Farben der Seite: Hero (Laptop mit Ablauf, Schild, Zahnräder), Leichtathletik (fliegender Speer) und je ein Bild pro Projekt
- Die SVGs haben eigene, dezente Animationen (Tropfen, drehende Pfeile, Speerflug entlang einer Bahn)
- Projekt-Cards mit Bild oben, Hover-Effekt (Card hebt sich, Bild zoomt leicht)
- Hero: Text blendet gestaffelt ein, Illustration «poppt» herein, winkende Hand, wachsender Unterstrich
- Neues Modul `js/modules/reveal.js`: Sections und Cards blenden beim Scrollen ein
- Neue Datei `css/animations.css` für alle Animationen
- Foto-Platzhalter bei den Hobbys durch die Speerwurf-Illustration ersetzt (ein echtes Foto kann ihn später ersetzen)

**Warum**
Die Seite soll lebendiger und persönlicher wirken (Kriterium 5: Gestaltung & Funktionalität). Eigene Illustrationen sind rechtlich sauber und passen zum Design.

**Getestet**
Playwright/Chromium bei 320, 360, 768, 1024, 1440, 1920 px: keine horizontale Scrollleiste, alle Bilder geladen, alle Reveal-Elemente werden sichtbar, kein Inline-CSS, keine JS-Fehler. Mit `prefers-reduced-motion: reduce` ist alles sofort sichtbar und unbewegt.

**Konzepte für die Prüfung**
- **IntersectionObserver:** Der Browser meldet, wenn ein Element ins Bild kommt. Sparsamer als ein `scroll`-Event, das bei jedem Pixel feuert
- **`@keyframes` + `animation-delay`:** gestaffelte Einstiegs-Animation ohne JavaScript
- **`transition` vs. `animation`:** Transition reagiert auf eine Zustandsänderung (Hover, Klasse), Animation läuft selbständig
- **`prefers-reduced-motion`:** Barrierefreiheit für Menschen, denen Bewegung Probleme macht
- **Progressive Enhancement:** Elemente werden nur versteckt, wenn JS läuft (`.has-reveal`), ohne JS bleibt alles sichtbar
- **`offset-path`:** Der Speer fliegt im SVG entlang einer Bézier-Kurve
- **`loading="lazy"` + `width`/`height`:** Bilder laden erst bei Bedarf, und das Layout springt nicht

## 2026-11-27 – Projekte dynamisch aus JSON (KW 45)

**Was**
- Neue Datei `data/projects.json` mit sechs Studienprojekten: PlantBuddy, SkillSwap (WSEG), IT-Support-Prozess (WPRO), Fallstudie Uber (EGIT), Me and My Planet, diese Seite
- Neues Modul `js/modules/projects.js`: lädt die JSON-Datei per `fetch()` und baut daraus die Projekt-Cards
- Loading-, Fehler- und Leer-Zustand sowie ein `<noscript>`-Hinweis
- Highlight-Projekte (`featured`) sind ab 1024 px doppelt so breit
- Berufliches nur als ein Satz unter den Projekten, ohne Projektdetails (Entscheid Dario)

**Warum**
Die Inhalte stecken in Daten statt im HTML. Ein neues Projekt braucht nur einen Eintrag in der JSON-Datei. Damit ist der erste dynamische Inhalt für Kriterium 3 umgesetzt.

**Getestet**
Playwright/Chromium bei 320, 360, 768, 1024, 1920 px: 6 Cards gerendert, keine horizontale Scrollleiste, ein `<h1>`, kein Inline-CSS, keine JS-Fehler.

**Konzepte für die Prüfung**
- **`fetch()` + `async/await`:** `response.ok` prüfen, weil `fetch` bei HTTP 404 keinen Fehler wirft
- **`try/catch/finally`:** Fehler abfangen und dem Nutzer anzeigen, `aria-busy` im `finally` immer entfernen
- **DOM-Rendering mit `createElement` + `textContent`:** sicherer als `innerHTML`, weil kein HTML aus Daten interpretiert wird (Schutz vor XSS)
- **`grid-column: span 2` + `grid-auto-flow: dense`:** breite Cards, Lücken werden automatisch aufgefüllt
- **`role="list"`:** nur bei Listen ohne Aufzählungszeichen, weil Safari sonst die Listen-Semantik entfernt

**Offene TODOs für Dario**
- Tag-Filter und Suche folgen in KW 46

## 2026-11-16 – Kontakt-Section mit LinkedIn

**Was**
- Kontakt-Section ersetzt den Platzhalter: kurze Einleitung und eine Kontakt-Card für LinkedIn
- LinkedIn-URL ist noch ein sichtbarer `TODO:`-Platzhalter
- Bewusst nicht drin (Entscheid Dario, öffentliche Seite): GitHub, E-Mail, Lebenslauf

**Warum**
Die Seite soll auch für Bewerbungen taugen, ohne zu viel Persönliches öffentlich zu machen. LinkedIn ist der einzige Kontaktweg.

**Getestet**
Playwright/Chromium bei 320, 360, 768, 1024, 1920 px: keine horizontale Scrollleiste, ein `<h1>`, kein Inline-CSS, keine JS-Fehler. Tag-Struktur geprüft.

**Konzepte für die Prüfung**
- **`max-width` statt Grid:** Für eine einzelne Card braucht es kein Grid. `max-width` verhindert, dass sie auf breiten Screens über die ganze Breite gezogen wird.
- **Datensparsamkeit:** Auf einer öffentlichen Seite nur veröffentlichen, was nötig ist. Adresse, Telefon, E-Mail und CV gehen gezielt an Firmen, nicht ins Netz.

**Offene TODOs für Dario**
- LinkedIn-URL

## 2026-11-16 – Hobbys: Leichtathletik

**Was**
- Neue Section «Hobbys» (zwischen «Über mich» und «Skills»), Nav-Link ergänzt, Section-Nummern angepasst
- Leichtathletik bei der LV Thun: kurzer Text, Disziplinen als Tags, vier «Highlights» mit Rang (ohne Zeiten/Weiten) und Link auf den Originalbericht (LV Thun, Plattform J)
- Weitere Hobbys: Klavier und Sport allgemein
- Nach Rückmeldung von Dario abgespeckt: nur Ränge, keine konkreten Leistungen, weniger Einträge (öffentliche Seite)
- Foto-Platzhalter statt Bild: Die Fotos in den Vereinsberichten gehören den Fotografen (z. B. «Bilder Fritz Berger») und dürfen nicht ohne Freigabe ins öffentliche Repo
- Hintergrundwechsel der Sections (`section--alt`) neu verteilt

**Warum**
Die Seite soll persönlicher wirken. Alle Resultate stammen aus öffentlich verlinkten Berichten, nichts ist erfunden.

**Getestet**
Playwright/Chromium bei 320, 360, 768, 1024, 1920 px: keine horizontale Scrollleiste, genau ein `<h1>`, kein Inline-CSS, keine JS-Fehler.

**Konzepte für die Prüfung**
- **Geordnete Liste `<ol>`:** Die Resultate haben eine Reihenfolge (chronologisch), deshalb `<ol>` statt `<ul>`.
- **`<figure>`/`<figcaption>`:** Bild und Bildlegende gehören semantisch zusammen.
- **Externe Links mit `target="_blank" rel="noopener"`:** `noopener` verhindert, dass die geöffnete Seite über `window.opener` auf meine Seite zugreifen kann.
- **Grid-Spalten pro Listeneintrag:** Mobil stapeln sich Jahr, Text und Link; ab 768 px ein Grid `4rem | 1fr | auto`.

**Offene TODOs für Dario**
- Eigenes Foto liefern (oder schriftliche Freigabe des Fotografen)

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
