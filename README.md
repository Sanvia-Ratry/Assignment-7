# KeenKeeper: Friends Tracker

A web app to keep track of the friends you want to stay in touch with. Log calls, texts and video chats, and see how your connections are doing.

<!-- Live demo: add your Vercel link here after deploying -->

## Features

- **Dashboard** with summary stats: total friends, on track, need attention, and interactions this month
- **Friend cards** with tags and color-coded status (due, almost due, on track)
- **Friend details page** with goal, days since contact, next due date and quick check-in buttons (Call, Text, Video)
- **Timeline** of logged interactions, filterable by type
- **Stats page** with a donut chart of interactions by type
- Toast notifications for each check-in
- Responsive card layouts built with Tailwind CSS

## Tech Stack

- Next.js (App Router)
- React (Hooks, Context API)
- Tailwind CSS
- Recharts
- React Toastify
- React Icons

## Getting Started

```bash
git clone https://github.com/Sanvia-Ratry/KeenKeeper.git
cd KeenKeeper
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```text
src/app/
├── components/   Nav, Footer, Banner, Card, CardGrid, CheckIn
├── context/      AppContext (shared check-in log)
├── friend-details/[id]/   Friend details page
├── timeline/     Timeline page
├── stats/        Stats page
└── utils/        Date formatting helper
public/data.json  Friend data
```

## Notes

- Friend data comes from a local JSON file (`public/data.json`).
- Logged interactions are kept in memory and reset when the page is refreshed.
- The Add Friend, Snooze, Archive, Delete and Edit buttons are UI only for now.

## Roadmap


- [ ] Make the Add Friend, Snooze, Archive and Edit buttons work
- [ ] Make the Timeline and Stats pages fully responsive



![Home](docs/home.png)
![Friend details](docs/details.png)
![Stats](docs/stats.png)
