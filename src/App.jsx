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