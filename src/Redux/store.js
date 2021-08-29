import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools} from "redux-devtools-extension";
import { countReducer } from "./reducers/countReducers";
import { userDataReducer } from "./reducers/userDataReducer";


const initialState={
    
}
const middleware=[thunk]

const rootReducer=combineReducers({
    counter:countReducer,
    userData:userDataReducer
})

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
