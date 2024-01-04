import React from "react";

function Cart({ cartItems, handleAddProduct, haddleRemoveProduct,handleCartCleareance }) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="flex justify-center font-bold">
      <div className="bg-orange-400 w-1/2 mt-5">
        <div className="border-2 border-black  text-center  text-2xl p-2">
          <h2>Shopping Cart</h2>
        </div>
        <div>
          {cartItems.length >= 1 && (
            <button onClick={handleCartCleareance} className="bg-red-700 rounded-xl font-bold text-lg p-2 text-white border-2 border-black mt-2 float-end mr-2">Clear Cart</button>
          )  }
        </div>
        {/*  */}
        <div className="pb-10 border-x-2 border-b-2 border-black">
            {/* NOthing In Cart */}
        <div className="text-center  text-xl pt-10  ">{cartItems.length === 0 && <div>NO Items are Added😜</div>}</div>
{/* Product Added */}
<div>
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-around items-center mt-5 ">
                    <img src={item.image} alt={item.name} className="h-24 w-24 border-2 border-black rounded-md" />
                    <h3 className=" w-48">{item.name}</h3>
                    <div className="flex justify-center space-x-6">
                        
                        <button  onClick={()=>handleAddProduct(item)}> <span className="bg-red-500 text-white text-3xl px-4 flex  pb-1 rounded-lg ">+</span></button>
                        <button  onClick={()=>haddleRemoveProduct(item)}><span className="bg-green-500 text-white text-3xl px-4 flex  pb-1 rounded-lg  ">-</span></button>
                    </div>
                    <p className="text-lg"> {item.quantity} * ${item.price}</p>
                   
                    
                    <br/><br/>

                </div>
            ))}
        </div>


      </div>
      {/*  */}
      <div className="flex  justify-between text-lg px-36 border-b-2 border-x-2 py-2 border-black">
        
            <h4 className="pl-20">Total Price</h4>
          
            <div >

            <h4 >${totalPrice}</h4>
            

            </div>
            
        
            
        </div>
        </div>
      {/*  */}
      {/* <div >
            
        
        <div>
            {cartItems.length === 0 && (
                <div>NO Items are Added😜</div>
            )}
        </div>
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <div>
                        
                        <button onClick={()=>handleAddProduct(item)}>+</button>
                        <button onClick={()=>haddleRemoveProduct(item)}>-</button>
                    </div>
                    <p> item:{item.quantity}</p>
                   
                    <p>Price: ${item.price}</p>
                    <br/><br/>

                </div>
            ))}
        </div>

        <div>
            Total Price: {totalPrice}
        </div>
        </div> */}
    </div>
  );
}

export default Cart;
