# Other Important Hooks

## useReducer

`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. `useReducer` also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

```jsx

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

In this example, `dispatch` is passed down to the buttons, so they can update the state.

# The following hooks are used for performance optimization. They are not used as often as the other hooks, but they are still important to know.


## useCallback

`useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. When rendering a component, a function is created every time the component renders. In this example, every time the user toggles the theme, a new `handleSubmit` function is created.

```jsx
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...

    return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // ...
});
```

In this example, `useCallback` is used to memoize the `handleSubmit` function. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.


### Difference with `useMemo`

`useCallback` is similar to `useMemo`, but instead of returning a memoized value, it returns a memoized callback. The difference is that `useMemo` will only recompute the memoized value when one of the dependencies has changed, while `useCallback` will only return a new callback if one of the dependencies has changed.

### Why not use useEffect?

You might be wondering why not use `useEffect` to achieve the same result. The difference is that `useEffect` will run the effect after every render, while `useCallback` will only return a memoized callback if one of the dependencies has changed.

## useMemo

`useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

```jsx

import React, { useMemo } from 'react';

function Parent() {
  const [largeDataSet, setLargeDataSet] = useState([]);
  useEffect(() => {
    // fetch large data set
    setLargeDataSet(largeDataSet);
  }, []);

  const sortedDataSet = useMemo(() => {
    return largeDataSet.sort();
  }, [largeDataSet]);

  return <Child sortedDataSet={sortedDataSet} />;

}

function Child({ sortedDataSet }) {
  return <p>{sortedDataSet}</p>;
}
```

## useRef

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

```jsx

import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
