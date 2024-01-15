import React from 'react';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { remove } from "../redux/slice/CartSlice"
import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Product from './Product';


function Caritem(props) {
    let item = props.item;
    const dispacth = useDispatch();

    function removeFromCart() {
        dispacth(remove(item.id));
        toast.error("Item removed from cart")
    }

    return (
        <div className='w-full'>
            
            <div className=' flex border-b border-black p-4 mb-4 gap-x-4'>
                <div className=' flex justify-center items-center'>
                    <img src={item.image} className='h-[150px] w-[250px]'/>
                </div>
                <div className=' flex flex-col max-w-xl gap-y-2'>
                    <NavLink to={`/product/${item.id}`} className=' text-xl text-slate-900 font-bold mb-2'>{item.title}</NavLink>
                    <h1 className=' text-base text-gray-700 mb-2'>{item.description.substring(0,100) + '...'}</h1>

                    <div className=' flex justify-between'>
                        <p className=' text-green-700 text-lg font-bold'>${item.price}</p>
                        <div className=' w-8 h-8 bg-red-200 rounded-full flex justify-center items-center text-sm text-red-700'>
                            <button onClick={removeFromCart}
                            >
                                <RiDeleteBin5Fill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Caritem;