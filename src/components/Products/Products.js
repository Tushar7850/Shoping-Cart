import React from 'react'

function Products({productItems,handleAddProduct}) {
  return (
    <div className='bg-orange-500 flex flex-wrap justify-between w-[90%] mx-20 '>
        {
            productItems.map((product)=>(
                <div className='w-[300px] h-[500px] border-1 rounded-md overflow-hidden p-3.5 mx-10 my-5 bg-white '>
                    <div className='flex flex-col gap-2'>
                    <img className='w-full  max-h-[20rem] ' src={product.image} alt={product.name} />
                    
                        <h2 className='uppercase font-bold h-16 '>{product.name}</h2>
                        
                        <h4 className='text-lg font-semibold'>${product.price}</h4>
                       <button onClick={()=>handleAddProduct(product)} className='bg-black text-white w-full rounded p-2 fond-bold text-xl  ' >Add To Cart</button>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Products