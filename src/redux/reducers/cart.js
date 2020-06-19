import {CART_ADD, CART_REMOVE} from '../const';


// 加入购物车的操作  往items里新增productId
function handleCartAdd(state, payload) {
    const {productId, count} = payload;
    let bIsInCart = false;
    state.items.forEach((item) => {
        if (item.productId === productId) {
            item.count = count;
            bIsInCart = true;
        } 
    });
    if (bIsInCart) {
        return {
            ...state,
            items:[
                ...state.items
            ]
        };
    } else {
        return {
            ...state,
            items:[
                ...state.items,
                {productId:productId, count:count}
            ]
        }
    }
}

function handleCartRemove(state, payload) {   
    return {
        ...state,
        items: state.items.filter(item => item.productId !== payload.productId)
    };
}


// car state 的默认值  reducer
const initialState = {
    /*
        items: {
            productId: id,
            count: 0
        }
    */
    items: [], // array of product ids
    currency: '￥'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}




