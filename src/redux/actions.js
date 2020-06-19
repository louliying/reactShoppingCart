import { CART_ADD, CART_REMOVE}  from './const';

/*let count = 0;
export const addCart = (id, content) => ({
	type: 'ADD_CART',
	payload: {
		count: ++count,
		content
	}
})*/

// action creators
export function addToCart(productId, count) {
    return {
        type: CART_ADD,
        payload: {
            productId,
            count
        }
    }
}

export function removeFromCart(productId, count) {
    return {
        type: CART_REMOVE,
        payload: {
            productId,
            count
        }
    }
}
