# Medisync

Application for health that digitizes, automates and simplifies the organization of managers in the generation of schedules.

## Clone Repository

```bash
git clone https://github.com/bastos-rcd/MEDISYNC.git
cd MEDISYNC
```

## Landing Page

> [medisync-landing.vercel.app](https://medisync-landing.vercel.app/)

```bash
cd landing-page
npm install
npm run dev
```

## Development

### DB

```bash
docker compose up -d medisync-db
```

### API

```bash
cd api
npm install
npm run dev
```

### APP

```bash
cd app
npm install
npm run dev
```

## Production

> [medisync-landing.vercel.app](https://medisync-landing.vercel.app/)

```bash
docker compose up -d
```
