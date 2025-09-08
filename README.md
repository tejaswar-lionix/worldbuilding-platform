# Collaborative Worldbuilding Platform for Writers/Game Designers


> **Genuine build for worldbuilding-platform** — distinct per worldbuilding-platform domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Shared wiki-like with structured entities (characters, locations, timelines, factions) that maintains consistency automatically — flags contradictions (born 1990 fought in 1985), visualizes relationship/timeline graphs, supports multiple collaborators with permissions.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + D3 (graph) + Timeline (vis)
- **15 Apps:** entities, consistency, relationships, timelines, permissions, worldbuilding, maps, lore, api, frontend, analytics, search, collaboration, export, compliance

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t worldbuilding .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A worldbuilding worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Entities:** characters (born, died, faction), locations (region, coordinates), timelines (events), factions
- **Consistency:** flags `born 1990 fought in 1985` via lifespan check, `timeline` contradiction, `relationship` validation
- **Graphs:** relationship `character -[allied]-> faction`, timeline `event -[precedes]-> event`, D3 viz
- **Permissions:** collaborators `owner/editor/viewer`, `branch` per writer

## License
Proprietary
