//import {createStore} from 'redux';

/*var initialState={
    status: false,
}

var myReducer =(status = initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
    }
    return status;
}
const store = createStore(myReducer);
store.dispatch(action.type);
console.log(store.getState())*/


/*Mới vô là 
- Khởi tạo store
- khởi tạo các biến mặc định cho State (initialState) 
- Khơi tạo reducer, reducer sẽ chứa các state mặc dịnh và các action
- tạo biến store để tạo chứa store và reducer ( const store = createStore(reducer))
- Dispatch để chạy các hành động action, thay đổi các giá trị dựa vào hoạt động action
- Các hành động action được khởi tạo và có những hành động đặt trong reducer

*/