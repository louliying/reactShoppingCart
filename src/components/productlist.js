import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../redux/selector';
import Product from './product';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

const ProductList = ({ products }) => {
	return (
		<div>
			<h3>We have products:</h3>
			<ul>
				{products.map(product => (
	                <li key={product.id} className="">
	                    <Product {...product} />
	                </li>
	            ))}
			</ul>
		</div>
	);
}

ProductList.propTypes = {
    products: PropTypes.array,
}

// export default ProductList;
export default connect(mapStateToProps)(ProductList);