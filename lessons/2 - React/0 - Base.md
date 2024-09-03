# Base

React is a JavaScript **library** for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

As a library, React doesn't come with many built-in features like routing or state management. This flexibility allows developers to choose the best tools for their project, but it also means making more decisions about project structure and additional libraries.

React doesn't enforce a specific application structure, allowing for project-specific organization. Recently, the React team has been collaborating with companies like Vercel to create more opinionated frameworks like NextJS, which provide additional features and structure out of the box.

## Virtual DOM and React Fiber

React uses a **virtual DOM** to optimize application performance. The virtual DOM is a lightweight copy of the actual DOM. When the application's state changes, React updates the virtual DOM and compares it with the actual DOM, only updating the parts that have changed.

With the introduction of React Fiber, the rendering process became more flexible and efficient. Fiber is a complete rewrite of React's core algorithm, enabling features like incremental rendering and better prioritization of updates.

## JSX

React uses a syntax called **JSX**. While it looks similar to HTML, it's actually a syntax extension for JavaScript. JSX gets transformed into JavaScript during the build process.

```jsx

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

```

Key differences between JSX and HTML:

1. Use className instead of class for CSS classes

2. Attributes use camelCase (e.g., onClick instead of onclick)

3. Self-closing tags must have a slash (e.g., <img />)

### Helpful JSX Syntax

#### Fragments

Fragments allow you to group elements without adding extra nodes to the DOM:


```jsx
<>
  <h1>Hello, world!</h1>
  <p>Welcome to my website</p>
</>
```

#### Attributes

JSX allows you to use JavaScript expressions in attributes:


```jsx


function App() {
  const containerClass = "main-container";
  return (
    <div className={containerClass}>
      <h1>Hello, world!</h1>
    </div>
  );
}

```

#### Looping

When rendering lists in JSX, always use a unique key prop to help React efficiently update the DOM:

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

JSX allows for inline conditionals using the ternary operator or logical AND:

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

If you're using TypeScript, you'll be using **TSX** instead of JSX. The syntax remains the same, but with added type checking.

```tsx
function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```

### Components

Components are the building blocks of React applications. They can be either function components or class components, with function components being the modern preferred approach.

Function components are simpler and more flexible, but class components provide additional features like state and lifecycle methods.

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

Class components have a `render` method that returns JSX:

```jsx
import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```


## React Cycle

React components go through several phases in their lifecycle:

1. Render Phase:
  - Component functions are called
  - React elements are created
  - Virtual DOM is updated

2. Commit Phase:
  - DOM is updated based on changes in the virtual DOM
  - useEffect hooks are scheduled

3. Cleanup Phase:
  - Effects from the previous render are cleaned up
  - useEffect cleanup functions are called

## Common Pitfalls

1. Modifying the state directly
2. Using the same key for multiple elements
3. Not understanding that setState is asynchronous
4. Forgetting to add all dependencies to useEffect