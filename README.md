# Career0s Project
*Still working on this*
AI-powered job application platform. Track applications, get AI-tailored resumes, generate cover letters, and score job matches — all in one place.

**Live Demo:** https://careeros.vercel.app *(still working on it)*

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Tailwind CSS, Recharts |
| Backend | Node.js, Express, PostgreSQL |
| Auth | JWT (JSON Web Tokens) |
| AI | Claude API (Anthropic) |
| Infra | Docker, GitHub Actions CI/CD |
| Deploy | Vercel (frontend), Railway (backend + DB) |

## Features

- User signup / login with JWT auth
- Add, edit, and delete job applications
- Kanban board — move jobs through stages (Applied → Interview → Offer → Rejected)
- Analytics dashboard — response rates, monthly volume, stage funnel
- AI resume tailor — paste a job description, get a tailored resume
- AI cover letter generator — personalized per job
- AI job match scorer — see how well you match a role

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- Docker (optional)
