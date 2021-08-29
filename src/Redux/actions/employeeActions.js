import { getData } from "../constants/employeeConstants";
export const getDataAction = () => (dispatch) => {
    try{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json())
        .then((res) => {dispatch(
            {
                type:getData,
                payload:res
            }
        )})}
        catch(err){
            console.log("Error occurred",err.message)
    }
  
    }
    
  

