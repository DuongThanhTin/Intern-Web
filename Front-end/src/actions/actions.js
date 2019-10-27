import * as types from '../constants/ActionTypes'

export const ADD_TO_CART = (product,quantity) =>({
    type: types.ADD_TO_CART,
    product,
    quantity
})


