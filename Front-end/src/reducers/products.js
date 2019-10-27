import * as Types from '../constants/ActionTypes'


var initialState=[
    {
        product:{},
        quantity: 5,
    }
]

const products  = (state=initialState, action)=>{
    var{product,quantity}= action;
    switch(action.type){
        case Types.ADD_TO_CART:
            state.push({
                product,
                quantity
            })
            return [...state]
        default: return [...state];
    }
}

export default products ;