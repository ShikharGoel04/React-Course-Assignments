import { INCREMENT,DECREMENT } from "../constants/countConstants"
export const countReducer=(state={count:0},action) => {
    switch(action.type)
    {
        case INCREMENT:
            return  {...state, count:action.payload}

        case DECREMENT:
            return {...state, count:action.payload}

        default:
            return state
    }


}