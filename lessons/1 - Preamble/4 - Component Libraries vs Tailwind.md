# Lesson 4 - Component Libraries vs Tailwind

While we come from a backround where it's enforced the principle of DRY (Don't Repeat Yourself), that is not always the case in the frontend world.

## What is a Component Library?

A component library is a collection of reusable UI components. It is a set of components that you can use to build your user interface. Component libraries are a great way to build consistent and reusable UI components. They allow you to build your UI faster and with less code. There are many component libraries available for different frontend frameworks. Some of the most popular component libraries include:

- Material-UI
- Bootstrap
- Ant Design

### Learning component libraries and not learning CSS

The main issue from learning component libraries is that we're learning them instead of the technologies. This can be a problem when we want to customize the components or when we want to build our own components. We're learning how to use the components, but we're not learning how to build them. Or if the library stops being maintained, we're stuck with a library that we don't know how to maintain.

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that allows you to build your UI using utility classes. It is a low-level CSS framework that provides you with a set of utility classes that you can use to build your UI. Tailwind CSS is a great way to build custom and unique UI components. It allows you to build your UI faster and with less code. Tailwind CSS is a great choice for building custom and unique UI components.

### Example of Tailwind CSS

```html
<div class="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-10">
    This is a blue box
</div>
```

### Customization

While tailwind already gives you a lot of utility classes, you can also customize it to add your own utility classes, i.e extra colors, extra spacing, etc.

### Primitive Components like Radix

We can use Tailwind in combination with a library like Radix, which provides us with primitive components that we can use to build our UI, so we have highly accessible and customizable components.

### Cons of Tailwind CSS

Obviously the main con of Tailwind is that it's not as easy to use as a component library, and it's not as easy to maintain, especially if you don't care about the technology. It's also not as easy to learn, as it's a new way of writing CSS.

## Tailwind vs "regular" CSS

Writing our own CSS can be a time-consuming process. We need to write a lot of CSS code to style our UI. With Tailwind CSS, we can build our UI faster and with less code. Tailwind CSS provides us with a set of utility classes that we can use to style our UI. This allows us to build our UI faster and with less code.

Not only that, doing custom css in separate files leads to a lot of repetition, inconsistency and a lot of "left behind" code that is not used anymore, due to fear of removing it.