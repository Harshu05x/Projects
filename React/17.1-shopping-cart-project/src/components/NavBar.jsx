import React from 'react';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';

function NavBar(props) {
    const {cart} = useSelector((state) => state)
    return (
        <div className=''>
            <div className=' flex justify-between items-center max-w-6xl mx-auto h-20 py-2'>
                <NavLink to='/'>
                    <img src={logo} alt="" width={160} height={32}/>
                </NavLink>

                <div className='flex justify-center items-center gap-x-6 text-slate-100 mr-5 text-base'>
                    <NavLink to='/'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='/cart' className='relative'>
                        <FaShoppingCart className=' text-2xl'/>
                        {
                            cart.length > 0 && 
                            <p className=' absolute -top-1 -right-2 bg-green-600 w-5 h-5 rounded-full
                             text-white text-xs flex justify-center items-center animate-bounce
                            '>{cart.length}</p> 
                        }
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;