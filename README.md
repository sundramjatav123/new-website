# AlphaWeb Studio - Full Stack Agency Platform

Production-ready monorepo with:

- **Frontend:** Next.js (JavaScript/JSX) + Tailwind CSS + Framer Motion
- **Backend:** Node.js + Express + MongoDB
- **Admin Dashboard:** Manage blogs, FAQs, services, and projects with secure JWT auth
- **Theme System:** Light/Dark mode toggle persisted to localStorage

## Setup

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
cp backend/.env.example backend/.env
npm run seed --prefix backend
npm run dev
```

Frontend runs at `http://localhost:3000` and backend at `http://localhost:5000`.
