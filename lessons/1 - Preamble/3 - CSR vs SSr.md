# Lesson 3 - CSR vs SSR

## What is CSR?

Client-Side Rendering (CSR) is a web application architecture where the client (browser) is responsible for rendering the UI. The server sends the client a blank HTML page and the client uses JavaScript to fetch the data and render the UI. The client makes an API request to the server to fetch the data and then renders the UI using the data.

### Pros of CSR

- Fast initial load time
- Rich user interactions
- Great for single-page applications

### Cons of CSR

- Poor SEO (Search Engine Optimization)
- Slow time to interactive
- Poor performance on low-end devices and slow networks

## What is SSR?

Server-Side Rendering (SSR) is a web application architecture where the server is responsible for rendering the UI. The server sends the client a fully rendered HTML page. The client does not need to fetch the data and render the UI. The server does all the work and sends the client a fully rendered HTML page.

### Pros of SSR

- Great for SEO
- Fast time to interactive
- Good performance on low-end devices and slow networks
- Has direct access to the server and database
- Environment variables are safer

### Cons of SSR

- Slow initial load time
- Poor user interactions
- Server load
- Complexity / Separation of concerns

It is to note that some frameworks like Next.JS allow you to have an hybrid approach, where you can have the best of both worlds. You can have both server and client-side components in the same application.

## React official recommendation

If you go to the official React documentation, you will see that React recommends using Server-Side Rendering (SSR) for your React applications. The React team recommends using frameworks like Next.js or Remix for Server-Side Rendering (SSR) React applications.

### React Server Components

The React team is also working on a new feature called React Server Components. React Server Components are a new way to build server-rendered UIs with React. They are similar to React components, but they run on the server and are rendered to the client. For instance, instead of the client doing a fetch request to the server to get the data, the server can directly access the database and send the data to the client.
