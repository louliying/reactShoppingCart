import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { isInCart, getItems, getCount} from '../redux/selector';
import {addToCart, removeFromCart} from '../redux/actions';


const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props),
        items: getItems(state, props),
        count: getCount(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id, count) => dispatch(addToCart(id, count)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
});


class CartControl extends Component {	

    handleAddClick = () => {
        let { id, addToCart, count} = this.props;

        count += 1;
        if (count <= 0 ) {
           count = 1;
        }
        addToCart(id, count);  
       
    }

    handleRemoveClick = () => {
        let { id, count, addToCart, removeFromCart} = this.props;
        count -= 1;
        if (count <= 0 ) {
           count = 0;
            
            removeFromCart(id);
        } else {
            
            addToCart(id, count);   
        }  
    }

    render () {
        const {count} = this.props;
    	return (
    		<p>
                <span className="cart cart-add" onClick={this.handleRemoveClick}>-</span>    			
                <span className="cart">{count}</span>
                <span className="cart cart-add" onClick={this.handleAddClick}>+</span>
    		</p>
    	)
    }
	
}

CartControl.propTypes = {
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

// export default CartControl;
export default connect(mapStateToProps, mapDispatchToProps)(CartControl);