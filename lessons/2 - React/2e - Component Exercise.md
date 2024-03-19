# Exercise


## Part 1

Let's create a simple component called Card that will display a title and some content. The Card component should render a title with an `h2` tag and the content with a `p` tag.


### Instructions

1. Create a new file called `Card.tsx` inside the `components` folder.
2. Create a functional component called `Card` in the `Card.tsx` file.
3. Render an `h2` tag with the title "Card Title".
4. Render a `p` tag with the content "This is the content of the card".
5. Export the `Card` component from the `Card.tsx` file.
6. Import the `Card` component in the `componentBuilding.tsx` file.


## Part 2

We want the Card component to be reusable and accept props for the title and content. Let's update the Card component to accept props for the title and content.

### Instructions

1. Update the `Card` component to accept props for the title and content.
2. Use the props to render the title and content in the `Card` component.
3. Update the `Card` component in the `componentBuilding.tsx` file to pass the title and content as props.
4. Test the `Card` component by changing the title and content in the `componentBuilding.tsx` file.

## Part 3

The card component should be agnostic about the content/body it receives. Let's update the Card component to make that happen. No instructions are provided for this part, as it is a challenge for you to figure out how to make the Card component agnostic about the content it receives.

## Part 4

Let's create a new component called `CardList` that will render a list of cards. The `CardList` component should accept an array of Cards as props, where each object represents a card with a title and content. To test this, create cards with diffeerent contents, i.e different colors, font sizes, etc.

### Instructions

1. Create a new file called `CardList.tsx` inside the `components` folder.
2. Create a functional component called `CardList` in the `CardList.tsx` file.
3. The `CardList` component should accept an array of objects as props.
4. Render a list of `Card` components in the `CardList` component, passing the title and content from each object in the array as props to the `Card` component.
5. Export the `CardList` component from the `CardList.tsx` file.
6. Import the `CardList` component in the `componentBuilding.tsx` file.
7. Test the `CardList` component by passing an array of objects with titles and content to the `CardList` component in the `componentBuilding.tsx` file.
