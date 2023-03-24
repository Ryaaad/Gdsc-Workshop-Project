import decor from "../Images/MenuDecoration.png"
import Type from "../Images/plat.png"
import { useEffect,useState } from "react"
const Menu = () => {
    const a=[1,2,3];
     
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("../data/type.json");
        const json = await response.json();
        console.log(response);
        setData(response);
      }
  
      fetchData();
     
    }, []);
    
    return ( 
        <div  className="Menu" >
            <div className="container_Menu">
         <h2 className="Menu_Title">Menu</h2>
    <img src={decor} alt="" className="Menu_Img" />
            </div>
      <div className="Types_Container">
       {a.map(a=>{
        return <div key={a} className="Type" >
               <div className="Type_Gap">
               <img src={Type} alt="" className="Type_img" />
               <p className="Type_Text">SeaFood</p>
               </div>
               
               <p className="Type_Nbr">15 Plates</p>
        </div>
       })}
      </div>

        </div>
     );
}
 
export default Menu;