# Routing

React doesn't have the concept of "pages" since it's a single-page application (SPA) framework. For this, we need to use a routing library. The most popular one is `react-router-dom`.

## What is react-router-dom?

`react-router-dom` is a routing library for React. It allows you to create routes in your application and navigate between them. It is the most popular routing library for React and it is widely used in the React community.

### Features

`react-router-dom` has many features that make it a great choice for your next project. Some of the features of `react-router-dom` include:

- Declarative routing
- Nested routes
- Route parameters
- Route guards
- History management
...

### Cons of react-router-dom

It's notoriously known from doing breaking changes in major versions. It's also a bit complex to use, especially for beginners. Not only that, but it doesn't verify the routes at compile time, so you can have a typo in your route and you won't know until you run the application.

So in this project we are using `tanstack/router` as it's a simpler and more modern alternative to `react-router-dom`.

## What is tanstack/router?

The main difference is that tansctack/router allows you to do file-based routing, which is a great way to organize your routes.

Inside the `routes` folder, you can create a file for each route, and the file name will be the route path. This is a great way to organize your routes and it's a great way to keep your routes in sync with your code.

There are a few convetions like adding an _ to make a route not accessible (useful for layout routes), or adding .lazy to make a route lazy loaded. There is also the __root file, which is the root of your application.

Utilizing the power of Vite through their plugins, this automatically generates the routes for you, so you don't have to worry about it.

## Server-side routing vs client-side routing

### Server-side routing

In a traditional web application, the navigation is done server-side. This means that when you click a link, the page reloads, and the server sends the new page. This is done using the `href` attribute of the `a` tag.
 
### Client-side routing/navigation

In a single-page application, the navigation is done client-side. This means that when you click a link, the page doesn't reload, and the URL changes. This is done using the `history` API, which allows you to change the URL without reloading the page.

# Exercise

Open the `routes` folder and take a look at the files. You can see that the file name is the route path, and the default export is the component that will be rendered when the route is accessed. Open the __root file and let's try to understand how it works and add a navbar to the application.