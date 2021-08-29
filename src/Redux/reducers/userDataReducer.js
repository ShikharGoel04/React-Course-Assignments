import { getData } from "../constants/employeeConstants"
export const userDataReducer=(state={userData:[]},action) => {
    switch(action.type)
    {
        case getData:
            return  {...state, userData:action.payload}

        default:
            return state
    }


}