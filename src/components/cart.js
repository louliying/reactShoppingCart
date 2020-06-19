import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getItems, getCurrency, getTotal } from '../redux/selector';
import {removeFromCart} from '../redux/actions';
import CartItem from './cartitem';

const mapStateToProps = (state, props) => {
    let obj = {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
    return obj;
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => {
    	return dispatch(removeFromCart(id))
    }
});



const Cart = ({items, total, currency, removeFromCart}) => {	
	return (
		<div>
			<h3>Shopping Cart:</h3>			
			{items.length > 0 && (
                <ul>
                    {items.map((item,index) => (
                        <CartItem key={index} {...item} onClick={() => removeFromCart(item.id)}  /> 
                    ))}
                </ul>
            )}
            {items.length === 0 && (
                <div className="">Cart is empty</div>
            )}
			<p>Total Pay: {currency}{total}</p>
		</div>
	)
	
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

// export default Cart;
export default connect(mapStateToProps, mapDispatchToProps)(Cart);