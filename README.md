# Full-Stack Product Catalog

A simple full-stack product catalog application built with React, Vite, Chakra UI, Zustand, Express, and MongoDB.

## Project Structure

- `Backend/`
  - Express server with REST API routes for products
  - MongoDB connection and product controller logic
- `Frontend/`
  - React app built with Vite
  - Chakra UI for styling
  - Zustand for client state management
  - React Router for navigation

## Features

- List products
- Create new products
- Update products
- Delete products
- Frontend API proxying for local development

## Setup

1. Clone the repository.
2. Install backend dependencies:
   ```bash
   cd Backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../Frontend
   npm install
   ```

## Environment

Create a `.env` file in `Backend/` with:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

## Run the app

Start the backend server:

```bash
cd Backend
npm run dev
```

Start the frontend app:

```bash
cd Frontend
npm run dev
```

Then open the Vite frontend URL shown in the terminal.

## Notes

- The frontend uses a Vite proxy to forward `/api` requests to the backend.
- If you choose a different backend port, update the `BACKEND_PORT` environment variable for Vite or modify `Frontend/vite.config.js` accordingly.
