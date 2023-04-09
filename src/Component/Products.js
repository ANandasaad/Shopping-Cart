import ItemList from "./ItemList";


const Products=({product})=>{
 
  return (
    <div className='flex flex-wrap justify-center max-mobile:mx-3'>
{ product?.map((items)=>( <ItemList items={items} key={items.id}/>)) }
    </div>
  )
}

export default Products;