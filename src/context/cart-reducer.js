const storeCartItems = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
  }

export const sumItems = cartItems => {
    storeCartItems(cartItems);
    return {
        itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
        total: cartItems.reduce((total, product) => total + product.price * product.quantity, 0),
    }
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            // check if item is in cart already
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                // add item to cartItems in current state
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            // return new state
            return {
                ...state,
                cartItems: [...state.cartItems],
                    itemCount: state.cartItems.reduce((total, product) => total + product.quantity, 0),
                    total: state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0)
            }
            case 'INCREASE':
                const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                state.cartItems[increaseIndex].quantity++;
                return {
                    ...state,
                    cartItems: [...state.cartItems],
                        ...sumItems(state.cartItems),
                }
                case 'DECREASE':
                    const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                    const product = state.cartItems[decreaseIndex];
                    if (product.quantity !== 0 && product.quantity !== 1) {
                        product.quantity--;
                    }
                    return {
                        ...state,
                        cartItems: [...state.cartItems],
                            ...sumItems(state.cartItems),
                    }
                    case 'REMOVE_ITEM':
                        const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
                        return {
                            ...state,
                            cartItems: [...newCartItems],
                                ...sumItems(newCartItems),
                        };
                        case 'CLEAR':
                            localStorage.removeItem('cart'); // remove the 'cart' item from local storage
                            return {
                                cartItems: [],
                                itemCount: 0,
                                total: 0,
                            }   
                    default:
                        return state;
    }
}

export default cartReducer;