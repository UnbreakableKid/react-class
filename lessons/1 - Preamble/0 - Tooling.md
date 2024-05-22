# Tooling

This are some of the tools that are helpful when working with JavaScript and React and it's usually seen in projects.

## ESLint

ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It is highly configurable and can be used to enforce a coding style across a project. It is also useful for identifying common programming errors.

[ESLint](https://eslint.org/)

### Example of a caught error

```js

const [count, setCount] = useState(0);

useEffect(() => {
    setCount(count + 1);
    }, []);
```

In this example, ESLint will catch the error because the `count` variable is not included in the dependency array of the `useEffect` hook. This can lead to bugs in your code.

### ESLint configuration

ESLint can be configured to enforce a specific coding style across your project. You can create an `.eslintrc` file in the root of your project and define the rules you want to enforce. You can also extend popular configurations like Airbnb, Google, or Standard.

**NOTE**: Be careful with what configurations you add. Some very famous configs like Airbnb's are wildly popular to add but not even the Airbnb team uses them. Eslint is famously slow and adding too many rules can make it even slower.

## Prettier

Prettier is an opinionated code formatter that enforces a consistent code style across your entire codebase. It can automatically format your code to match a predefined style guide. It is useful for keeping your codebase clean and readable.

[Prettier](https://prettier.io/)

### Prettier future

Prettier's creator recognized that prettier might not be the best tool for parsing and formatting code over on Twitter and created a bounty for a new tool that would be better suited for the job. The new tool is called Biome which is based on Rome and is a new JavaScript toolchain.

## Biome

Biome is the new kid on the block and it's focusing on being an alternative to not only prettier but also eslint. It is considerably faster since it's not written in JavaScript but in Rust.

This project uses Biome for formatting and linting and you can find the config in the biome.json file.

[Biome](https://biomejs.dev/)

### Biome on large projects

If you have a project with different mini-projects, you can create a biome.json file in the root of the project and then create a biome.json file in each mini-project. This way you can have different configurations for each mini-project.

[Biome in big projects](https://biomejs.dev/guides/big-projects/)