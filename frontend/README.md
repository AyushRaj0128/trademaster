# TradeMaster Frontend

This app is the public-facing landing website for TradeMaster. It is built with React and React Router, and it uses Bootstrap classes plus local Font Awesome assets for the UI.

## Available Pages

- `/` home page
- `/signup` signup placeholder
- `/about` about page
- `/product` product showcase
- `/pricing` pricing page
- `/support` support page
- `*` custom not-found page

## Stack

- React 19
- React Router DOM
- Create React App
- Bootstrap 5 via CDN
- Font Awesome assets from `public/font-awesome`

## Run Locally

```powershell
npm install
npm start
```

The app runs on `http://localhost:3000`.

## Build

```powershell
npm run build
```

## Folder Guide

```text
frontend/
|-- public/
|   |-- font-awesome/
|   `-- media/
`-- src/
    |-- landing_page/
    `-- index.js
```

## Notes

- Navigation is handled in `src/index.js`.
- Shared layout components such as the navbar and footer are rendered around the routed pages.
- Several page sections are content-rich UI components and are currently focused on frontend presentation rather than API integration.
- The app builds successfully, but there are accessibility lint warnings that should be cleaned up over time.
