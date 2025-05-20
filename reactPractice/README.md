## Session 1: -----------------------------------------------------------------------------------------------------------
npm create vite@latest
npm install
npm run dev
imr = import React from 'react'


### 1. Inline Styling
>nav tag -> inline styling; 
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
- Git commands: to create sub branch:
       - git checkout -b branch-name
       - git push --set-upstream origin branch-name or write git push 


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

## Session 3: -----------------------------------------------------------------------------------------------------------
- How to pass data from one component to other component with primitive datatypes using props
> React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. 

```jsx
//Middle.jsx
import React from 'react'
import Footer from './Footer';

function Middle(){
    let data = 'JavaScript!!!!';
    return(
        <div>
            <Footer message = {data}/>
            </div>
    )
}

export default Middle

// --------------- OR --------------------------
function Middle(){
    return(
        <div>
            <Footer message = {'JavaScript!!!!'}/>
            </div>
    )
}

```
```jsx
//Footer.jsx
import React from 'react'

function Footer(props) {
    return(
        <div>
            <h1>{props.message}</h1>
        </div>
    )
}

export default Footer

//----------- OR -------------- //
import React from 'react'

function Footer({message}) {
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Footer
```

```jsx
// App.jsx
import React from 'react'
import './App.css'
import Middle from './Middle'

function App() {
  return (
    <div id='app'>
      <Middle />
    </div>
  )
}

export default App
```
```jsx
// main.jsx

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
**Example2**
```jsx
// Middle.jsx
import React from 'react'
import Footer from './Footer';

function Middle(){
    return(
        <div>
            <Footer message = {'JavaScript!!!!'}
            size = {100}
            arr = {[1,2,3,4]}
            />
            </div>
    )
}

export default Middle
```

```jsx
// Footer.jsx
import React from 'react'

function Footer({message, size, arr}) {
    return(
        <div>
            <h1>{message} {size} {arr}</h1>
        </div>
    )
}

export default Footer

// ----------------------- OR ----------------------------
import React from 'react'

function Footer(props) {
    return(
        <div>
            <h1>{props.message} {props.size} {props.arr}</h1>
        </div>
    )
}
```

## Session 4: -----------------------------------------------------------------------------------------------------------
- Conditional Rendering using ternary operator
- How to iterate the dummy JSON data using map method and render them using components

> Example1: conditional rendering of html tags
```jsx
// App.jsx
import React from 'react'

function App() {
  let result = false;
  return(
    <div>
      {
        result ? <h1>I am true!!</h1> : <h2>I am false!!</h2>
      }
    </div>
  )
}

export default App
```

```jsx
//main.jsx
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
> Example2: conditional rendering of components

```jsx
import React from 'react'

function Content() {
  let contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
  return(
    <div style={contentStyle}>
      <h1>I am Content!!! 🤗</h1>
    </div>
  )
}

export default Content
```

```jsx
import React from 'react'

function Header() {
    return(
        <div>
            <h1>I am Header component!!! 😍</h1>
        </div>
    )
}

export default Header
```
```jsx
import React from 'react'
import Content from './Content';
import Header from './Header';

function App() {
  let result = true;
  return(
    <div>
      {
        result ? <Content/> : <Header/>
      }
    </div>
  )
}

export default App
```
> Example3: Iterate JSON data using map method and render the data using components
```jsx
//Users.jsx
const users = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "role": "Frontend Developer",
      "location": "Stockholm, Sweden",
      "image": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob@example.com",
      "role": "Backend Developer",
      "location": "Gothenburg, Sweden",
      "image": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "id": 3,
      "name": "Clara Lee",
      "email": "clara@example.com",
      "role": "UI/UX Designer",
      "location": "Malmö, Sweden",
      "image": "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ]
  
  export default users
```
```jsx
//App.jsx
function App() {
  let usersStyle = {
    display: 'flex',
    justifyContent: 'space-around', 
  }
  
  return(
    <div>
      {
       users.map((item) => {
        return(
          <div style={usersStyle}>
            <h2>{item.id}</h2>
            <h3>{item.name}</h3>
            <h4>{item.email}</h4>
            <h5>{item.role}</h5>
            <p>{item.location}</p>
            <img style={{marginBottom: '1rem'}} src={item.image} />
          </div>
        )
       })
      }
    </div>
  )
}

export default App
```
> Example3: Iterate JSON data using map method and render the data using different components

```jsx
//Content.jsx
import React from 'react'
import users from './Users'

function Content(){
  return(
    <div style={{ backgroundColor: 'Pink', paddingBlock: '0.5rem', paddingLeft: '0.8rem' }}>
      {users.map((user)=> {
        return(
          <div>
          <h2>{user.id}</h2>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
        </div>
        )
      })
     }
    </div>
  )
}
export default Content
```
```jsx
//Middle.jsx
import React from 'react'
import users from './Users'

function Middle() {
  return (
    <div>
      {users.map((user) => {
        return (
          <div style={{backgroundColor: 'beige', paddingBlock: '0.5rem', paddingLeft: '0.8rem' }}>
            <h5>{user.role}</h5>
            <p>{user.location}</p>
            <img src={user.image} />
          </div>
        );
      })}
    </div>
  );
}
export default Middle
```

```jsx
//App.jsx
import React from 'react'
import Content from './Content';
import Middle from './Middle';

function App() {
  return(
    <div>
      <Content/>
      <Middle/>
    </div>
  )
}
export default App
```


## Session 5: -----------------------------------------------------------------------------------------------------------











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
