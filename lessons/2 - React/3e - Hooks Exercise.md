# Exercise

## Part 1

Let's create a simple Counter component that will display a count and two buttons to increment and decrement the count. The Counter component should have the following features:

- Display the current count.
- Increment the count when the increment button is clicked.
- Decrement the count when the decrement button is clicked.

### Instructions

1. Create a new file called `Counter.tsx` inside the `components` folder.
2. Create a functional component called `Counter` in the `Counter.tsx` file.
3. Use the `useState` hook to add state to the `Counter` component.
4. Render the current count in an `h2` tag.
5. Render two buttons: one to increment the count and one to decrement the count.
6. Add an `onClick` event handler to the increment button that increments the count.
7. Add an `onClick` event handler to the decrement button that decrements the count.
8. Export the `Counter` component from the `Counter.tsx` file.
9. Import the `Counter` component in the `componentBuilding.tsx` file.


## Part 2

We want to create 2 Counters that will share the same state. Let's update the Counter component to accept a prop that will determine the initial count. The Counters should share the same state and update the count together.

## Part 3

We want the Counter value to be on the page component instead of the Counter component.
Also, there should be 2 different Counters that will share the same state like in Part 2, but now one should be able to increment and the other to decrement. The Counters should also display a field where it shows what the current count will be after the operation.
