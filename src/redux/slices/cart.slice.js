import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cart: {},
    total: 0
}

const cartSlice = createSlice({
    name: 'orders',
    initialState: INITIAL_STATE,
    reducers: {
        addCartItem(state, action) {
            state.cart = {
                ...state.cart,
                [action.payload.id]: {
                    title: action.payload.title,
                    authors: action.payload.authors,
                    thumbnail: action.payload.thumbnail,
                    total: action.payload.total
                }
            };
            state.total = state.total + 1
        },
        updateCartItem(state ,action) {
            if(action.payload.total > state.cart[action.payload.id].total) {
                state.total = state.total + 1;
            } else {
                state.total = state.total - 1;
            }
            state.cart = {
                ...state.cart,
                [action.payload.id]: {
                    ...state.cart[action.payload.id],
                    total: action.payload.total
                }
            };
        },
        deleteCartItem(state ,action) {
            state.cart = state.cart;
            state.total = state.total - state.cart[action.payload.id].total;
            delete state.cart[action.payload.id];
        },
        deleteAllItems(state) {
            state.cart = {};
            state.total = 0;
        }
    }
})

export const { addCartItem, updateCartItem,  deleteCartItem, deleteAllItems} = cartSlice.actions;
export default cartSlice.reducer;
