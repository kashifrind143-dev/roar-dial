# ROAR Mini App — Advanced UI (Frontend + Mock API)

A Telegram-style **mini app UI** for ROAR mining with **advanced animations** and **mock backend**.

## What’s included
- Next.js (App Router) + Tailwind + Framer Motion
- Animated **dial**, **multi-layer orbits**, floating particles, hue/pulse glow
- **Semi‑transparent "Claim ROAR"** button with ripple
- Bottom nav with **center Mining** button (Profile • Leaderboard • Mining • Challenges • Wallet)
- Profile chip shows **username, avatar, total points**
- **Mock API routes**:
  - `GET /api/user` → username, profilePic, totalPoints
  - `GET /api/leaderboard` → sample data
  - `POST /api/claim` → mock claim `{ success: true, reward: 10 }`

> Note: 4‑hour cooldown is maintained on the client via `localStorage` for demo. Replace with server logic later.

## Run locally
```bash
npm i
npm run dev
```

## Deploy on Vercel
1. Push the repo to GitHub.
2. Import into Vercel, framework = Next.js.
3. Deploy with defaults.

## Customize
- Replace `/public/avatar.png`.
- Update mock API data under `/app/api/*` or wire to your database/service.
- UI is in `app/page.jsx` (animations, colors, layout).
