import './App.css';
import decor from "./Images/MenuDecoration.png"
import img from './Images/salad.png'

function App() {
  return (
    <div className="App ">
    <img src={img} alt="" className='ImgCenter' />
   
    <div  className="Menu" >
            <div className="container_Menu">
         <h2 className="Menu_Title">Menu</h2>
    <img src={decor} alt="" className="Menu_Img" />
            </div>
      <div className="Types_Container">
    
      </div>

        </div>

    <div className="Item_container">
   
    </div>
  
    </div>
  );
}

export default App;