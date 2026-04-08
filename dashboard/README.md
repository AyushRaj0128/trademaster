# TradeMaster Dashboard

This app is the trading dashboard for TradeMaster. It focuses on the logged-in experience and includes a watchlist, holdings, positions, funds, orders, and lightweight charting components.

## Features

- Portfolio summary screen
- Market watchlist
- Holdings and positions tables
- Funds overview
- Orders screen
- Apps placeholder screen
- Buy action modal
- Doughnut chart and graph components

## Routes

- `/` summary
- `/orders` orders view
- `/holdings` holdings view
- `/positions` positions view
- `/funds` funds view
- `/apps` apps placeholder

## Stack

- React 19
- React Router DOM
- Material UI
- Chart.js
- Axios
- Create React App

## Run Locally

```powershell
npm install
$env:PORT=3001
npm start
```

This runs the dashboard on `http://localhost:3001`.

## Build

```powershell
npm run build
```

## Data and API Notes

- Most of the displayed account and market data is currently mocked in `src/data/data.js`.
- The buy modal sends a request to `http://localhost:3002/newOrder`.
- No working backend is included in this app, so order placement needs a separate API service to function end-to-end.

## Important Files

```text
dashboard/
`-- src/
    |-- components/
    |   |-- Dashboard.js
    |   |-- WatchList.js
    |   |-- Summary.js
    |   |-- Holdings.js
    |   |-- Positions.js
    |   |-- Funds.js
    |   `-- BuyActionWindow.js
    |-- data/
    |   `-- data.js
    `-- index.js
```

## Current Status

- The dashboard UI builds successfully.
- A few lint warnings still exist, including some unused imports and missing image alt text.
- Some sections are placeholder-level and can be expanded once backend services are ready.
