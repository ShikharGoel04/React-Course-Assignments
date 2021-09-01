import axios from "axios";
import { ADD_EMPLOYEE_REQUEST,ADD_EMPLOYEE_SUCCESS,ADD_EMPLOYEE_FAIL,EMPLOYEE_DATA_REQUEST,EMPLOYEE_DATA_SUCCESS,EMPLOYEE_DATA_FAIL } from "../constants/employeeConstants";
import { SEARCH_EMPLOYEE } from "../constants/employeeConstants";
export const getDataAction = () => async (dispatch) => {
    try{
        dispatch({
            type:EMPLOYEE_DATA_REQUEST
        })

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users') 
        console.log("user data",data)
        dispatch({
            type:EMPLOYEE_DATA_SUCCESS,
            payload:data
        })
       }
        catch(error){
           dispatch({
               type:EMPLOYEE_DATA_FAIL,
               payload:error.message
           })
    }
  
    }

    export const addDataAction = (value) => async (dispatch) => {
      
           try{ 
             
            dispatch({
                type:ADD_EMPLOYEE_REQUEST
            })
            const {data}=await axios.post('https://jsonplaceholder.typicode.com/users',value)
            console.log(data);
           dispatch(
                {
                    type:ADD_EMPLOYEE_SUCCESS,
                    payload:data
                }
            )
    }
            catch(error){
                dispatch({
                    type:ADD_EMPLOYEE_FAIL,
                    payload:error.message
                })
        }
      
    }
        
    export const searchEmployeeAction=(search) => (dispatch) => {

         dispatch ({
                type:SEARCH_EMPLOYEE,
                payload:search
            })

        }
    
  

