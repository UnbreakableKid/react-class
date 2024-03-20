This is a monorepo project created with Turbo + Pnpm. The structure allows us to have a contained environment for each of the projects, and also to share code between them.

The repo was created to help fellow teammates to get a refresher, learn and practice new technologies, and also to have a reference for future projects.

Some of the technologies used in this project are:

- Vite
- React
- Tanstack Router + Tanstack Query
- DrizzleORM
- NextJS
- Hono
- Storybook

The lessons are contained in the `lessons` folder.

For now, the project is only a Vite app and an Hono server, but we plan to add a NextJS version to show the differences between the two frameworks.

# First run

To run the project, you need to have NodeJS and Pnpm installed.

After that, you can run the following commands:

```bash
pnpm install
pnpm db:push
```

This will install the dependencies and push the database schema to the server.

After that, you can run the following command to start the project:

```bash
pnpm run:vite // for the Vite app + server
pnpm storybook // for the Storybook
```
