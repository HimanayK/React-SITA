### reatPractice---------------------------------------
## Session 1: -----------------------------------------------------------------------------------------------------------
npm create vite@latest
npm install
npm run dev
imr = import React from 'react'


### 1. Inline Styling
>nav tag -> inline styling 
>anchor tag -> internal styling

```jsx
import React from 'react'

function Nav() {
    let anchorStyle = {
        textDecoration: 'none'
    }
    return (
        <nav style = {{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '3rem',
            padding:'1.5rem',
            backgroundColor: 'pink'

        }}>
            <a style = {anchorStyle} href="">Home</a>
            <a style = {anchorStyle} href="">About</a>
            <a style = {anchorStyle} href="">Login</a>
            <a style = {anchorStyle} href="">Contact</a>
        </nav>
    )
}

export default Nav
```

### 2. Internal Styling
```jsx
import React from 'react'

function Content() {
    let contentStyle = {
        color: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
  return (
    <div style = {contentStyle}>
        <h2>I am the content</h2>
    </div>
  )
}

export default Content
```

### 3. External Styling 

```css
#app {
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    background-color: aqua;
}
```

```jsx
import './App.css'     

function App() {
  return (
    <div id='app'>
      <Nav />                {/*Nav component rendered inside App component*/}
      <Content />
      <h1>Hello World</h1>
    </div>
  )
}


export default App
```

### Both Nav.jsx & Content.jsx rendered in App.jsx
```jsx
import React from 'react'
import Nav from './Nav'
import Content from './Content'
import './App.css'

function App() {
  return (
    <div id='app'>
      <Nav />                {/*Nav component rendered inside App component*/}
      <Content />
      <h1 id='hello'>Hello World</h1>
    </div>
  )
}


export default App
```

### Then App.jsx rendered in main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```
---

## Session 2: -----------------------------------------------------------------------------------------------------------
- Functional Component
- Class Component
- Nested Components
- Git commands: 
   - to create sub branch: git checkout -b branch-name
   - push changes to sub branch: git push --set-upstream origin branch-name or write git push 


### Functional Component:
```jsx
import React from 'react'

function App() {
  return (
    <div>
      <h1 id='hello'>Hello World</h1>
    </div>
  )
}

export default App
```

```jsx
// Render App inside main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

### Class Component:
```jsx
import React from 'react'
import { Component } from 'react';


class Nav extends Component{
    render(){
        return(
            <div>
                <h1>I am Class Component</h1>
            </div>
        )
    }
}

export default Nav
```

### Nested Components: 
- Header.jsx Component
```jsx
import React from 'react'

function Header() {
    return(
        <div>
            <h1>I am Header!!!! 👩🏼‍💻</h1>
        </div>
    )
}

export default Header
```
- Middle.jsx Component
```jsx
import React from 'react'

function Middle(){
    return(
        <div>
            <h1>I am Middle 😍</h1>
            </div>
    )
}

export default Middle
```
- Footer.jsx Component
```jsx
import React from 'react'

function Footer() {
    return(
        <div>
            <h1>I am Footer!!!!😁</h1>
        </div>
    )
}

export default Footer
```
- All components (Header, Middle & Footer) render in App.jsx
```jsx
import React from 'react'
import './App.css'
import Header from './Header'
import Middle from './Middle'
import Footer from './Footer'

function App() {
  return (
    <div id='app'>
      <Header />
      <Middle />
      <Footer />
    </div>
  )
}

export default App
```


---
---
---
---
## REACT with AI Workshop -----------------------------------------------------------------------------------
### React Project Setup: 
- `npm create vite@latest` - new command
  - **cd first** - change directory
  - **npm install** - create node_module folder
  - **npm run dev** - dev, build, lint and preview are scripts. See below. e.g: npm run build, npm run dev
```js
// inside package.json file
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  ```

  ---
  ---
  - **component**:
    -  break the code into multiple files. 
    - Create using class (outdated) and functional components. Component name starts with Capital letter, e.g: Portfoli.jsx
    - Reusability: component can call multiple times
    - More Managable

### // Creating Component Demo.jsx
```jsx
    function Demo() {
    return (
        <div>
            <h1>Basic Syntax to create component</h1>
        </div>
    );
}
export default Demo;
```
### // Using Component Demo.jsx  inside App.jsx
```jsx
import Demo from './Demo'

function App() {

  return (
    <>
     <Portfolio />
     <Demo />
    </>
  )
}

export default App
```


---

  -  **jsx**: a way of writing html code inside the JavaScript file
  - **functional Component (rfc - React Functional Component)**: inside return (write HTML code) & outside return (write JavaScript)
  - **Babel**: inbuilt compiler inside React.js. It converts HTML code or jsx code into JavScript

- **className**: className = "profile"

---

- **package.json**: describes the project's dependencies, scripts and configuration and other details that are required to execute to run the entire reacxt application
- **node_module**: it stores external dependencies of project. Whenever we install some external pacakges through `npm` or `yarn` in a project locally, it gets stored into node_modules folder located at the root of project directory by defualt.


---
---
## Hook: 
- Hooks allow function components to have access to state and other React features.

###  useState Hook: const [state, setState] = useState(initialValue)
- The useState hook is used to manage state in React. State is simply data that can change over time.
- 💡 The useState hook lets us create a state variable, initialize it with data and also gives us access to a setter function that lets us update this state.
> The **useState Hook** provides those two things:
> - A ***state variable*** to retain the data between renders. e.g: count
> - A ***state setter function*** to update the variable and trigger React to render the component again. e.g: setCount

```jsx
// Example
import { useState } from "react";

function Counter() {
    //var count = 0;

    var [count, setCount] = useState(0); 

    function inc() {
        setCount(++count);
    }
    function reset() {
        setCount(0);
    }
    function dec() {
        setCount(--count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => inc()}>Increment</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => dec()}>Decrement</button>
        </div>
    )
}

export default Counter;

```
- React events are named using camelCase, e.g: onClick
- Inside jsx, if you want to write javaScript code, write inside `{}`
- ***State Variables***: when data is dynamic or when you want a data from user when user interactions are there, use state variable to hold the data




---
---

  ## Miscellaneous
  - node.js: open source server environment. It is used to run the code without browser
`npx create-react-app first` - old command
-  npmjs.com - download packages - e.g: tostify


---
---
#### command - clg - for console.log
---
# DAY 2:
## Waht is API - Application Programming Interface
- API help us to setup the communication between frontend and backend. 
- for single product fetching -
```jsx
<img height="100" src={products[0]?.image} />
    <h1>{products[0]?.title}</h1>
```
### useEffect: useEffect(callback, dependencies) 
- It is the hook that manages the side-effects in functional components.

- Life cycle methods (class component)
- Routing
- API Integration
- Form Handling
- useContext, useMemo, useRef
- Redux
- JavaScript - Namaste JavaScript

---
---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
