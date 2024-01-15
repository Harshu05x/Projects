import React, { useEffect, useState } from 'react';
import Product from '../components/Product'
import Spinner from '../components/Spinner';

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]); 

    async function fetchProductData(){
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            let data = await response.json();
            setProducts(data);
        
        } catch (error) {
            alert(error.message);            
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    },[]);

    return (
        <div className='h-full bg-slate-400 p-4' >
            {
                loading ? (<Spinner />) :
                products.length > 0 ? 
                (
                    <div className='grid grid-cols-4 max-w-6xl mx-auto bg-slate-400'>
                        {
                            products.map( (product,index) => (
                                <div className=''> 
                                    <Product product={product} key={index}/>
                                </div>
                            ))
                        }
                    </div>
                ) :
                (<div className=' flex justify-center items-center text-4xl'> <p> No Data Found </p> </div>)
            }

        </div>
    );
}

export default Home;