# Exercise

Open the `routes` folder and take a look at the files. You can see that the file name is the route path.


Open the __root file and let's try to understand how it works and add a navbar to the application.

Then, let's create an about page and add it to the navbar.

# Instructions

1. Open the `routes/__root.tsx` file and take a look at the code.
2. Add a `NavBar` component to the `__root` file.
3. The `NavBar` component should have links to the following routes:
   - Home
   - About
4. The `NavBar` should be displayed at the top of the page.
5. The `NavBar` should have a different style for the hover link.
6. Create a new file called `about.tsx` inside the `routes` folder.
7. Add a simple `About` component to the `about.tsx` file.
8. Add a link to the `About` page in the `NavBar`.

Click the links and see how the URL changes and the page doesn't reload.

## Extra challenge

Try to add a different style to the active link in the `NavBar`.

### Tips

First try with the native window.location.href to see how it works. Then try to use a hook from tanstack/router.

> useRouterState() allows you to access the current state of the router.

## Part 2

The homepage will host a list to all of the available routes. The user will be able to click on a route and navigate to it.

Keep in mind that we will be adding more routes in the future, so the list should be dynamic.

### Tips

Create an array with the routes and map over it to create the links. You can place this array in a separate file if you want.

#### Bonus

Tanstack has a hook called `useRouter` that gives you access to the router object. There is a property called routesByPath that gives you access to all the routes. You can use this to get the routes dynamically and programmatically.