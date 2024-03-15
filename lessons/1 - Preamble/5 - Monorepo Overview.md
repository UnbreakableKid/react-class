# Monorepo Overview

In this project we have a monorepo created with Turbo + Pnpm. The structure allows us to have a contained environment for each of the projects, and also to share code between them.

## Apps

For our apps we have the following structure:

- `apps/` - Contains all the apps
  - `vite/` - The react app created with Vite, to showcase the Client-Side Rendering (CSR) React application
  - `server/` - The server that provides the API for the vite app
  - `next/` - The react app created with Next.js, to showcase the Server-Side Rendering (SSR) React application

## Packages

For our packages we have the following structure:

- `packages/` - Contains all the packages
  - `database/` - This contains the ORM using Drizzle, the database schema and the database seed
  - `typescript-config/` - This contains the shared typescript configuration for all the projects