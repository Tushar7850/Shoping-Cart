

import { BrowserRouter } from "react-router-dom";
import Data from "./Data/Data";
import Header from "./front Heder/Header";
import Rotespage from "./Routes/Rotespage";
import { useState } from "react";




function ShopingCartUsingProps() {
  const { productItems } = Data ;
  const [cartItems, setCartItems] = useState([])
 
  const handleAddProduct=(product)=>{

    const ProductEXist = cartItems.find((item) => item.id === product.id) ;

    if(ProductEXist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductEXist, quantity : ProductEXist.quantity + 1}  :  item ))
    }
 else{
        setCartItems([...cartItems,{...product,quantity:1}])
        
    }
  }



  const haddleRemoveProduct=(product)=>{
    const ProductEXist = cartItems.find((item)=> item.id === product.id) ;

    if(ProductEXist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id))
    }
    else{
      setCartItems(
        cartItems.map((item)=> item.id === product.id ? {...ProductEXist,quantity:ProductEXist.quantity - 1}:item)
      )
    }
  }


  const handleCartCleareance=()=>{
    setCartItems([])

  }

  return (
    <div >
      <BrowserRouter>
      
     
     <Header cartItems={cartItems}/>
     <Rotespage
      productItems={productItems}
       cartItems={cartItems}
       handleAddProduct={handleAddProduct}
        haddleRemoveProduct={haddleRemoveProduct}
        handleCartCleareance={handleCartCleareance}
        />
      </BrowserRouter>
    
    
    </div>
  );
}

export default ShopingCartUsingProps;
