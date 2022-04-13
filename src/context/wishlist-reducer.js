const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.wishlist.find(item => item.id === action.payload.id)) {
                state.wishlist.push({
                    ...action.payload
                });
            }else {
                const index = state.wishlist.indexOf(action.payload.id);
                state.wishlist.splice(index, 1)
            }


            return {
                ...state,
                wishlist: [...state.wishlist]
            }


            case 'CLEAR':
                return {
                    ...state,
                    wishlist: []
                }
                default:
                    return state;
    }
}

export default wishlistReducer;