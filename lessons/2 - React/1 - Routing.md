# Routing

React doesn't have the concept of "pages" since it's a single-page application (SPA) framework. For this, we need to use a routing library. The most popular one is `react-router-dom`.

## Code based routing

The setup of the routes is done in code, and the library will handle the navigation and rendering of the components.

```jsx
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "playground", element: <PlaygroundPage /> },
      { path: "products", element: <ProductListPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminHomePage /> },
          { path: "products", element: <AdminProductListPage /> },
          { path: "products/new", element: <NewProductPage /> },
          { path: "products/:id/edit", element: <EditProductPage /> },
        ],
      },
    ],
  },
];
 ```

## File based routing

The setup of the routes is done by how they are organized in the file system.

- routes
    - __root.tsx
    - _layout.tsx
    - index.tsx
    - items
        - _layout.tsx
        - index.tsx
        - [id].tsx


## What is react-router-dom?

`react-router-dom` is a routing library for React. It allows you to create routes in your application and navigate between them. It is the most popular routing library for React and it is widely used in the React community. It is now going to be renamed `react-router`.

React Router is testing and soon releasing a new version with file-based routing, with a Vite plugin.

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

[Check the documentation](https://tanstack.com/router/latest/docs/framework/react/comparison) for more information.

## Server-side routing vs client-side routing

### Server-side routing

In a traditional web application, the navigation is done server-side. This means that when you click a link, the page reloads, and the server sends the new page. This is done using the `href` attribute of the `a` tag.

### Client-side routing/navigation

In a single-page application, the navigation is done client-side. This means that when you click a link, the page doesn't reload, and the URL changes. This is done using the `history` API, which allows you to change the URL without reloading the page.


## Outlets and nested routes

In tanstack/router, you can use outlets to define where the child routes will be rendered. This is useful when you have a layout with a sidebar and a main content area, for example.

```tsx
export default function AdminLayout() {
  return (
    <div>
      <h1>Admin</h1>
      <Outlet />
    </div>
  );
}
```

## Links

In tanstack/router, you can use the `Link` component to create links to other routes. This is similar to the `Link` component in `react-router-dom`.

```tsx

<Link to="/">Home</Link>
<Link to="playground">Playground</Link>

```