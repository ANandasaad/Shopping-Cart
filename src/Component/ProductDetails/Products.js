import ItemList from "./ItemList";


const Products=({product})=>{

  if(product?.lenght==0) return <h1>Product Not Found</h1>
 
  return (
    <div className='flex flex-wrap justify-center max-mobile:mx-3'>
{ product?.map((items)=>( <ItemList items={items} key={items.id}/>)) }
    </div>
  )
}

export default Products;