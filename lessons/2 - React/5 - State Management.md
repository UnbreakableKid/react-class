# State Management

There are multiple ways to manage state in React Applications. Let's explore the different types of state and how to manage them effectively.

## Local State

Local state is the state that is only available to the component that owns it. It's used to store data that is only relevant to that component. You can use the `useState` hook to create local state.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```

Use local state when the data is only needed within a single component and doesn't need to be shared with other parts of your application.


## Server State

Server state is the state of the application in the server. For example, the list of users in a social media application, or in our case, the list of dogs in our API.

This state is usually fetched from an API and stored in the client. In the previous lesson, we took a look at Tanstack Query. It's a great library to fetch and cache data from an API and it's an excellent way to manage server state.

Use server state when you need to display or manipulate data that comes from your backend and needs to stay in sync with the server.


## Client State

Client state is the state of the application in the client. For example, the current user, the theme, the language, etc. This state is usually stored in the client and it's not shared with the server.

Sometimes you need to share state between components that are not directly related. For example, you might have a button in the header that changes the theme of the application, and you want to update the theme of the entire application when the button is clicked.

In this case, you can use the built-in Context API or a state management library like Zustand or Jotai.



### Context API

React's Context API is a built-in feature that allows you to share state across multiple components without explicitly passing props through every level of the component tree.

```jsx

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

Use the Context API when you need to share state across multiple components and the state updates are infrequent.

### Jotai vs Zustand

For more complex state management needs, consider using libraries like Jotai or Zustand. I highly recommend both libraries as they offer a wide range of features and flexibility, amazing performance, development experience, and documentation.

Jotai is ideal for atomic state management. For example, if you want to manage the theme of the application, or keep track of some value that is used in multiple components, Jotai is a great choice.

```jsx
import { atom, useAtom } from 'jotai';

const themeAtom = atom('light');

function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

Zustand works more as a state machine with a store. It is ideal for managing complex state that has multiple states and transitions. For example, if you have a counter, you can have an initial value and export the increment and decrement functions.


```jsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

Use Jotai for simple shared state across components, and Zustand for more complex state logic with actions.

[https://jotai.org/](https://jotai.org/)
[https://docs.pmnd.rs/zustand/getting-started/introduction](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Where is Redux?

Redux is one of the most popular state management libraries for React. It's a powerful library, but it's also incredibly complex and has a lot of boilerplate. Dan Abramov, the creator of Redux, has said that you probably don't need Redux in your application.

In most cases, you can use the Context API, Zustand, or Jotai to manage your state. These solutions are simpler and more modern than Redux. However, for very large and complex applications with intricate state management needs, Redux might still be a viable option.

# Choosing the Right State Management Solution

- Use Local State (useState) for component-specific data that doesn't need to be shared.

- Use Server State (e.g., Tanstack Query) for data that needs to be fetched from and stay in sync with the server.

- Use Client State (Context API, Jotai, or Zustand) for data that needs to be shared across multiple components.

Remember, the goal is to keep your state management as simple as possible while meeting the needs of your application. Start with the simplest solution and only add complexity when necessary.