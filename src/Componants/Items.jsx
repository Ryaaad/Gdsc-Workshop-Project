import Plat from '../Images/plat.png'
const Item = () => {
    return ( 
        <div style={{boxShadow:" 15px 15px 15px 0px rgba(0, 0, 0, 0.08)"}}  className="Items ">
        <img src={Plat} alt="" className='Items_Img' />
        <h3  className='ItemTitle' > Raw Salmon Salad </h3>
        <p   className='ItemSousTitle' >   170 calories</p>
        <div className="ItemLine"></div>
        
        <div className="Item_P">
            <p  className='ItemSousTitle'  >Time</p>
            <p  className='ItemSousTitle'  >Person</p>
        </div>
        <div className="Item_P">
            <p  className='ItemSousTitle2'  >25 minute</p>
            <p  className='ItemSousTitle2'  >2 Person</p>
        </div>
        </div>
     );
}
 
export default Item;