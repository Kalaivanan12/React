import { combineReducers, createStore } from "redux";
import counter from "./counter";


const allreducer=combineReducers({
    count:counter
})

const mystore=createStore(allreducer)

export default mystore