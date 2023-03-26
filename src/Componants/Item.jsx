// import Plat from '../Images/salad.png'
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