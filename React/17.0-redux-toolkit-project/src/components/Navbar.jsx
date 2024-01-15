import React from 'react';
import { CartIcon } from '../assets/Icons';
import { useSelector } from 'react-redux';

function Navbar(props) {
    const {total} = useSelector( (store) => store.cart);

    return (
        <nav>
            <div className=' nav-center'>
                <h3>Redux ToolKit</h3>
                <div className="nav-container">
                    <CartIcon />
                {
                    total > 0 &&
                    <div className="amount-container animate-bounce">
                        <p className='total-amount'>{total}</p>
                    </div>
                }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;