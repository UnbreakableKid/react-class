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

#### Some gotchas

React's Context API is powerful, but it can lead to unexpected behavior if not used carefully. Here's an example that demonstrates a common pitfall:

```jsx
import React, { useState, useContext } from 'react';

const StatesContext = React.createContext({});
const ActionsContext = React.createContext({});

function Providers({ children }) {
 const [posts, setPosts] = useState(initialPosts);
 const [users, setUsers] = useState(initialUsers);

  return (
    <ActionsContext.Provider value={{ setPosts, setUsers }}>
      <StatesContext.Provider value={{ posts, users }}>
        {children}
      </StatesContext.Provider>
    </ActionsContext.Provider>
  );
}

function UserList() {
  const { users } = useContext(StatesContext);
  const { setUsers } = useContext(ActionsContext);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={() => setUsers(users.concat(newUser))}>Add user</button>
    </ul>
  );
}

function PostList() {
  const { posts } = useContext(StatesContext);
  const { setPosts } = useContext(ActionsContext);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <button onClick={() => setPosts(posts.concat(newPost))}>Add post</button>
    </ul>
  );
}

function App() {
  return (
    <Providers>
      <UserList />
      <PostList />
    </Providers>
  );
}
```
Can you spot the issue? When you update the posts state (e.g., by clicking "Add post"), the entire Providers component re-renders. This causes both the StatesContext.Provider and ActionsContext.Provider to re-render, which in turn causes all components consuming these contexts to re-render – including UserList, even though the users state hasn't changed.

This unnecessary re-rendering can lead to performance issues, especially in larger applications.

#### The "+1 Pattern" Solution

The "+1 pattern" involves separating the state contexts while keeping the actions context intact. This approach prevents unnecessary re-renders of components that only depend on a specific piece of state. Here's how you could refactor the previous example:

```jsx
import React, { useState, useContext } from 'react';

const PostsContext = React.createContext({});
const UsersContext = React.createContext({});
const ActionsContext = React.createContext({});

function Providers({ children }) {
  const [posts, setPosts] = useState(initialPosts);
  const [users, setUsers] = useState(initialUsers);

  return (
    <ActionsContext.Provider value={{ setPosts, setUsers }}>
      <PostsContext.Provider value={posts}>
        <UsersContext.Provider value={users}>
          {children}
        </UsersContext.Provider>
      </PostsContext.Provider>
    </ActionsContext.Provider>
  );
}

function UserList() {
  const users = useContext(UsersContext);
  const { setUsers } = useContext(ActionsContext);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={() => setUsers(users.concat(newUser))}>Add user</button>
    </ul>
  );
}

function PostList() {
  const posts = useContext(PostsContext);
  const { setPosts } = useContext(ActionsContext);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <button onClick={() => setPosts(posts.concat(newPost))}>Add post</button>
    </ul>
  );
}

function App() {
  return (
    <Providers>
      <UserList />
      <PostList />
    </Providers>
  );
}
```

The "+1 pattern" name comes from the fact that we're adding one more context (splitting the state context) to solve the problem of unnecessary re-renders.

Remember, while the Context API is powerful, it's not always the best solution for every state management problem. For more complex state management needs, consider using libraries like Zustand or even redux, or explore other patterns like the React Query library for managing server state.

### Custom hooks

Custom hooks allow you to extract component logic into reusable functions. They're a powerful way to share stateful logic between components without adding more components to your tree.

Let's create a custom hook for form handling that includes state management and basic validation:

```jsx
import { useState, useCallback } from 'react';

function useForm(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log('Form is valid. Submitting...', values);
    }
  }, [values, validate]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}

// Usage in a component:
function LoginForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useForm({ email: '', password: '' }, validate);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```


In this example, we've created a useForm custom hook that:

1. Manages form state (values)

2. Handles form changes (handleChange)

3. Manages form submission (handleSubmit)

4. Handles form validation and error states

5. Tracks submission status (isSubmitting)

The useForm hook is reusable and can be applied to any form in your application. It encapsulates all the common form logic, making your form components cleaner and more focused on rendering.

This custom hook demonstrates how you can combine multiple React hooks (useState, useCallback) to create more powerful, reusable pieces of logic. Custom hooks like this can significantly reduce code duplication and improve the organization of your React applications.