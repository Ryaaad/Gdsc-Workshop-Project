import './App.css';
import { useEffect,useState } from "react"
import Backround from './Images/Backround.png'
import img from './Images/salad.png'
import Menu from './Componants/Menu'
import Item from './Componants/Item'
function App() {
  const [Data, setData] = useState([]);
  const [Type,setType]=useState("Chicken");
  useEffect(() => {
    async function fetchData() {
      let Url;
      if(Type==="Chicken") { Url=`${process.env.PUBLIC_URL}/data/ChickenPlates.json` }
      if(Type==="Salad") { Url=`${process.env.PUBLIC_URL}/data/SaladPlates.json` }
      if(Type==="Sea") { Url=`${process.env.PUBLIC_URL}/data/SeaFoodPlates.json` }
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