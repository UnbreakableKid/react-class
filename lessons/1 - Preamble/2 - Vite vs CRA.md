 # Lesson 2 - Vite vs CRA

In this lesson, we will compare Vite and Create React App (CRA), and why you should use Vite for your next React project.

## What is Vite?

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It is a build tool that is opinionated and optimized for frontend development. Vite is a French word that means "fast" or "quick".

Vite is a build tool that is powered by esbuild, a JavaScript bundler that is written in Go. esbuild is known for its speed and it is one of the fastest JavaScript bundlers available. Vite leverages esbuild to provide a fast development experience.

### Plugins

Vite has a plugin system that allows you to extend its functionality. You can use plugins to add features to your Vite project. There are many plugins available for Vite that you can use to add features to your project. Some of the plugins available for Vite include:

- Vite plugin for React
- Vite plugin for Vue
- Vite plugin for Preact
- Vite plugin for Svelte
- Angular plugin
- Environment variables plugin
- TanstackRouter plugin

**It also has access to the greatest unit test library [Vitest](https://vitest.dev/) which is a great tool for testing your code. Vitest > Jest**

### Features

Vite has many features that make it a great choice for your next project. Some of the features of Vite include:

- Fast development server
- Hot module replacement
- Optimized build
- TypeScript support
- CSS preprocessors support

## What is Create React App (CRA)?

Create React App (CRA) is a popular tool for creating React applications. It is a great tool for getting started with React, but it is not optimized for modern web development. CRA uses webpack, a JavaScript bundler that is known for its slow build times. CRA is also not optimized for frontend development and it does not provide a fast development experience.


## Comparison

Vite is considerably faster than CRA. Vite leverages esbuild to provide a fast development experience, while CRA uses webpack, a JavaScript bundler that is known for its slow build times. Vite also has a plugin system that allows you to extend its functionality, while CRA does not offer a plugin system, leading to a less flexible development experience.

## Deprecation of CRA

If you go to the official React documentation, you will see that CRA is no longer recommended for creating new React applications. The React team recommends using Vite for new CSR (Client-Side Rendering) React applications.

[https://legacy.reactjs.org/docs/create-a-new-react-app.html](https://legacy.reactjs.org/docs/create-a-new-react-app.html)