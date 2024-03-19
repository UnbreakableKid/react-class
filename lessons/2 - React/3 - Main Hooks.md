# Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

## Why Hooks?

Before hooks, we had to use classes to use state and lifecycle methods. This made it hard to reuse stateful logic between components. With hooks, we can use state and other React features without writing a class.

## What are hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They do not work inside classes.

### useState

`useState` is a hook that lets you add state to your function components. It returns an array with two elements: the current state and a function that lets you update it.

```jsx
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useEffect

`useEffect` is a hook that lets you perform side effects in function components. It runs after every render. They have a dependency array that lets you control when the effect runs.

When the dependency array is empty, the effect runs only once after the first render. If you want to run the effect only when a specific value changes, you can add it to the dependency array.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useContext

`useContext` is a hook that lets you access the value of a context. It accepts a context object and returns the current context value for that context.

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function Example() {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}
```

#### Context with provider

You can also use `useContext` with a provider that has state. In this example, the `ThemedButton` component uses the `ThemeContext` to access the current theme. The `Toolbar` component uses the `ThemeContext.Provider` to change the theme.

```jsx
import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Toolbar />
      <Example/>
    </ThemeContext.Provider>
  );
}

function Example() {
  const {theme} = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function Toolbar() {
  const {setTheme} = useContext(ThemeContext);
  return (
    <div>
      <ThemedButton setTheme={setTheme} />
    </div>
  );
}

function ThemedButton({setTheme}) {
  return <button onClick={() => setTheme('dark')}>Dark</button>;
}
```


#### Context hell

Context hell refers to where your React tree is filled with many levels of context providers. This can make your code hard to read and maintain. It's a good idea to use context sparingly and only when it's necessary, or use a state management library.

[https://miro.medium.com/v2/resize:fit:1268/1*SPJu1m36baRyzrw4G7D0Kw.png](https://miro.medium.com/v2/resize:fit:1268/1*SPJu1m36baRyzrw4G7D0Kw.png)

### Custom hooks

You can also create your own hooks to reuse stateful logic between components.

```jsx
import { useState, useEffect } from 'react';

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}

function Example() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
