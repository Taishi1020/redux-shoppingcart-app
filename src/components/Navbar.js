import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../HearoIcons';

const Navbar = () => {
    const {amount} = useSelector((state) => state.cart)
    console.log(amount);
  return (
    <nav>
        <div className="nav-center">
            <h3>React Shopping</h3>
            <div className="nav-container">
                <CartIcon/>
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
