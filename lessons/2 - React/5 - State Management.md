# State Management

There are multiple ways to manage state in React Applications. You have:

## Local state

Local state is the state that is only available to the component that owns it. It is used to store data that is only relevant to that component. You can use the `useState` hook to create local state.

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

## Server state

Server state is the state of the application in the server. For example, the list of users in a social media application, or in our case, the list of dogs in our API.

This state is usually fetched from an API and stored in the client. In the previous lesson we took a look at Tanstack Query. It's a great library to fetch and cache data from an API and it's a great way to manage server state.

## Client state

Client state is the state of the application in the client. For example, the current user, the theme, the language, etc. This state is usually stored in the client and it's not shared with the server.

Sometimes you need to share state between components that are not directly related. For example, you might have a button in the header that changes the theme of the application, and you want to update the theme of the entire application when the button is clicked.

In this case, you can use a state management library like Zustand or Jotai.

[https://jotai.org/](https://jotai.org/)
[https://docs.pmnd.rs/zustand/getting-started/introduction](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Jotai vs Zustand

Jotai is ideal for atomic state management. For example, if you want to manage the theme of the application, or keep track of some value that is used in multiple components, Jotai is a great choice.

Zustand works more as a state machine with a store. It is ideal for managing complex state that has multiple states and transitions. For example, if you have a counter, you can have a initial value and export the `increment` and `decrement` functions.

### Where is Redux?

Redux is one of the most popular state management libraries for React. It's a great library, but it's also incredibly complex and has a lot of boilerplate. Dan Abramov, the creator of Redux, has said that you probably don't need Redux in your application.

In most cases, you can use the Context API or Zustand to manage your state. These libraries are simpler and more modern than Redux.
