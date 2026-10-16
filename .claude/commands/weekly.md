Führe die nächste Wochen-Etappe gemäss CLAUDE.md aus:

1. `git checkout main && git pull`, dann `CHANGELOG.md` lesen (falls nicht vorhanden: anlegen, wir starten bei KW 43)
2. Neuen Branch von `main` anlegen: `<typ>/<kurze-beschreibung>` (z. B. `feat/kw44-about-skills`). Nie direkt auf `main` committen.
3. Nächsten offenen Punkt aus der Roadmap umsetzen
4. In 1–3 sauberen Commits auf dem Branch committen (Konventionen aus CLAUDE.md)
5. Checkliste vor dem Push abarbeiten, `CHANGELOG.md` ergänzen (Datum, was, warum, Konzepte zum Lernen)
6. Branch pushen, dann mit `git merge --no-ff` in `main` mergen (Message `merge: <branch>`) und `main` pushen. Nur mergen, wenn alles funktioniert.
7. Zusammenfassen, was geändert wurde (Branch + Commits) und welches Konzept dahintersteckt
