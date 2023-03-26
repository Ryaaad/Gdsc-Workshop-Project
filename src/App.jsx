import './App.css';
import { useEffect,useState } from "react"
import Backround from './Images/Backround.png'
import img from './Images/salad.png'
import Menu from './Componants/Menu'
import Item from './Componants/Item'
function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response =await fetch(`${process.env.PUBLIC_URL}/data/ChickenPlates.json`);
      const json = await response.json();
      console.log(json);
      console.log(response);
      setData(json);
    }

    fetchData();

  }, []);
  return (
    <div style={{backgroundImage: `url(${Backround})` }} className="App ">
    <img src={img} alt="" className='ImgCenter' />
    <Menu></Menu>
    <div className="Item_container">
   {Data.map(data=>{
    return <Item Name={data.Name} Calories={data.Calories} img={data.img} Time={data.Time} person={data.person} ></Item>
   })}
    </div>
  
    </div>
  );
}

export default App;