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