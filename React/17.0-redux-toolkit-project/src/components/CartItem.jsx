import React from 'react';
import { ChevronDown, ChevronUp } from '../assets/Icons';
import { removeItem , increase , decrease} from '../store/slices/CartSlice';
import { useDispatch } from 'react-redux';

function CartItem(props) {
    const dispatch = useDispatch();

    let item = props.item;


    return (
        <div className=' cart-item'>
            <img src={item.img} alt={item.title} />
            <div>
                <h4>{item.title}</h4>
                <h4 className="item-price">${item.price}</h4>
                <button className='remove-btn'
                onClick={ () => dispatch( removeItem(item.id) ) }
                >Remove</button>
            </div>
            <div>
                <button className='amount-btn'
                onClick={ () => dispatch( increase(item.id))}>
                    <ChevronUp />
                </button>
                <p className=' amount'>{item.amount}</p>
                <button className='amount-btn'
                onClick={() => {
                    if(item.amount === 1){
                        dispatch(removeItem(item.id));
                        return;
                    }
                    dispatch( decrease(item.id))
                }}>
                    <ChevronDown />
                </button>
            </div>
        </div>
    );
}

export default CartItem;