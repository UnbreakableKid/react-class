# Storybook

Storybook is a tool for developing UI components in isolation. They work with React, Vue, Angular, and more. It is used to build and test components in isolation from the app.
It is also very useful for documenting the components.

## Stories

A story is a single state of one or more UI components. You can have as many stories as you want.

The project contains a `stories` folder with a `*.stories.js` file for each component. This file contains the stories for the component.

## Testing

Storybook is also a great tool for testing components. You can use it to test the components in isolation from the app. It also has integrations with testing tools like Jest and Vitest.

## Running Storybook

To run Storybook, you can use the following command:

```bash
pnpm storybook
```

## NOTE

Usually in monorepos, Storybook is usually placed in its own package, since UI components are shared across different packages. But in this project, it's placed in the vite project for simplicity.