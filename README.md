# DishDash
In this project, we will be building this website with React  This project will help you practice everything in React, from components to working with state and props to fetching data with the fetch method.

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
   cd starter 
   ```   
5. Start the development server by running the following command:

   ```bash
   npm start
6. open your browser and navigate to http://localhost:3000 to view the app.   

 # Adding a background image
 
 for now your Project should look like This : 
 ![download](https://user-images.githubusercontent.com/87044522/227791384-817a988d-c2c7-4fec-a212-aa6cb21b5b38.png)

 
 To add a background image to a React component, you can use the backgroundImage CSS property along with the url() function to specify the image file. Like This : 
 ```javascript
 import Backround from './Images/Backround.png'
  <div style={{backgroundImage: `url(${Backround})` }} className="App ">
```
Note that the image file must be imported into the component and its path must be relative to the current file. Also, any assets that are not in the ./src directory cannot be processed by Webpack and therefore cannot be displayed.

 # Building the Menu

The Code For the Menu is in the App.js File : 

 ```javascript
 // Menu.js

  <div  className="Menu" >
            <div className="container_Menu">
         <h2 className="Menu_Title">Menu</h2>
    <img src={decor} alt="" className="Menu_Img" />
    </div>
 
 ```
 
but since we're working with React, we'll put this code in a separate component. This is because it's good practice to keep our code modular and reusable. By separating our menu code into its own component, we can reuse it throughout our app and make changes to it in one place.
To Do That Create File that Ends with .js or .jsx put the code in the return : 

 ```javascript
// Menu.js
  import decor from "../Images/MenuDecoration.png"
   const Menu=()=>{
  
  return ( 
  Menu code Here
  )
   }
  export default App;
 
```

To use the Menu component in our App.js file, we'll need to import it:

```javascript 
import React from 'react';
import Menu from './Menu';

function App() {
  return (
    <div>
    ...........
      <Menu />
      ........
    </div>
  );
}

export default App;
```

## Changes to Menu Component

Now the menu isn't quite as we want it. We need to get the Type data from ./data/Type.json. To do that, we'll use the fetch method along with useEffect and useState. Here's the code:
```javascript
import decor from "../Images/MenuDecoration.png"
import { useEffect,useState } from "react"
const Menu = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response =await fetch(`${process.env.PUBLIC_URL}/data/Type.json`);
        const json = await response.json();
        console.log(json);
        setData(json);
      }

      fetchData();

    }, []);
    return ( 
        <div className="Menu" >
            <div className="container_Menu">
         <h2 className="Menu_Title">Menu</h2>
    <img src={decor} alt="" className="Menu_Img" />
            </div>
      <div className="Types_Container">
      {Data.map(data=>{
        return <div key={data.Type} className="Type" >
               <div className="Type_Gap">
               <img src={data.Type_Img} alt="" className="Type_img" />
               <p className="Type_Text">{data.Type}</p>
               </div>
               <p className="Type_Nbr">{data.Type_Nbr} Plates </p>
        </div>
       })}
      </div>

        </div>
     );
}
 
export default Menu;
```
We use useState to create a state variable called types, which will hold our data from the Type.json file. We also use useEffect to fetch the data when the component mounts.

Inside useEffect, we call fetch to get the data from the Type.json file. We then convert the response to JSON and update the types state variable with the data.

Finally, we render the menu by mapping over the types array and rendering a li element for each type. We use the key prop to provide a unique identifier for each li element.


### Adding Props 

To add props to the components

1. Open the Menu.js file and add props as a parameter to the Menu function:

   ```javascript 
   function Menu(props) {...}
   ```
2. In the Div , we add an event listeners using the onClick attribute :

 ```javascript 
  <div className="Type" onClick={()=> props.setType(data.Type)} >
 ``` 

3. In the App.js Componants we pass the props and write the useEffect function :

 ```javascript 
   import './App.css';
import { useEffect,useState } from "react"
import Backround from './Images/Backround.png'
import salad from './Images/salad.png'
import chicken from './Images/stack.png'
import seafood from './Images/Salmon.png'
import Menu from './Componants/Menu'
function App() {
  const [Data, setData] = useState([]);
  const [Type,setType]=useState("Chicken");
  const [img,setimg]=useState(chicken);
  useEffect(() => {
    async function fetchData() {
      let Url;
      if(Type==="Chicken") { Url=`${process.env.PUBLIC_URL}/data/ChickenPlates.json` ; setimg(chicken) }
      if(Type==="Salad") { Url=`${process.env.PUBLIC_URL}/data/SaladPlates.json` ; setimg(salad) }
      if(Type==="Sea Food") { Url=`${process.env.PUBLIC_URL}/data/SeaFoodPlates.json` ; setimg(seafood) }
      const response =await fetch(Url);
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    fetchData();
  }, [Type]);
  return (
    <div style={{backgroundImage: `url(${Backround})` }} className="App ">
   ........
    <Menu setType={setType} ></Menu>
   ........
    </div>
  );
}

export default App;
 ``` 
 
 
 ### Item 
 
 in the same way as thee Menu componants we'll write the code in new componants and we'll need to import it in App.js and pass the needed props:
 
 ```javascript 
import React from 'react';
import Menu from './Item';

function App() {
  return (
    <div>
    ...........
      <Item key={data.Name}  Name={data.Name} Calories={data.Calories} img={data.img} Time={data.Time} person={data.person}  />
      ........
    </div>
  );
}

export default App;
```
 By Now the Code should be like this: 
 ### Item.jsx : 
 ```javascript 
 const Item = (props) => {
    return ( 
        <div style={{boxShadow:" 15px 15px 15px 0px rgba(0, 0, 0, 0.08)"}}  className="Items ">
        <img src={props.img} alt="" className='Items_Img' />
        <h3  className='Item_Title' > {props.Name} </h3>
        <p   className='Item_Sous_Title' > {props.Calories} calories</p>
        <div className="Item_Line"></div>

        <div className="Item_P">
            <p  className='Item_Sous_Title'  >Time</p>
            <p  className='Item_Sous_Title'  >Person</p>
        </div>
        <div className="Item_P">
            <p  className='Item_Sous_Title2'  >{props.Time} minute</p>
            <p  className='Item_Sous_Title2'  >{props.person} Person</p>
        </div>
        </div>
     );
}
 
export default Item;
```

### Menu.jsx 
 ```javascript 
import decor from "../Images/MenuDecoration.png"
import { useEffect,useState } from "react"
const Menu = (props) => {
    const [Data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response =await fetch(`${process.env.PUBLIC_URL}/data/Type.json`);
        const json = await response.json();
        console.log(json);
        setData(json);
      }

      fetchData();

    }, []);
    return ( 
        <div className="Menu" >
            <div className="container_Menu">
         <h2 className="Menu_Title">Menu</h2>
    <img src={decor} alt="" className="Menu_Img" />
            </div>
      <div className="Types_Container">
      {Data.map(data=>{
        return <div key={data.Type} className="Type" onClick={()=> props.setType(data.Type) } >
               <div className="Type_Gap">
               <img src={data.Type_Img} alt="" className="Type_img" />
               <p className="Type_Text">{data.Type}</p>
               </div>
               <p className="Type_Nbr">{data.Type_Nbr} Plates </p>
        </div>
       })}
      </div>

        </div>
     );
}
 
export default Menu;
```
### App.jsx

 ```javascript 
import './App.css';
import { useEffect,useState } from "react"
import Backround from './Images/Backround.png'
import salad from './Images/salad.png'
import chicken from './Images/stack.png'
import seafood from './Images/Salmon.png'
import Menu from './Componants/Menu'
import Item from './Componants/Item'
function App() {
  const [Data, setData] = useState([]);
  const [Type,setType]=useState("Chicken");
  const [img,setimg]=useState(chicken);
  useEffect(() => {
    async function fetchData() {
      let Url;
      if(Type==="Chicken") { Url=`${process.env.PUBLIC_URL}/data/ChickenPlates.json` ; setimg(chicken) }
      if(Type==="Salad") { Url=`${process.env.PUBLIC_URL}/data/SaladPlates.json` ; setimg(salad) }
      if(Type==="Sea Food") { Url=`${process.env.PUBLIC_URL}/data/SeaFoodPlates.json` ; setimg(seafood) }
      const response =await fetch(Url);
      const json = await response.json();
      console.log(json);
      setData(json);
    }

    fetchData();

  }, [Type]);
  return (
    <div style={{backgroundImage: `url(${Backround})` }} className="App ">
    <img src={img} alt="" className='ImgCenter' />
    <Menu setType={setType} ></Menu>
    <div className="Item_container">
   {Data.map(data=>{
    return <Item key={data.Name}  Name={data.Name} Calories={data.Calories} img={data.img} Time={data.Time} person={data.person} ></Item>
   })}
    </div>
  
    </div>
  );
}

export default App;
```

 
 And you should Have the project working as The video 👆
 
 
 
