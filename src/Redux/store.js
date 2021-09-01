import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools} from "redux-devtools-extension";
import { countReducer } from "./reducers/countReducers";
import { userDataReducer,searchEmployeeReducer,addEmployeeReducer } from "./reducers/employeeReducers";


const initialState={
    
}
const middleware=[thunk]

const rootReducer=combineReducers({
    counter:countReducer,
    userData:userDataReducer,
    search:searchEmployeeReducer,
    addEmployee:addEmployeeReducer
})

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
