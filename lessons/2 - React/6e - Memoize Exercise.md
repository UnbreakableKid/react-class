# Exercise

There's a page called `memoization.tsx` that if we open it, we can see it's a simple page that renders a Post component. The Post component is a simple component that displays a title and a body.

We can also see that after every 3 seconds, the page increments a "likes" counter. By inspecting the console, we can see that the Post component is being re-rendered every time the "likes" counter is incremented, even though the Post component is not using the "likes" state.

The goal of this exercise is to find a way to prevent the Post component from re-rendering when the "likes" counter is incremented.

### Instructions

1. Open the `memoization.tsx` file and take a look at the code.
2. Find a way to prevent the Post component from re-rendering when the "likes" counter is incremented.
3. Test the solution by inspecting the console and checking if the Post component is being re-rendered when the "likes" counter is incremented.