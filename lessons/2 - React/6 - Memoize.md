# Memoized

## What is memoization?

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

In React, memoization is used to optimize the performance of components by caching the result of the component and returning the cached result when the same props occur again.

## Why use memoization?

When a component is re-rendered, React will compare the new props with the old props to determine if the component needs to be re-rendered. If the props are the same, React will not re-render the component.

However, if the component is expensive to render, it might be worth it to use memoization to cache the result of the component and return the cached result when the same props occur again.

## How to use memoization?

You can use memoization in React by using the `React.memo` higher order component.

```jsx

import React from 'react';

function ExpensiveComponent({ name }) {
  console.log('Rendering ExpensiveComponent');
  return <p>Hello, {name}</p>;
}

const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

function App() {
  const [name, setName] = React.useState('John');

  return (
    <div>
      <MemoizedExpensiveComponent name={name} />
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}

export default App;
```

In this example, `ExpensiveComponent` is wrapped with `React.memo`. This will memoize the result of the component and return the cached result when the same props occur again.
