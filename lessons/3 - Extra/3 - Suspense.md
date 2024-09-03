# React Suspense

React Suspense is a feature that allows you to manage loading states in your application. It lets you "suspend" rendering of a component while data is being loaded, and show a fallback UI (like a loading spinner) in the meantime.

## Why Suspense?

Before Suspense, handling loading states often involved conditional rendering in each component, leading to complex code and potential UI jumps. Suspense provides a more declarative way to handle these scenarios, allowing you to create smoother loading experiences.

## Basic Usage

Suspense is used by wrapping components that might need to wait for something (like data fetching) in a `<Suspense>` component.

```jsx
import React, { Suspense } from 'react';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SomeComponentThatMightTakeLongToLoad />
      </Suspense>
    </div>
  );
}
```

In this example, while SomeComponentThatMightTakeLongToLoad is loading, React will render the fallback UI (<div>Loading...</div>).

## Suspense with Data Fetching
While Suspense can be used for any asynchronous operation, it's particularly useful for data fetching. Here's an example using a hypothetical fetchData function that returns a promise:

```jsx
import React, { Suspense } from 'react';

// This function would be replaced with your actual data fetching logic
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 2000);
  });
}

const resource = fetchData();

function DataComponent() {
  const data = resource.read();
  return <div>{data}</div>;
}

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading data...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}
```

In this example, DataComponent will suspend rendering until the data is loaded. During this time, the fallback UI will be shown.

## Suspense with Lazy Loading

Lazy loading is a technique where you load components only when they are needed. This can be useful for reducing the initial bundle size and improving performance.

```jsx
import React, { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## Suspense with Error Handling

Suspense can also be used to handle errors. Here's an example:

```jsx
import React, { Suspense } from 'react';

function DataComponent() {
  const data = fetchData();
  return <div>{data}</div>;
}

function ErrorFallback() {
  return <div>An error occurred while loading the data.</div>;
}

function App() {
  return (
    <div>
      <Suspense fallback={<ErrorFallback />}>
        <DataComponent />
      </Suspense>
    </div>
  );
}
```

In this example, if fetchData throws an error, the ErrorFallback component will be rendered instead of the DataComponent.

## SuspenseList (Experimental)

React also provides an experimental SuspenseList component that helps coordinate multiple Suspense components:

```jsx
import React, { Suspense, SuspenseList } from 'react';

function App() {
  return (
    <SuspenseList revealOrder="forwards" tail="collapsed">
      <Suspense fallback={<div>Loading A...</div>}>
        <ComponentA />
      </Suspense>
      <Suspense fallback={<div>Loading B...</div>}>
        <ComponentB />
      </Suspense>
      <Suspense fallback={<div>Loading C...</div>}>
        <ComponentC />
      </Suspense>
    </SuspenseList>
  );
}
```

SuspenseList coordinates the appearance of its child Suspense components. In this example, they will be revealed in order, and only one loading indicator will be shown at a time.