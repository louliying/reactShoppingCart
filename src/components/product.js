import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getItems, getCurrency } from '../redux/selector';

import CartControl from './cartcontrol';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    
});

class Product extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: props.count
        };

       // this.changehandle = this.changehandle.bind(this);
    }
	/*handleClick = () => {
        const { id, addToCart} = this.props;
        let count = this.state.count;
        if (count <= 0 ) {
            count = 1;
            this.setState({
                count: count
            });
        }
        console.log('11:', count);
        addToCart(id, count);
    }
    changehandle (e) {
        let value = e.target.value;
        if (value <=0 ) {
            value = 1;
        }
        this.setState({
            count: value
        })
    }*/
	render () {
		const { id, name, price, currency, image } = this.props;
        const count = this.state.count;
		return (
			<div>
				<p>Product name: {name}</p>
				<p>Img:<img src={image} alt={name} /></p>
				<div>Number:<CartControl count={count} id={id} /></div>
				<p>{currency}{price}</p>				
			</div>
		);
	}
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string
}

// export default Product;
export default connect(mapStateToProps, mapDispatchToProps)(Product);
