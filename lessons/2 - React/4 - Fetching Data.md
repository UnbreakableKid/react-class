# Fetching Data

There are many ways to fetch data in a React application. In this lesson, we will explore some of the most common ways to fetch data in a React application.

First will start by using the "classic" way of fetching data using the `fetch` API. Then we will explore how to fetch data using the `useEffect` hook.

## Fetching data with the fetch API

The `fetch` API is a modern way to fetch data in JavaScript. It is a promise-based API that allows you to make network requests. You can use the `fetch` API to make GET, POST, PUT, DELETE, and other types of requests. It is built into the browser and is supported by all modern browsers.

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

### Fetching data with the useEffect hook

React strictly recommends against using the useEffect hook to fetch data. The useEffect hook is meant to be used for side effects, not for fetching data. The useEffect hook is called after the render phase, specifically in the commit phase. This means that React will render the component first and then call the useEffect hook. This can lead to a flash of content on the screen in the best case scenario.

## Tanstack Query / React Query

Tanstack Query is a library that provides a set of hooks for fetching, caching, and updating data. It is a great way to fetch data in a React application. It provides a set of hooks that allow you to fetch data and manage the state of the data.

Check the folders inside of the `api` folder to see how to use it. We already created a `useQuery` hook that you can use to fetch data.

While Tanstack can be seen as fetching library, it is more like a async state management library. It is a great way to manage the state of your data and keep it in sync with the server. It is incredibly recommended if you are not working with a framework that already provides a way to fetch data.

[Here is a blog post explaining why you want React Query](https://tkdodo.eu/blog/why-you-want-react-query)

### Example

Here is an example of how to use Tanstack Query to fetch data:

```jsx
import { useQuery } from '@tanstack/react-query';
import { getFriends } from '../api/friends';

export function FriendsList() {
  const { data, isLoading, error } = useQuery({queryKey: ['friends'], queryFn: getFriends});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.map((friend) => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
}

// example with a query key and an id
export function FriendItem(props: {id: number}) {
  const { data, isLoading, error } = useQuery({queryKey: ['friends', props.id], queryFn: getFriend});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
```

In this example, we are using the `useQuery` hook from Tanstack Query to fetch the friends data. The `useQuery` hook takes an object with two properties: `queryKey` and `queryFn`. The `queryKey` is a unique identifier for the query, and the `queryFn` is a function that returns the data for the query.

The `useQuery` hook returns an object with the following properties:

- `data`: The data returned by the query function.
- `isLoading`: A boolean indicating whether the data is still being fetched or not.
- `error`: An error object if there was an error fetching the data, or `null` if there was no error.
- `refetch`: A function that can be called to refetch the data.
- `isFetching`: A boolean indicating whether the data is still being fetched or not.

### Mutations in Tanstack Query

Tanstack Query also provides a `useMutation` hook that allows you to make mutations to your API. Mutations are used to update data in your application. They are similar to queries, but they are used to modify data instead of fetching it.

Here is an example of how to use Tanstack Query to make a mutation:

```jsx
import { useMutation } from '@tanstack/react-query';
import { addFriend } from '../api/friends';

export function AddFriendForm() {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: addFriend,
    onSuccess: () => {
      // Handle success
    },
    onError: (error) => {
      // Handle error
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = event.target.elements;
    mutate({ name: name.value, email: email.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Friend'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
```

In this example, we are using the `useMutation` hook from Tanstack Query to make a mutation to the friends API. The `useMutation` hook takes an object with two properties: `mutationFn` and `onSuccess`. The `mutationFn` is a function that makes the mutation, and the `onSuccess` is a function that is called when the mutation is successful.

The `useMutation` hook returns an object with the following properties:

- `mutate`: A function that can be called to make the mutation.
- `isLoading`: A boolean indicating whether the mutation is still being made or not.
- `error`: An error object if there was an error making the mutation, or `null` if there was no error.
- `isFetching`: A boolean indicating whether the mutation is still being made or not.


## Fetch on Render

When you fetch data inside a component, usually the component will render first and then the data will be fetched. Looking at the example below, the component will render first, and then the data will be fetched and the component will rerender with the new data.

It can get even worse. When this cycle is done, each of the friends will do the same thing as they are rendered first, and then the data will be fetched and the component will rerender with the new data.

```jsx

export function FriendsList(){
  const { data, isLoading, error } = getFriends();

  if (isLoading) {
    return <p>Loading...</p>;
}

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.map((friend) => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );

}

export function FriendItem(props: {id: number}) {
  const { data, isLoading, error } = getFriend(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
}

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
```

[Drama](https://bobaekang.com/blog/component-colocation-composition/) - This is a great article that explains the problem of component colocation and composition.

Some tech has been in place to fix this, like Remix using data fetching on routes or even in Tanstack Router.