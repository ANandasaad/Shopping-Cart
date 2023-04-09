
const ItemList=({items})=>{

    return (<div>
         <div className="shadow-lg w-96 h-78 my-5 hover:scale-95 max-mobile:w-40 max-mobile:h-72 max-mobile:hover:scale-95">
            <div className="items-center ">
                <img className="w-72 h-72 max-mobile:w-40 max-mobile:h-[155px]" src={items.image} alt='cards'/>
            </div>
            <h2 className=" text-[15px] py-3 px-2 mx-3 my-2 max-mobile:py-5">{items.title.substring(0,40)}</h2>
         </div>
    </div>)
}

export default ItemList;