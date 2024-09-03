# Suspense Exercise: Loading a Heavy Component

## Objective

In this exercise, we'll create a simple application that demonstrates the power of React Suspense for handling the loading of a computationally intensive component.

## Instructions

1. Create a new file called `HeavyComponent.tsx` inside the `components` folder:

```typescript
function simulateHeavyComputation() {
  const endTime = Date.now() + 3000; // Simulate 3 seconds of heavy computation
  while (Date.now() < endTime) {
    // Busy wait
  }
}

export default function HeavyComponent() {
  simulateHeavyComputation();
  return <div>This is a heavy component that took 3 seconds to render!</div>;
}

```
2. In your main App.tsx file, import the necessary React components and your HeavyComponent

```typescript
import React, { Suspense, lazy, useState } from 'react';

const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

```
3. Create a button that will trigger the loading of the HeavyComponent:

```jsx
function App() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div>
      <h1>Suspense Demo</h1>
      <button onClick={() => setShowHeavy(true)}>
        Load Heavy Component
      </button>
      {showHeavy && (
        <Suspense fallback={<div>Loading heavy component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;
```

4. Run your application and observe the behavior:
- Click the "Load Heavy Component" button.
- Notice how the "Loading heavy component..." message appears immediately.
- After 3 seconds, the actual content of the HeavyComponent will appear.

5. To better understand the benefit of Suspense, try removing the Suspense wrapper and lazy loading:


```jsx
import HeavyComponent from './components/HeavyComponent';

function App() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div>
      <h1>Without Suspense Demo</h1>
      <button onClick={() => setShowHeavy(true)}>
        Load Heavy Component
      </button>
      {showHeavy && <HeavyComponent />}
    </div>
  );
}
```

6. Run this version and observe:

- Click the "Load Heavy Component" button.
- Notice how the entire UI freezes for 3 seconds before the component appears.