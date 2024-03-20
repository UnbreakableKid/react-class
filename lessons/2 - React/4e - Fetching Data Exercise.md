# Exercise

## Part 1

On the `dogs.tsx` file, create a functional that will fetch the list of dogs from our api and display them in a list.

### Instructions

3. Use the `useState` hook to add state to the `DogShowcase` component.
4. Use the `useEffect` hook to fetch the list of dogs from the api when the component mounts.
5. Render a list of dogs in an `ul` tag.
6. Each dog should be displayed in an `li` tag.


## Part 2

Let's add a loading state and an error state to the `DogShowcase` component. The loading state should be displayed while the data is being fetched, and the error state should be displayed if there is an error fetching the data.

### Instructions

1. Add a loading state to the `DogShowcase` component using the `useState` hook.
2. Add an error state to the `DogShowcase` component using the `useState` hook.
3. Display a loading message while the data is being fetched.
4. Display an error message if there is an error fetching the data.

## Part 3

Let's add a button to the `DogShowcase` component that will allow the user to refetch the data.

### Instructions

1. Add a button to the `DogShowcase` component that says "Refetch Data".
2. Add an `onClick` event handler to the button that will refetch the data when clicked.

## Part 4

Let's add a form to the component to allow the user to add a new dog to the list.

### Instructions

1. Add a form to the `DogShowcase` component that allows the user to input the name of a new dog.
2. Add a button to the form that says "Add Dog".
3. Add an `onSubmit` event handler to the form that will add the new dog to the list when the form is submitted.

## Part 5

Let's add a delete button to each dog in the list that will allow the user to delete a dog from the list.

### Instructions

1. Add a delete button to each dog in the list.

## Part 6

The code is getting a bit messy. Let's create a custom hook called `useDogList` that will handle the fetching of dogs. We will then use this custom hook in the `DogShowcase` component.

### Instructions

1. Create a new file called `useDogList.ts` inside the `hooks` folder.
2. Create a custom hook called `useDogList` in the `useDogList.ts` file.
3. Move the fetching from the `DogShowcase` component to the `useDogList` custom hook.
4. Use the `useDogList` custom hook in the `DogShowcase` component.


## Part 7

The data fetching is working, but it's not being cached. Trying to navigate to another page and then back to the `DogShowcase` component will cause the data to be fetched again.

Not only that, but the code is getting a bit messy. Let's refactor the `DogShowcase` component to use the hooks given by the React Query library. The `useQuery` hook will allow us to fetch, cache, and update the data in a much cleaner way. The `useMutation` hook will allow us to add and delete a dog from the list.

### Instructions

1. Refactor the `DogShowcase` component to use the `useQuery` hook from the React Query library to fetch the list of dogs.
2. Refactor the `DogShowcase` component to use the `useMutation` hook from the React Query library to add and delete a dog from the list.
