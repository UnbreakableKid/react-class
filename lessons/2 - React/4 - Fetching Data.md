# Fetching Data

There are many ways to fetch data in a React application. In this lesson, we will explore some of the most common ways to fetch data in a React application.

First will start by using the "classic" way of fetching data using the `fetch` API. Then we will explore how to fetch data using the `useEffect` hook.

## Fetching data with the fetch API

The `fetch` API is a modern way to fetch data in JavaScript. It is a promise-based API that allows you to make network requests. You can use the `fetch` API to make GET, POST, PUT, DELETE, and other types of requests.

Here is an example of how to fetch data using the `fetch` API:

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

In this example, we are using the `fetch` API to make a GET request to `https://api.example.com/data`. We are then using the `json` method to parse the response and set the data in the state using the `setData` function. We are also using the `useEffect` hook to fetch the data when the component mounts.

This doesn't handle errors, so you should add a `.catch` to handle errors. We'll also add a refetch button that will call the `fetch` function again.

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const refetch = () => {
    setLoading(true);
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <button onClick={refetch}>Refetch</button>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Error fetching data</p>
      )}
    </div>
  );
}
```

Notice any issue? We are always recalling the same fetch and the user always sees the loading state, even if the data is already in the state.

## Tanstack Query / React Query

Tanstack Query is a library that provides a set of hooks for fetching, caching, and updating data. It is a great way to fetch data in a React application. It provides a set of hooks that allow you to fetch data and manage the state of the data.

Check the folders inside of the `api` folder to see how to use it. We already created a `useQuery` hook that you can use to fetch data.

While Tanstack can be seen as fetching library, it is more like a async state management library. It is a great way to manage the state of your data and keep it in sync with the server. It is incredibly recommended if you are not working with a framework that already provides a way to fetch data.

[Here is a blog post explaining why you want React Query](https://tkdodo.eu/blog/why-you-want-react-query)