## 1. What is JSX, and why is it used?
Definition :
JSX is a syntax extension for JavaScript that allows developers to write code that looks like HTML inside JavaScript files. It is not a programming language itself but a way to make writing React components easier and more intuitive.

Purpose :
JSX is mainly used in React to describe the structure and appearance of the user interface (UI). Instead of writing long createElement() function calls, developers can write HTML-like syntax, which is then compiled into JavaScript by tools like Babel.

Why JSX is Important:

a. Readability: It makes the code look like the final UI, which is easier to understand.
b. Productivity: Developers can quickly design components without switching between HTML and JavaScript files.
c. Integration with JavaScript: JSX allows embedding JavaScript expressions directly within markup (e.g., variables, loops, conditions).
d. Component-based UI: React components usually return JSX to describe what they should display.


## 2. What is the difference between State and Props?

In React, both state and props are used to handle data, but they serve different purposes.

a. Props (Properties):
Props are used to pass data from a parent component to a child component. They are read-only, meaning the child cannot modify the props it receives. Props make components reusable because the same component can display different data when given different props.

b. State:
State represents the internal data of a component that can change over time. It is managed within the component itself. A component can update its state (using setState or hooks like useState), and whenever the state changes, React re-renders the component to reflect the new data.


## 3. What is the useState hook, and how does it work?

Definition :
The useState hook is a built-in React hook that allows functional components to have state variables. Before hooks, state could only be used in class components, but now functional components can manage state too.

Purpose :
It is used to store, read, and update values that change over time (like user input, counters, API data, etc.).

How it works:

a. useState takes an initial value as its argument.
b. It returns an array with two elements:
 -  The current state value.
 -  A function to update that value.
c. When the update function is called, React re-renders the component with the new state value.


## 4. How can you share state between components in React?

Sharing State Between Components in React

In React, each component has its own state, but sometimes multiple components need to access or update the same data. To share state between components, React provides different approaches:

a. Lift State Up

 - The most common way is to move the state to the closest common parent component.
 - The parent manages the state and passes it down as props to the child components.
 - The child components can also trigger state updates by calling functions passed from the parent.

b. Using Context API

 - If many components (especially deep in the tree) need the same state, passing props through multiple levels becomes difficult ("prop drilling").
 - The Context API allows you to create a global state that can be accessed by any component within the provider, without manually passing props down each level.

c. State Management Libraries

 - For larger applications, libraries like Redux, Zustand, Recoil, or Jotai can be used to manage shared state in a more structured way.
 - These libraries store state in a central store, and components can subscribe to updates.


 ## 5. How is event handling done in React?

a. Definition :
 - Event handling in React is the way we manage user interactions such as clicks, typing, form submissions, etc. It is similar to handling events in plain JavaScript but with some differences in syntax and behavior.

b. Key Points about Event Handling in React :

 - CamelCase Naming: In React, event names use camelCase instead of lowercase.
      - Example: onClick instead of onclick.

 - JSX Syntax: You pass a function (not a string) as the event handler.
        - Example: <button onClick={handleClick}>Click Me</button>

 - Synthetic Events: React wraps native browser events into a SyntheticEvent object, which works consistently across all browsers.

 - Binding: Unlike in plain JavaScript, you don’t usually need to use .bind() if you use arrow functions or hooks in functional components.

c. How it Works :

 - When a user interacts with the UI (e.g., clicks a button), React captures the event.
 - React triggers the function assigned to that event handler.
 - If the handler updates state, React re-renders the component with new data.