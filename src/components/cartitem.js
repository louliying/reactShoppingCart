import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CartControl from './cartcontrol';

import { connect } from 'react-redux';
import {getCurrency } from '../redux/selector';

const mapStateToProps = (state, props) => {
    return {
        currency: getCurrency(state, props)
    }
}

class CartItem extends Component{		
	render () {
		let { id, name, price, count, currency, onClick } = this.props;
		return (
			<li>
				<span className="cart-item">{name}</span>
				<div className="cart-item"><CartControl count={count} id={id} /></div>
				<span className="cart-item">{currency}{price*count}</span>
				<span onClick={onClick}>X</span>
			</li>
		);	
	}
}

CartItem.propTypes = {
	id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

// export default CartItem;
export default connect(mapStateToProps)(CartItem);