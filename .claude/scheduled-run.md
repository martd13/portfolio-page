# Geplanter Wochenlauf (unbeaufsichtigt)

Wird von der geplanten Aufgabe «Portfolio Wochen-Update (zufällig)» ausgeführt.
Es gibt keine Person, die Rückfragen beantworten kann.

## Schritt 0 – Nächsten Lauf planen (ZUERST, vor allem anderen)

1. Berechne einen zufälligen Zeitpunkt in der **nächsten** ISO-Kalenderwoche
   (Montag–Sonntag), zufälliger Tag, Uhrzeit zufällig zwischen 16:00 und 22:59
   Europe/Zurich. Sommer-/Winterzeit beachten (z. B. Python `zoneinfo`):
   ```python
   import random, datetime as d
   from zoneinfo import ZoneInfo
   z = ZoneInfo("Europe/Zurich"); today = d.datetime.now(z).date()
   next_mon = today - d.timedelta(days=today.weekday()) + d.timedelta(days=7)
   day = next_mon + d.timedelta(days=random.randrange(7))
   t = d.datetime(day.year, day.month, day.day, random.randint(16, 22), random.randint(0, 59), tzinfo=z)
   print(t.astimezone(d.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"))
   ```
2. Erstelle mit dem Scheduling-Tool (create_trigger) eine **einmalige** geplante Aufgabe:
   - Name: `Portfolio Wochen-Update (zufällig)`
   - run_once_at: der berechnete Zeitpunkt (UTC)
   - initiation: human_schedule
   - notifications: push + email
   - Prompt (wörtlich): «Repo martd13/portfolio-page mit Push-Zugriff hinzufügen und klonen. Dann die Datei .claude/scheduled-run.md im Repo lesen und exakt befolgen.»
3. Gibt es bereits eine aktive, noch nicht gefeuerte Aufgabe mit diesem Namen in der nächsten Woche (list_triggers), keine zweite anlegen.

## Schritt 1 – Wochen-Update

1. `CLAUDE.md` lesen – verbindlich.
2. `.claude/commands/weekly.md` ausführen: CHANGELOG.md lesen (fehlt sie: anlegen, Start Roadmap KW 43), eigenen Branch anlegen (bei offenem Update-PR: vom neusten offenen Update-Branch), nächsten offenen Roadmap-Punkt umsetzen, 1–3 saubere Commits auf dem Branch, Pull Request eröffnen.
3. Wurde in dieser ISO-Woche schon ein Wochen-Update gepusht (Branch/PR/CHANGELOG), nichts tun ausser Schritt 0.

## Regeln für den unbeaufsichtigten Lauf

- Keine Inhalte über Dario erfinden. Fehlt Inhalt: sichtbarer Platzhalter `TODO:`.
- Projekte aus dem Arbeitsumfeld erst veröffentlichen, wenn Dario sie in CLAUDE.md oder CHANGELOG.md freigegeben hat.
- Keine grossen Rewrites, nichts pushen, was die Live-Seite kaputt macht. Lieber Etappe aufteilen.
- Commit-Daten nie manipulieren.
- **Nie direkt auf `main` committen und nie mergen.** Branch pushen, Pull Request nach `main` eröffnen per `gh api repos/martd13/portfolio-page/pulls -X POST -f base=main -f head=<branch> -f title="..." -f body="..."` (REST-API; `gh pr create` nutzt GraphQL und ist in Claude-Sessions blockiert); klappt das nicht, Link `https://github.com/martd13/portfolio-page/pull/new/<branch>` melden. Dario mergt selbst.
- Ist etwas kaputt: PR-Titel mit `[WIP]` und Problem beschreiben.

## Abschluss

Kurze Zusammenfassung auf Deutsch: Branch, Link zum Pull Request, Commits, Konzepte für die Prüfung, offene TODOs von Dario, Zeitpunkt des nächsten Laufs.
