import React from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculations , getCartItems } from './store/slices/CartSlice';
import Modal from './components/Modal';
import Loader from './components/Loader';

function App(props) {
    const { cartItems, isLoading } = useSelector((state) => state.cart);
    const  { show }   = useSelector( (state) => state.modal);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( calculations() );
    },[cartItems]);

    useEffect( () => {
        dispatch( getCartItems() );
    },[]);

    return (
        <div>
            {
                isLoading ? 
                (
                    <div>
                        <Navbar />
                        <Loader />
                    </div>
                ) :
                (
                    <div className=''> 
                    {
                        show && <Modal />
                    }       
                    <Navbar />
                    <CartContainer />
                </div>
                )
            }
        </div>
        
    );
}

export default App;