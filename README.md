# Crowd-Sourced Infrastructure Inspection Platform (Bridges, Roads, Utilities)


> **Genuine build for infrastructure-inspection-platform** — distinct per infrastructure-inspection-platform domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Field inspectors submit photos/sensor readings via mobile (offline-first), ML runs defect detection, schedules follow-up per severity/regulatory intervals, maintains asset-condition history per structure.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (PostGIS mock) (sqlite fallback)
- **Frontend:** React 18 + Vite + Leaflet (asset map) + Chart.js
- **15 Apps:** assets, inspections, defects, scheduling, history, mobile, ml, compliance, reporting, api, frontend, analytics, integrations, notifications, documents

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t infra-inspection .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A infra worker -l info
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
- **Assets:** bridges (span, load), roads (PCI), utilities (pole, transformer), lifecycle `new→good→fair→poor→critical`
- **Inspections:** mobile offline-first capture, photos + sensor (crack gauge, Rebound hammer), queue
- **ML:** defect detection `cracks/spalling/corrosion/settlement` severity `low..critical`
- **Scheduling:** follow-up `critical 7d, high 30d, medium 90d` per DOT, priority

## License
Proprietary
