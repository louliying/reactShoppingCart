// selectors product
export function getProducts(state, props) {
    state.products.forEach(product => {
        product.count = 0;
    });
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}




// selectors cart
export function isInCart(state, props) {
    state.cart.items.forEach((item) => {
        if (item.productId === props.id) {
            return true;
        }
    });
    return false;
    // return state.cart.items.indexOf(props.id) !== -1;
}
// 这里把只有productId的 state.cart.items ， 每一项与product的信息组件起来了。
export function getItems(state, props) {
    /*console.log('state.cart.item1111:', state.cart.items);
    let newArr = state.cart.items.map(item => {
        let id = item.productId;
        let obj = getProduct(state, { id });
        console.log('aaa: obj :', obj);
        obj.count = item.count;
        return obj;
    });  
    console.log('newArr:', newArr);  
    return newArr;
    */
    return state.cart.items.map((item) => {
    	let id =  item.productId;
        let obj = getProduct(state, { id });
        obj.count = +item.count;
        return obj;
    });
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((totoal, item) => {
    	let id = item.productId;
        const itemProduct = getProduct(state, { id });
        return totoal + itemProduct.price * itemProduct.count;
    }, 0);
}

export function getCount(state, props) {    
    let count = 0;
    state.cart.items.forEach((item) => {
        if (item.productId === props.id) {
            count = item.count;
        }
    });
    return count;
}