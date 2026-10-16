Führe die nächste Wochen-Etappe gemäss CLAUDE.md aus:

1. `git checkout main && git pull`, dann `CHANGELOG.md` lesen (falls nicht vorhanden: anlegen, wir starten bei KW 43). Prüfen, ob noch ein offener Update-PR existiert (`gh api repos/martd13/portfolio-page/pulls?state=open`).
2. Neuen Branch `<typ>/<kurze-beschreibung>` anlegen – von `main`, oder vom neusten offenen Update-Branch, falls dieser noch nicht gemergt ist. Nie direkt auf `main` committen.
3. Nächsten offenen Punkt aus der Roadmap umsetzen
4. In 1–3 sauberen Commits auf dem Branch committen (Konventionen aus CLAUDE.md)
5. Checkliste abarbeiten, `CHANGELOG.md` ergänzen (Datum, was, warum, Konzepte zum Lernen)
6. Branch pushen und Pull Request nach `main` eröffnen (REST: `gh api repos/martd13/portfolio-page/pulls -X POST ...`). **Nicht selbst mergen** – Dario gibt frei.
7. Zusammenfassen: Branch, Commits, Link zum PR, Konzepte, offene TODOs
