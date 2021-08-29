import {INCREMENT,DECREMENT} from '../constants/countConstants';


export const incrementAction = (value) => (dispatch) => {
    try{
            dispatch(
                {
                    type:INCREMENT,
                    payload:value
                }
            )
    }
    catch (err){
        console.log("Error occurred",err.message)

    }


}

export const decrementAction = (value) => (dispatch) => {
    try{
            dispatch(
                {
                    type:DECREMENT,
                    payload:value
                }
            )
    }
    catch (err){
        console.log("Error occurred",err.message)

    }


}
