# Healthcare Platform

A modern, full-stack healthcare coordination platform.

## Tech Stack
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, Sentry, Vercel Analytics
- **Backend:** Node.js, Express, TypeScript, Prisma ORM, Sentry
- **Database:** PostgreSQL (Supabase)
- **AI/ML:** Hugging Face Inference API, Ollama (local dev)
- **Auth & Storage:** Supabase
- **Email:** Resend.com
- **Monitoring:** Vercel Analytics, Sentry

## Project Structure
```
healthcare-platform/
├── frontend/                 # Next.js application
│   ├── app/                 # App router (Next.js 14)
│   ├── components/          # React components
│   ├── lib/                 # Utilities, configurations
│   └── types/               # TypeScript definitions
├── backend/                 # Express API
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── middleware/      # Auth, validation, etc.
│   │   ├── services/        # Business logic
│   │   └── utils/           # Helper functions
│   ├── prisma/              # Database schema
│   └── package.json
└── shared/                  # Shared types and utilities
```

## Setup Instructions

### Prerequisites
- Node.js >= 18
- npm or yarn

### 1. Frontend
```
cd frontend
npm install
npm run dev
```

### 2. Backend
```
cd backend
npm install
npx prisma generate
npm run dev
```

### 3. Environment Variables
- Copy `.env.example` to `.env` in both `frontend/` and `backend/` and fill in required values.

### 4. Database
- Use Supabase for PostgreSQL. Update connection string in backend `.env`.

### 5. Monitoring & Analytics
- Sentry DSN in `.env` for both frontend and backend.
- Vercel Analytics is automatic on Vercel.

---

## License
MIT 