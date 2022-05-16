import { userReducer } from "./reducers/userReducer";
import { applyMiddleware, combineReducers, createStore } from "redux"; 
import thunk from "redux-thunk";


const reducers = combineReducers({
    users: userReducer
})

export const store = createStore( 
    reducers,
    applyMiddleware(thunk) 
)