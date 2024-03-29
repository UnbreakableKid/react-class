# Base

React is a JavaScript **library** for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

React itself, since it's a library, it doesn't come with a lot of features out of the box, like routing, state management, etc. This can be seen as a good thing, since you can choose the best tools for your project, but it can also be seen as a bad thing, since you have to choose the best tools for your project.

It also has no opinion on how you should structure your application, so you can choose the best structure for your project, and it usually differs from project to project.

The more recent pushes from the React team are to make React more like a framework, by teaming up with companies like Vercel to create frameworks like NextJS.

## Virtual DOM

React uses a **virtual DOM** to optimize the performance of the application. The virtual DOM is a lightweight copy of the actual DOM. When the state of the application changes, React will update the virtual DOM and compare it with the actual DOM. It will then only update the parts of the actual DOM that have changed. This makes React very fast and efficient.

## JSX

React uses a syntax called **JSX**. It looks like HTML, but it's not. It's a syntax that gets transformed into JavaScript.

```jsx

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

```

### Helpful JSX Syntax

#### Fragments

```jsx
<>
  <h1>Hello, world!</h1>
  <p>Welcome to my website</p>
</>
```

#### Attributes

```jsx

function App() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>
    </div>
  );
}

```

#### Looping

```jsx
function App() {
  const names = ['John', 'Jane', 'Doe'];

  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
```

#### Conditional Rendering

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
  );
}
```

### TSX

If you're using TypeScript, you'll be using **TSX** instead of JSX. It's the same thing, but with TypeScript.

```tsx
function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```