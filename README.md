# Telegram Automation Platform

Production-oriented foundation for a scalable Telegram automation system.

## Stack
- Next.js + TypeScript
- Supabase
- Telegram Bot API
- Vercel
- GitHub

## Security
Never commit `.env.local`, Telegram bot tokens, Supabase service-role keys, or other secrets.

## Local development
1. Install Node.js LTS.
2. Copy `.env.example` to `.env.local`.
3. Fill Supabase values.
4. Run `npm install`.
5. Run `npm run dev`.
6. Check `/api/health`.

## Architecture direction
Telegram webhooks enter server-side API routes. Supabase stores application state. Bot credentials for a multi-bot system will be encrypted and stored server-side rather than hard-coded into environment variables. Background work will be designed separately from request/response webhook handling.

## Build order
1. Foundation
2. Supabase schema and authentication
3. Telegram bot registration and webhook handling
4. Automation engine
5. Scheduling and reliable jobs
6. Dashboard, observability and analytics
