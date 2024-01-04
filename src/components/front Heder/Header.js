import React from 'react'
import { Link } from "react-router-dom"
import './Header.css' ;
// 
import { FaShoppingCart } from "react-icons/fa";

function Header({cartItems}) {
  return (
    <header className='flex justify-between items-center px-10 uppercase bg-black text-white h-16'>
        <div>
            <h1 className='text-4xl font-bold uppercase '><Link to="/">Electronics Shop</Link></h1>
        </div>

        <div >
            <ul className='flex justify-between items-center space-x-5 text-lg'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/sign-up"}>Sign Up</Link>
                </li>
                
                <li className='text-xl flex '>
                    <Link to={"/cart"}>
                        <FaShoppingCart />
                    </Link>
                    <span className='bg-orange-600 text-white p-0.5 rounded-full text-xs px-2  '>{cartItems.length === 0 ? " ":cartItems.length}</span>
                    
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header