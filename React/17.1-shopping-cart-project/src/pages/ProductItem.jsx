import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add, remove} from '../redux/slice/CartSlice'
import { toast } from 'react-hot-toast';
import { AiFillStar} from 'react-icons/ai'
import Rating from '../components/Rating';
import Spinner from '../components/Spinner';
import { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function ProductItem() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]); 

    async function fetchProductData(){
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setProducts(data);
        
        } catch (error) {
            alert(error.message);            
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    },[]);

    let location = useLocation();
    let pid = location.pathname.split('/').at(-1);
    let item = products[pid-1];


    const {cart} = useSelector((state) => state);
    const dispacth = useDispatch();

    function removeFromCart() {
        dispacth(remove(item.id));
        toast.error("Item removed from cart")
    }

    function addToCart() {
        console.log("add to cart");
        dispacth(add(item));
        toast.success('Item added to cart');
    }
    
    return (
        <div className=' max-w-6xl mx-auto flex mt-4 gap-x-5 '>
            {
                loading ? 
                (<Spinner />) :
                (
                    item ? 
                    (
                        <div className=' flex gap-x-8 p-2'> 
                            <div className='max-w-4xl flex justify-center items-center'>
                                <img src={item.image} className='h-[400px] aspect-square'/>
                            </div>

                            <div className=' max-w-2xl flex flex-col justify-around'>
                                <div>
                                    <h1 className='  text-gray-700 font-bold text-4xl mt-1 mb-6'>{item.title}</h1>
                                    <h1 className=' text-gray-500 text-lg text-left capitalize mb-4'>{item.description}</h1>
                                    <p className=' text-lg text-gray-500 mb-4'>Category: 
                                        <span className=' text-slate-900 capitalize'> {item.category}
                                        </span>
                                    </p>
                                    <p className=' text-lg text-gray-500 mb-4'>Reviews: 
                                        <span className=' text-slate-900 capitalize'> {item.rating.count}
                                        </span>
                                    </p>
                                    <p className=' text-lg text-gray-500'> Ratings : 
                                        <Rating rating={item.rating.rate}></Rating>
                                    </p>
                                </div>
                                <div className=' flex justify-between item-center gap-x-16 w-full mt-5'>
                                    <p className=' font-bold text-green-600 text-3xl'>${item.price}</p>
                                    <div className=' flex justify-center items-center'>
                                        {
                                            cart.some( (p) => p.id === item.id) ? 
                                            <button onClick={removeFromCart}
                                            className='outline rounded-xl px-4 py-2 text-xl uppercase font-semibold hover:bg-slate-900 hover:text-white'
                                            >Remove Item</button> : 
                                            <button onClick={addToCart}
                                            className=' outline rounded-xl px-4 py-2 text-xl uppercase font-semibold hover:bg-slate-900 hover:text-white'
                                            >Add to Cart</button>
                                        }
                                        <NavLink to='/'>
                                            <button
                                            className=' ml-5 px-4 py-2 text-xl uppercase font-semibold text-white border-2 border-slate-900 bg-green-600 rounded-xl hover:text-slate-900 hover:bg-white
                                            hover:border-green-600 hover:border-2 transition-all duration-300'
                                            >
                                                Shop More</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className=' flex flex-col justify-center items-center w-[80vw] h-[80vh] mx-auto'> 
                            <p className=' text-3xl font-semibold text-slate-900 mb-5'> Item Not Found </p>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default ProductItem;