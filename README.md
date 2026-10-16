# Portfolio – Dario Martig

Persönliche Portfolio-Seite, entstanden im Modul **Web Engineering** an der Berner Fachhochschule (BFH).

**Live:** https://martd13.github.io/portfolio-page/

## Technologien

- HTML5 (semantisch, barrierearm)
- CSS3 (Custom Properties, Flexbox, Grid, mobile-first Media Queries)
- JavaScript (ES Modules, ohne Framework)
- Hosting über GitHub Pages

## Struktur

```
index.html          Einstiegsseite
css/base.css        Design-Tokens, Reset, Typografie
css/layout.css      Container, Header, Sections, Footer
css/components.css  Navigation, Buttons, Tags
js/main.js          Einstiegspunkt, lädt die Module
js/modules/         Ein Feature pro Datei
assets/img/         Bilder und Favicon
```

## Lokal starten

```bash
npm i -g http-serve
http-serve
```

Oder in VS Code mit der Erweiterung «Live Server».

## Fortschritt

Siehe [CHANGELOG.md](CHANGELOG.md).
