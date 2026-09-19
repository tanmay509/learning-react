# Question: Why Can't We Import Everything from a File at Once in JavaScript?

When we import a file in JavaScript, why do I have to write specific variables or functions? Why can't I just import the file and get access to everything written in that file, like in Python or other languages?

---

### **Answer:**

The difference comes down to **how modern module systems (ES Modules) work**, along with key web-focused design priorities like **tree-shaking** and **scope safety**.

In Python, `import math` imports the whole module into its own namespace (`math.sqrt()`). If you try to write `import file` directly in standard JavaScript, it won't expose variables into a named namespace automatically. 

Here is why JavaScript relies on explicitly exporting and importing specific items, and how you can actually achieve Python-style imports if you want to.

---

### 1. You CAN Import Everything (Namespace Imports)

If you want the Python-style experience where you grab everything written in a file at once, **JavaScript actually lets you do this using `import * as`**:

```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

---

# Question: What is props and prop binding in ReactJS?
## Answer

**Props** (short for "properties") are read-only inputs passed from a parent component to a child component in React. They allow components to be reusable and dynamic by enabling parent components to customize the behavior and display of their child components.

**Prop Binding** is the syntax and mechanism used in JSX to pass data, state, or functions from a parent component into a child component's attributes.

---

### Basic Syntax & How It Works

Prop binding uses standard JSX attribute syntax. Static string values are passed using double quotes `""`, while JavaScript expressions, numbers, objects, booleans, variables, and functions are bound using **curly braces `{}`**.

#### 1. The Child Component (Receiving Props)

A child component receives props as a single object passed to its function parameters. You can access them via `props.propertyName` or by **destructuring** them directly:

```jsx
// Greeting.jsx (Child Component)

// Option A: Destructuring props directly in parameter (Recommended)
const Greeting = ({ name, age, isOnline }) => {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? 'Active' : 'Offline'}</p>
    </div>
  );
};

export default Greeting;
```

#### 2. The Parent Component (Binding and Passing Props)

The parent component binds values to attributes on the custom component tag:

```jsx
// App.jsx (Parent Component)
import Greeting from './Greeting';

const App = () => {
  const currentAge = 22;

  return (
    <div>
      {/* 1. Static String Binding */}
      {/* 2. Number Variable Binding */}
      {/* 3. Boolean Expression Binding */}
      <Greeting age="{currentAge}" isOnline="{true}" name="Tanmay"/>
    </div>
  );
};

export default App;
```

### What Can You Bind to Props?

You can pass any valid JavaScript data structure or entity through props:

| Data Type | Syntax Example | Example Use Case |
| --- | --- | --- |
| String | `title="Dashboard"` | Heading text, image URLs, button labels |
| Number | `count={10}` | Items count, age, pricing values |
| Boolean | `isActive={true}` or `isActive` | Toggling modal visibility, active states |
| Object | `user={{ name: 'Alex', id: 1 }}` | User profiles, complex configuration objects |
| Array | `items={['React', 'Node', 'Mongo']}` | Rendering list elements with `.map()` |
| Function | `onDelete={handleDelete}` | Sending child events back up to parent state |

### Binding Functions as Props (Callback Props)

Since data flows top-down, a child component cannot directly alter its parent's state. To communicate back to a parent, the parent passes a function as a prop. The child then calls that function when an event occurs:

```jsx
// Child: Button.jsx
const CustomButton = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

// Parent: App.jsx
const App = () => {
  const handleAlert = () => {
    alert("Button clicked in child component!");
  };

  return <CustomButton handleClick="{handleAlert}" label="Click Me"/>;
};
```

### Fundamental Rules of Props

- **Unidirectional Data Flow:** Data travels in one direction only—from parent to child down the component tree.
- **Props are Read-Only (Immutable):** A child component must never modify the props object it receives. If a value needs to change over time, the parent component must own that value as State (useState) and pass down the updated value or updater function.

#### Quick Comparison: Props vs. State

| Feature | Props | State |
| --- | --- | --- |
| Origin | Passed down from a parent component | Managed internally inside the component |
| Mutability | Immutable (Read-only inside child) | Mutable (Updated using state setters) |
| Purpose | Configures/customizes a child component | Holds dynamic data that changes over time |