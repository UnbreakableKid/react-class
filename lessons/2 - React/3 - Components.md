# Components

React is a component-based library. This means that we can create components and reuse them in our application. It's like building with legos, we can create a component and reuse it in different parts of our application.

## What is a component?

A component is a reusable piece of code that can be used to build UI elements. Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.

### Types of components

There are two types of components in React:

- **Functional components**: These are simple functions that take in props and return a React element. They are the most common type of component in React.

- **Class components**: These are ES6 classes that extend `React.Component`. They have a `render` method that returns a React element. They are less common than functional components, but they are still used in some cases.

### Props

Props are short for properties. They are a way to pass data from a parent component to a child component. Props are read-only, which means that a child component cannot modify the props it receives from its parent.

#### Typing props

You can type the props of a component using TypeScript. This allows you to specify the type of the props that a component expects. This can help you catch errors and provide better intellisense when using the component.

```tsx
type WelcomeProps = {
  name: string;
};

function Welcome(props: WelcomeProps) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Passing props to a component

You can pass props to a component by adding attributes to the component when you use it. For example:

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

```

In this example, we are passing the `name` prop to the `Welcome` component.

#### Prop drilling

Prop drilling is the process of passing props from a parent component to a deeply nested child component. It can be cumbersome and lead to a lot of boilerplate code. This is where context comes in handy.

```tsx
function Grandparent() {
  const [name, setName] = useState('John');

  return (
    <Parent name={name} />
  );
}

function Parent({name}) {
  return (
    <Child name={name} />
  );
}

function Child({name}) {
  return (
    <h1>Hello, {name}</h1>
  );
}
```

In this example, we are passing the `name` prop from the `Grandparent` component to the `Child` component. This is prop drilling. Prop drilling also only works for parent to child, and not the other way around.

If you want to pass data from a child to a parent, you can use a callback function.

```tsx

function Parent() {
  const [name, setName] = useState('John');

  return (
    <Child setName={setName} />
  );
}

function Child({setName}) {
  return (
    <button onClick={() => setName('Jane')}>Change name</button>
  );
}
```

In this example, we are passing the `setName` function from the `Parent` component to the `Child` component. This allows the `Child` component to update the state of the `Parent` component.




### Children

You can also pass children to a component. Children are the content between the opening and closing tags of a component. You can access the children of a component using the `props.children` property. This allows you to create a more dynamic and flexible component.

```jsx
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h1>Hello, world!</h1>
      <p>Welcome to my website.</p>
    </Card>
  );
}
```
