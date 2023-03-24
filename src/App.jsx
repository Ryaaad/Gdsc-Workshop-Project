import './App.css';
import Backround from './Images/Backround.png'
import img from './Images/plat.png'
import Menu from "./Componants/Menu"
import Item from "./Componants/Items"
function App() {
  const A=[1,2,3,4]
  return (
    <div style={{backgroundImage: `url(${Backround})` }} className="App ">
    <img src={img} alt="" className='ImgCenter' />
    <Menu></Menu>
    <div className="Itemcontainer">
    {A.map(a=>{
      return <Item></Item>
    })}
    </div>
  
    </div>
  );
}

export default App;