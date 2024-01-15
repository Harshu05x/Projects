import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/Caritem'
import toast from 'react-hot-toast';

function Cart(props) {
    const {cart} = useSelector((state) => state);
    const [totalAmt,setTotalAmt] = useState(0);

    useEffect( () => {
        setTotalAmt( 
            cart.reduce( (acc,item) => (
                acc + item.price
            ),0)
        )
    },[cart]);
    return (
        <div className=' max-w-4xl mx-auto mb-8'>
            {
                cart.length > 0 ? 
                (
                    <div className=' flex mb-12 p-4 mt-4 gap-x-10'> 
                        
                        <div className=' max-w-2xl flex flex-col'> 
                            {
                                cart.map( (item) => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                        </div>

                        <div className=' w-full flex flex-col justify-between items-start mt-12'>
                            <div>
                                <p className=' text-xl font-bold text-green-700 uppercase tracking-wider'>Your Cart</p>
                                <p className=' text-4xl font-bold text-green-700 uppercase tracking-widest'>Summary</p>
                                <p className=' text-lg mt-4 font-semibold'>Total Items: <span className=' font-bold'>{cart.length}</span></p>
                            </div>

                            <div className=' w-full'>
                                <p className=' text-lg font-semibold mb-4'>Total Amount: <span className='font-bold'> ${totalAmt.toPrecision(5)}</span></p>
                                <button 
                                className=' w-full px-5 py-2 text-xl font-semibold text-white border-2 border-slate-900 bg-green-600 rounded-xl hover:text-slate-900 hover:bg-white
                                hover:border-green-600 hover:border-2 transition-all duration-300'
                                onClick={ () => {
                                    toast('Congratulations !',
                                        {
                                            style: {
                                                borderRadius: '10px',
                                                background: '#333',
                                                color: '#fff',
                                            },
                                            icon: '🎉😎',
                                        }
                                        );
                                }}
                                >Checkout Now</button>
                            </div>

                        </div>
                    </div>
                ) : 
                (
                    <div className=' flex flex-col justify-center items-center max-w-4xl h-[80vh] mx-auto'> 
                        <p className=' text-3xl font-semibold text-slate-900 mb-5'> Cart is empty </p>
                        <NavLink to='/'
                        >
                            <button
                             className=' px-5 py-2 text-xl font-semibold text-white border-2 border-slate-900 bg-green-600 rounded-xl hover:text-slate-900 hover:bg-white
                             hover:border-green-600 hover:border-2 transition-all duration-300'
                            >
                                Shop Now</button>
                        </NavLink>
                    </div>
                )
            }


        </div>
    );
}

export default Cart;