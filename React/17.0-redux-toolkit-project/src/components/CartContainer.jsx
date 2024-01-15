import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../store/slices/ModalSlice';

function CartContainer(props) {
    const { cartItems, amt, total} = useSelector( (state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className=' cart'>
            <header>
                <h2>Your Bag</h2>
                {
                    total === 0 && 
                    <h4 className=' empty-cart'>is currently empty</h4>
                }
            </header>
            {
                cartItems.length > 0 &&
                <div>
                    {
                        cartItems.map( (item) => {
                            return <CartItem key={item.id} item={item} amt={amt} total={total}/>
                        })
                    }
                </div>
                
            }
            {
                total > 0 &&
                <footer>
                    <hr></hr>
                    <div className="cart-total">
                        <h4>Total <span>${amt}</span></h4>
                    </div>
                    <button className=' btn clear-btn' onClick={ () => dispatch( showModal())}
                    >Clear Cart</button>
                </footer>
            }

        </div>
    );
}

export default CartContainer;