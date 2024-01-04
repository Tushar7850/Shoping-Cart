import React from 'react'
import { Route ,Routes  } from 'react-router-dom'
import Products from '../Products/Products'
import Cart from '../front Heder/Cart/Cart'




function Rotespage({productItems,cartItems,handleAddProduct,haddleRemoveProduct,handleCartCleareance}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct } haddleRemoveProduct={haddleRemoveProduct} handleCartCleareance={handleCartCleareance}/>} />         
      
        </Routes>
    </div>
  )
}

export default Rotespage