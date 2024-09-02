# Base

React is a JavaScript **library** for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

React itself, since it's a library, it doesn't come with a lot of features out of the box, like routing, state management, etc. This can be seen as a good thing, since you can choose the best tools for your project, but it can also be seen as a bad thing, since you have to choose the best tools for your project.

It also has no opinion on how you should structure your application, so you can choose the best structure for your project, and it usually differs from project to project.

The more recent pushes from the React team are to make React more like a framework, by teaming up with companies like Vercel to create frameworks like NextJS.

## Virtual DOM

React uses a **virtual DOM** to optimize the performance of the application. The virtual DOM is a lightweight copy of the actual DOM. When the state of the application changes, React will update the virtual DOM and compare it with the actual DOM. It will then only update the parts of the actual DOM that have changed. This makes React very fast and efficient.

This was mostly true in the past, but with the introduction of React Fiber, the virtual DOM is not the only thing that React uses to optimize the performance of the application.

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
## Rerendering

React components will **rerender** when the state or props change. React will rerender every child component of the component that changed. This is why it's important to keep the state at the top of the component tree, and to use the `useMemo` and `useCallback` hooks to prevent unnecessary rerenders.

When the component receives children as props (i.e use them between the tags, the slots), they are not rerendered.

```jsx

function Grandchild({name}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function Parent({name}) {
  return (
    <div>
      <Grandchild name={name} />
    </div>
  );
}

function Grandfather() {
  const [name, setName] = useState('John');
  return (
    <div>
      <Parent name={name} />
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}

// same example but with slots

function Grandchild({name}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function Parent({children}) {
  return (
    <div>
      {children}
    </div>
  );
}

function Grandfather() {
  const [name, setName] = useState('John');
  return (
    <div>
      <Parent>
        <Grandchild name={name} />
      </Parent>
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}


## React Cycle

React has a lifecycle that goes through the following phases:
- Render phase (mounting, updating (useState, useReducer, useCallback, etc.))
- Commit phase (DOM updates, useEffect, useLayoutEffect, etc.)
- Cleanup phase (clean up effects, etc.)