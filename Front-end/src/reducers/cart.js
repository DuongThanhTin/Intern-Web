import * as Types from '../constants/ActionTypes'

var data= JSON.parse(localStorage.getItem('CART'));

var initialState=[
    {

      
    }
]

const cart  = (state=initialState, action)=>{
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

export default cart ;