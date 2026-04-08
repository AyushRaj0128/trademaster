# TradeMaster

TradeMaster is a stock trading platform prototype built with React. The project is split into two separate frontend apps:

- `frontend/` for the public-facing landing website
- `dashboard/` for the logged-in trading dashboard experience

The current codebase is UI-first. Most of the trading data shown in the dashboard is mocked locally, and the backend folder is not implemented yet.

## Apps Included

### Frontend

The landing app contains the marketing and support pages for the platform, including:

- Home page
- About page
- Product page
- Pricing page
- Support page
- Signup placeholder
- Custom not-found page

### Dashboard

The dashboard app contains the trading workspace UI, including:

- Watchlist with quick actions
- Portfolio summary
- Holdings view
- Positions view
- Orders screen
- Funds screen
- Apps placeholder
- Buy order modal
- Doughnut and chart-based visual elements

## Tech Stack

- React 19
- React Router
- Create React App
- Material UI
- Chart.js
- Axios
- Bootstrap 5 in the landing app

## Project Structure

```text
trademaster/
|-- frontend/
|   |-- public/
|   `-- src/
|-- dashboard/
|   |-- public/
|   `-- src/
`-- backend/
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### 1. Install dependencies

Open two terminals and install packages for each app:

```powershell
cd frontend
npm install
```

```powershell
cd dashboard
npm install
```

### 2. Start the landing app

```powershell
cd frontend
npm start
```

This runs the landing site on `http://localhost:3000`.

### 3. Start the dashboard app

Because both apps use Create React App, it is best to run the dashboard on a different port:

```powershell
cd dashboard
$env:PORT=3001
npm start
```

This runs the dashboard on `http://localhost:3001`.

## Build for Production

Build each app separately:

```powershell
cd frontend
npm run build
```

```powershell
cd dashboard
npm run build
```

## Current Limitations

- `backend/` is currently empty.
- The dashboard uses local mock data from `dashboard/src/data/data.js`.
- The buy action posts to `http://localhost:3002/newOrder`, so it needs a backend service to persist orders.
- Some screens such as signup and apps are still placeholders.
- The landing app currently builds with accessibility and unused-variable lint warnings.

## Future Improvements

- Add a real backend for orders, holdings, funds, and authentication
- Connect the dashboard to live or persisted market/account data
- Complete the signup and support workflows
- Improve accessibility across the landing pages
- Add tests for routes, UI states, and order flows

## Repository Notes

The `frontend` and `dashboard` folders were developed as separate apps. If you want to publish or deploy them together, treat this project as a multi-app workspace and deploy each app independently.
