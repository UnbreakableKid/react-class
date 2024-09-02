# Useful React Hooks for Beginners

React Hooks are special functions that allow you to use state and other React features in functional components. This lesson covers some important hooks beyond useState and useEffect.

## 1. useRef - Creating Persistent References

useRef allows you to create a mutable reference that persists across re-renders. It's commonly used to access DOM elements directly.

### Example: Focusing an Input

```jsx
import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

```
In this example, useRef creates a reference to the input element, allowing us to focus it when the component mounts.

## 2. useReducer - Managing Complex State

useReducer is an alternative to useState for managing more complex state logic. It's especially useful when the next state depends on the previous one.

```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
```

Here, useReducer manages the counter state, making it easier to handle multiple related state transitions.

## 3. useCallback - Optimizing Performance with Memoized Callbacks

useCallback returns a memoized version of a callback function. This is useful for optimizing performance in child components that depend on callback equality to prevent unnecessary re-renders.

```jsx
import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
}

// React.memo is used to optimize the child component
const ChildComponent = React.memo(function ChildComponent({ onClick }) {
  console.log("Child component rendered");
  return <button onClick={onClick}>Click me</button>;
});
```
In this example, useCallback ensures that handleClick only changes when count changes, potentially reducing unnecessary re-renders of ChildComponent.

### Bonus: useCallback vs useReducer

Sometimes when you need to manage more complex state logic, instead of using useState and useCallback, you can use useReducer. This is because with useCallback, it's a wrapper where React will watch for changes in the dependencies and only re-render the component when the dependencies change, while in reducer the functions are "static".

```jsx
import React, { useReducer } from 'react';

//useState + useCallback
function Itmes() {
  const [items, setItems] = useState(initialItems);
  const addItem = useCallback(() => {
    setItems([...items, newItem]);
    setNewItem('');
  }, [items, newItem]);

  const removeItem = useCallback((id) => {
    setItems(items.filter((item) => item.id !== id));
  }, [items]);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

//useReducer
function reducer(state, action) {
  function remove(state, id) {
    return state.filter((item) => item.id !== id);
  }
  function add(state, name) {
    return [...state, { id: state.length + 1, name }];
  }

  switch (action.type) {
    case 'add':
      return add(state, action.name);
    case 'remove':
      return remove(state, action.id);
    default:
      throw new Error('Unknown action');
  }
}


function Items() {
  const [state, dispatch] = useReducer(reducer, initialItems);

  return (
    <div>
      {state.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <button onClick={() => dispatch({ type: 'remove', id: item.id })}>Remove</button>
        </div>
      ))}
      <input type="text" value={newItem} onChange={(e) => dispatch({ type: 'add', name: e.target.value })} />
      <button onClick={() => dispatch({ type: 'add', name: newItem })}>Add</button>
    </div>
  );
}
```

## 4. useMemo - Memoizing Expensive Computations

useMemo is used to memoize the result of expensive computations. It recalculates the value only when one of its dependencies changes.

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ list }) {
  const [filter, setFilter] = useState('');

  const filteredList = useMemo(() => {
    console.log("Filtering list...");
    return list.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
  }, [list, filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter list"
      />
      <ul>
        {filteredList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
```
Here, useMemo ensures that the expensive filtering operation only runs when list or filter changes, not on every render.

# Important Note on Optimization

While these hooks can improve performance, it's crucial to understand that premature optimization can lead to unnecessary complexity. Always measure performance before optimizing, and only use these hooks when you have identified a specific performance issue.

Remember, React is generally fast out of the box, and these optimizations are only necessary for specific scenarios involving frequent re-renders or expensive computations.

## Quick Optimization Tips
 - If you can soolve it by shaping the hierarchyo or state, do it first.
 - Be sure to give keys to your map function to prevent unnecessary re-renders
 - Memoize is good **only** if the cost pays for itself.
 - Look at using the Suspense API to defer loading of expensive components.

Go watch Steve Kinney on Frontend Masters for a great workshop on optimization and performance in React.