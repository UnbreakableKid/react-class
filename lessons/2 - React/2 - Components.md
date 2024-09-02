# Components

React is a component-based library. This means that we can create components and reuse them in our application. It's like building with legos, we can create a component and reuse it in different parts of our application.

## What is a component?

A component is a reusable piece of code that can be used to build UI elements. Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.

### Types of components

There are two types of components in React:

- **Functional components**: These are simple functions that take in props and return a React element. They are the most common type of component in React.
  - Functional components are also known as stateless components because they do not have state or lifecycle methods.
  - They don't require to return JSX, instead, they can return a string, a number, a boolean, null, or an array.
  - They can be used with hooks to add state and lifecycle methods.
  - They can be used to create custom hooks to share logic between components.

- **Class components**: These are ES6 classes that extend `React.Component`. They have a `render` method that returns a React element. They are less common than functional components, but they are still used in some cases.
  - Class components have state and lifecycle methods.
  - Class components need to extend `React.Component` and have a `render` method that returns a React element.

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

## Rerendering

React components will **rerender** when the state or props change. React will rerender every child component of the component that changed. This is why it's important to keep the state at the top of the component tree, and to use the `useMemo` and `useCallback` hooks to prevent unnecessary rerenders.

When the component receives children as props (i.e use them between the tags, the slots), they are not rerendered. If you use the the devtools' profiler, you can see that the children are not rerendered, even though, the border color might appear.

```jsx

function Grandchild({name}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function Parent({name}) {
  return (
    <div>
      <Grandchild name={name} />
    </div>
  );
}

function Grandfather() {
  const [name, setName] = useState('John');
  return (
    <div>
      <Parent name={name} />
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}

// same example but with slots

function Grandchild({name}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function Parent({children}) {
  return (
    <div>
      {children}
    </div>
  );
}

function Grandfather() {
  const [name, setName] = useState('John');
  return (
    <div>
      <Parent>
        <Grandchild name={name} />
      </Parent>
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
}


## Component lifecycle


### Class components

In class components, there are several lifecycle methods that you can use to perform actions at different stages of the component's lifecycle. These methods include:

- `componentDidMount`: This method is called after the component is mounted to the DOM. This is a good place to perform any side effects, such as fetching data from an API.

- `componentDidUpdate`: This method is called after the component is updated. This is a good place to perform any side effects when the component's props or state change.

- `componentWillUnmount`: This method is called before the component is removed from the DOM. This is a good place to perform any cleanup, such as unsubscribing from an event listener.

### Functional components

In functional components, you can use hooks to perform actions at different stages of the component's lifecycle. These hooks include:

- `useState`: This hook allows you to add state to a functional component. It returns a stateful value and a function to update it.

- `useEffect`: This hook lets you perform side effects in function components. It runs after every render. They have a dependency array that lets you control when the effect runs.


### Bonus - My snippets

Control + Shift + P -> Preferences: Configure User Snippets -> typescriptreact.json

```json
  "Typescript React Function Component With Props": {
    "prefix": "rhp",
    "body": [
      "type ${TM_FILENAME_BASE/\\b\\w/${0:/capitalize}/}Props = {",
      "$1",
      "}",
      "",
      "const ${TM_FILENAME_BASE/\\b\\w/${0:/capitalize}/} = ({$2} : ${TM_FILENAME_BASE/\\b\\w/${0:/capitalize}/}Props) => {",
      "\t\treturn (<></>$3);",
      "}",
      // "",
      "export default ${TM_FILENAME_BASE/\\b\\w/${0:/capitalize}/};"
    ],
    "description": "Typescript React Function Component with Props"
  },

  "Typescript React Function Component Without Props": {
    "prefix": "rh",
    "body": [
      "const ${TM_FILENAME_BASE/\\b\\w/${0:/capitalize}/} = () => {",
      "\t\treturn (<></>$3);",
      "}",
      // "",
      "export default ${TM_FILENAME_BASE/\\b\\w/${0:/capitalize}/};"
    ],
    "description": "Typescript React Function Component without Props"
  }
}
```
