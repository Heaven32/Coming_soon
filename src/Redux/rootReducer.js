import {ASYNC_INCREMENT, DECREMENT, INCREMENT} from "./types";

const rootReducer = (state, action) => {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } 
    return state;
}

export default rootReducer;