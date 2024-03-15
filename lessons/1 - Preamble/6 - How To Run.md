# How To Run The Project

In this project we have a monorepo created with Turbo + Pnpm. The structure allows us to have a contained environment for each of the projects, and also to share code between them.

Because of this, some commands invoke different projects that they are not directly related to. For example, the `run:vite` command runs the vite app, but it also runs the server, because the server is needed for the app to work.

You can find all the commands available in the `package.json` file. The commands are prefixed with `turbo`, this is because we are using Turbo to manage the monorepo, and it will call the commands from the `package.json` of the project that is being invoked.

The dependencies between projects can be found in the `turbo.json` file. This file contains the dependencies between the projects, and it is used by Turbo to know the order in which the projects should be built.

## Commands

To run the project, you have various commands available:

- `run:server` - Runs the api server
- `run:vite` - Runs the vite app in development mode and the server
- `db:seed` - Seeds the database
- `db:push` - Pushes the database schema to the database
