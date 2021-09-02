import { SEARCH_EMPLOYEE,EMPLOYEE_DATA_FAIL,EMPLOYEE_DATA_REQUEST,EMPLOYEE_DATA_SUCCESS, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL } from "../constants/employeeConstants"
export const userDataReducer=(state={userData:[]},action) => {
    switch(action.type)
    {
        case EMPLOYEE_DATA_REQUEST:
            return  {state, loading:true}

        case EMPLOYEE_DATA_SUCCESS:
            console.log("success",action.payload)
            return  {...state, userData:action.payload,loading:false }
           
        
        case EMPLOYEE_DATA_FAIL:
            return {...state, loading:false,error:action.payload}
        
        default:
            return {...state,loading:false}
    }


}

export const addEmployeeReducer=(state={newUserData:[]},action) => {
    switch(action.type)
    {
        case ADD_EMPLOYEE_REQUEST:
            return  {...state, loading:true}

        case ADD_EMPLOYEE_SUCCESS:
            return  {...state, newUserData:action.payload,loading:false }
    
        case ADD_EMPLOYEE_FAIL:
            return {...state, loading:false,error:action.payload}
    
        default:
            return {...state,loading:false}
    }
}

export const searchEmployeeReducer = (state = {searchData:""},action) => {

    switch(action.type)
    {
        case SEARCH_EMPLOYEE:
            return  {...state, searchData:action.payload}
        
            default:
                return {...state}
    }

}
