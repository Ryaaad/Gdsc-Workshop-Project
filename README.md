# DishDash
In this project, we will be building this Project with React  This project will help you practice everything in React, from components to working with state and props to fetching data with the fetch method.

[React App.webm](https://user-images.githubusercontent.com/87044522/227779611-5120d0e0-a1ed-4573-8ed1-27a43babec0c.webm)


### 🧐 Features

This project includes the following features:

- React components
- Working with state and props
- Fetching data with the fetch method
- working with json files

### 🛠️ Getting Started
To get started with this project, you will need to follow these steps:

1. Go to the started branch of the project.
2. Clone the repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
3. Install the necessary dependencies by running the following command in your terminal:

   ```bash
   npm install
4. Navigate to the project directory:

```bash
   cd myproject   
```   
5. Start the development server by running the following command:

   ```bash
   npm start
6. open your browser and navigate to http://localhost:3000 to view the app.   

 # Adding a background image
 
 for now your Project should look like This : 
 
 
 To add a background image to a React component, you can use the backgroundImage CSS property along with the url() function to specify the image file. Like This : 
 ```javascript
 import Backround from './Images/Backround.png'
  <div style={{backgroundImage: `url(${Backround})` }} className="App ">
```
Note that the image file must be imported into the component and its path must be relative to the current file. Also, any assets that are not in the ./src directory cannot be processed by Webpack and therefore cannot be displayed.

 # Building the Menu

To create the menu for our app, we will need to add the following code to our `Menu.js` file:

```javascript
// Menu.js

import React from 'react';

function Menu() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Menu; 
```
However, since we're working with React, we'll put this code in a separate component. This is because it's good practice to keep our code modular and reusable. By separating our menu code into its own component, we can reuse it throughout our app and make changes to it in one place.

To use the Menu component in our App.js file, we'll need to import it:

```javascript 
import React from 'react';
import Menu from './Menu';

function App() {
  return (
    <div>
      <Menu />
      <h1>Welcome to our app!</h1>
    </div>
  );
}

export default App;
```

## Changes to Menu Component

Now the menu isn't quite as we want it. We need to get Type data from ./data/Type.json. To do that, we'll use the fetch method along with useEffect and useState. Here's the code:
```javascript
import React, { useState, useEffect } from 'react';

function Menu() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('./data/Type.json')
      .then(response => response.json())
      .then(data => setTypes(data));
  }, []);

  return (
    <div>
      <ul>
        {types.map(type => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
```
We use useState to create a state variable called types, which will hold our data from the Type.json file. We also use useEffect to fetch the data when the component mounts.

Inside useEffect, we call fetch to get the data from the Type.json file. We then convert the response to JSON and update the types state variable with the data.

Finally, we render the menu by mapping over the types array and rendering a li element for each type. We use the key prop to provide a unique identifier for each li element.
