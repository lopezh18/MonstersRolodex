# Complete React Developer Udemy 2023

## Key Developer Concepts:
### .map()
performs an action on each item in the array. 

### .filter()
returns a new array instead of updating the original. .filter() iterates through each item and returns true or false, if it's true it will be added to the new array. 

### .includes()
takes one argument and checks to see if the argument exists in the array. .includes can also take a second argument that tells the method where to start searching for the first argument. 

#### Primitive data types:
1. string
2. boolean
3. null
4. undefined
5. number
6. symbol

Anything that is not a primitive type it's an object & gets its own unique reference in memory. Objects are collections of things (properties w/ values.) Methods are properties that point to functions

### Promises
Promises are a way to handle asynchronous events. A promise is instantiated with this constructor. `const myPromise = new Promise((resolve, reject) => {})` A promise guarantees that there will be a value either a resolve or reject. Promise will be pending until the resolve or reject has been called. 

With promises we are getting control over what we want to do with asynchronous events if they succeed or fail.

Can chain a bunch of .then on resolved promises. Each .then wraps the value that gets returned in a resolved promise. 

`fetch` will also reject the value in the promise it returns if it needs to. 

```
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      // resolve function will run after 1000 milliseconds (1 second)
      resolve('I have succeeded');
    },1000)
  } else {
    reject('I have failed');
  }
});

/**
the logged value will be 'I have succeeded', to get 
the rejected value need to chain w/ a .catch. 
You won't always need reject. 
**/

myPromise
.then(value => console.log(value))
.catch(rejectValue => console.log(rejectValue))
```

## Monsters Rolodex Notes:
### State & Shallow Merge & setState & Secondary
```
this.setState({ name: firstName: 'Marco, lastName: 'Garcia })
```

setState is asynchronous so it can be ran with all of the other setState methods that trigger when an event occurs, which is why the below implementation is preferred to directly passing in the new object. 
```
class App extends Component {
  // method that says whenever this component is built or instantiated call the constructor method
  constructor() {
    // calls any constructor of the extended component - always use the super
    super();

    // this.state = {
    //   name: {
    //     firstName: 'Haley',
    //     lastName: 'Lopez',
    //   },
    //   company: 'eleven11da'
    // }
    this.state = {
      monsters: [{ name: 'linda' }, { name: 'frank' }, { name: 'jacky' }],
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi I'm {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
         <button onClick={() => {
          // the first function you pass to set state is an updater function, return an object to shallow merge against state
          // second function is a callback - runs after first function & after state is updated. This is an optional parameter
          this.setState(() => {
            return ({name: {firstName: 'Marco', lastName: 'Garcia' }})
          }, () => {console.log(this.state)})
         }}>Change Name</button>
        </header>
      </div>
    );
  }
}
```

### Single Page Applications

Non-SPA - in a non-spa environment the browser doesn't know how to build the website. So it has to ask for the code from a server to get the html, css, & js for the browser to build. The browser will have to make this request for each page on its website. Very few websites have these interactions now. 

SPA - The first time a customer lands on your site it will make the request to the server for the html, css, & js. But this JS code contains all of the react code to build the entire website so it doesn't need to get the code from the server for each page.

### componentDidMount
A component's key thing is figuring out when it renders & when it re-renders.

componentDidMount is a lifecycle method. Whatever you write in here will get run whenever a component mounts (when a component gets placed on the dom). Only happens once in the component's lifecycle. Only time it mounts again is after it's been unmounted. 

Promise is asynchronous - basically promising that a value will be returned. 

Every .then that returns a value will return a promise that has been resolved

### Renders & Re-Renders in react
Order of operations:
1. constructor runs first in any class - & all you do in the constructor is initialize the state. 
2. Render runs after constructor and determines what to show & mount it onto the DOM - initial component UI
3. ComponentDidMount runs after render since it just mounted 

When state (when setState gets called) changes React knows it needs to re-render so if a state change happens in ComponentDidMount it will run the render method again. 

Every time React updates the DOM it runs the render method

anonymous functions are functions that are not stored anywhere in a variable. Every time JS runs across an anonymous function it creates it & if they are in the render method it gets created every time the render method runs. This is not optimized. 

### Understanding components
- Separate components by responsibility
- Create a components folder that lives in src
- Components re-render under 2 conditions:
  1. when setState gets called
  2. when props change

App.js does not live inside of the components folder because it isn't the same category of component as the other components. The components folder stores reusable components and the App.js is the entry point to the entire applications. 

### CSS in React
app.css is styling applied to the entire application. 

React will build all CSS files into one so the styling is available throughout the application. This is important to know because even though we import stylesheets into a component all stylesheets are referenced so keep note of your class names & ids. We import stylesheets for our own reference to know what the intended styles are. 

### Functional vs. Class Components
Functional components use hooks to replicate similar behaviors in class components. 

The difference between hooks and lifecycle methods is how react uses these hooks in order to re-render.

Important to know both class andd functional components.

### Class Component Lifecycle Methods Breakdown
Below: a link to a diagram of class components alongside life cycles
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class components lifecycle methods:
1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

Lifecycle methods are unique to class components but functional components have the same phases:
1. Mounting
2. Updating
3. Unmounting

The difference between functional and class component methods is how you interact with the 3 phases. With functional components you need to think about how the component moves through the different phases since it's less explicit. 

### Functional Components Intro
Takes the form of an arrow function

Functional methods do not have constructors. Functional components behaves like a regular function - takes arguments (props) and returns JSX

Hooks do not replicate lifecycle methods. Functional components have functions and side effects. 

### Pure and Impure Functions
Pure functions should return the exact same thing when it is given the same arguments. The function's return should only be dependent on the arguments being passed in. Pure functions do not produce side effects. 

```
const pureFunc = (a, b) => {
  return a + b;
}
```

Impure functions return a different value even if the arguments to the function stay the same. 

If c changes in the example below, the function won't give us the same value even if a & b stay the same. 

```
let c = 3;
const funcA = (a, b) => {
  return a + b + c;
}
```

Side effect is when a function creates some effect outside of its scope. The scope is everything in the function. If it is available outside of the function it is out of scope. 

In the example below if we change the values of a & b it changes the value of c, which is out of scope.

```
// using c from above

const funcB = (a, b) => {
  c = a + b;

  return a * b;
}
```

People debate whether it is better to use pure or impure functions but in react w/ functional components we are creating impure functions. With hooks we are generating side effects. 

### Hooks: useState
useState - gives us the ability to encapsulate local state in a functional component. 

use array destructuring because useState returns an array of 2 values. - [value we want to store, setValue function]

We should not be storing entire objects in useState

Array destructuring - allows us to assign variables to values inside of an array. 

```
  const [searchField, setSearchField] = useState(''); // [value, setValue]

```

### Functional Component Rendering & Re-rendering
React runs the entire function every time it needs to re-render a functional component. In class components when there were mounting and update cycles render would run and the update cycles would run whenever state changes but it only ran what was in the render method. The entire functional component renders and re-renders from top to bottom.

Functional components render & re-render when:
1. props change
2. state change

Under the hood, when useState runs it checks if there were state changes. the setter function doesn't trigger a re-render, it is only triggered if the state value is different. 

Need to move away from thinking of functional components as having lifecycles and instead think about how react determines to re-run my functional component

### Infinite re-rendering
Functional components re-render the entire component from top to bottom & this is often the reason for infinite rendering bugs. 

### Hooks: useEffect
side effects can be generated from functional components using the useEffect hook

a side effect is some behavior we trigger from our functions that effect something that exists outside of the function. Any fetch call is a side effect

useEffect takes 2 arguments
1. callback function - the effect we want to happen
2. array of dependencies - most likely state values or prop values (arguments that get passed in as props to our functional component). When the values in the dependency array change it runs the callback function. 

useEffect runs every time the component mounts and if a value in the dependency array changes

### React v18 Strict Mode Changes
React.StrictMode enforces that we don't use any deprecated methods or methods that are going to be deprecated. WE're following react best practices. Lives in index.js

No longer suppressing that it double renders components to catch any weird behaviors that might be happening. React strict mode double renders everything. We can see which ones are being called via react strict mode and which ones we are triggering with react dev tools

### DOM and Virtual DOM
It's computationally expensive to make changes to the DOM (re-flow), however it's quick to determine what needs to change. React makes a duplicate copy of the DOM in JavaScript. It's much quicker to make the changes in JavaScript but we need a real DOM to display to the user. We can use the tree to determine what has changed. The Virtual DOM is a JavaScript representation of the real tree (DOM).

React creates a duplicate virtual DOM to make the changes against. Then it will compare the virtual DOM copy against the virtual dom snapshot and highlight where things are different then it will make the changes on the real DOM by going through the reflow. 

Virtual DOM is an optimal way for react to figure out what the real dom needs to look like. 

### React and ReactDOM
You need both React and ReactDOM 

React is the engine, it does a lot of the diffing and optimizations and a lot of determining what to render and how. 

ReactDOM determines what we're trying to render to. We're building dom elements. All of the react libraries use the react library under the hood. 

### DOM Paint Flashing
Paint - terminology used by the DOM to determine wha tis being rendered or re-rendered onto the dom. The painting process is the expensive dom process. 

Can use render tool paint flashing that will show you what is being rendered or re-rendered. Helpful tool in dev tools --> click 3 dots --> more tools --> rendering --> paint flashing