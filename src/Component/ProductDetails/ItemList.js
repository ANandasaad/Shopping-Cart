import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemList=({items})=>{
    


    return (<div>
        <Link to={"/product/" + items.id}>
         <div className="shadow-lg w-96 h-78 my-5 hover:scale-95 max-mobile:w-64 max-mobile:h-74 max-mobile:hover:scale-95">
            <div className="items-center ">
            
                <img className="w-72 h-72 max-mobile:w-40 max-mobile:h-[155px]" src={items.image} alt='cards'/>
            </div>
            <div className="flex justify-between items-center">
            <p className="max-mobile:px-2  max-mobile:py-2 max-mobile:text-center px-2 mx-2">Rs {items.price.toFixed(2)}</p>    
            <p className=" text-[15px] py-3 px-2 mx-3 my-2 max-mobile:py-5">{items.title.substring(0,40)}</p>
            <p className={"max-mobile:pr-2 max-mobile:py-2 flex items-center mr-2"}><span className="text-yellow-400"><AiFillStar/></span>{items.rating?.rate }</p>    
            </div>
         </div>
         </Link>
    </div>)
}

export default ItemList;