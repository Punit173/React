import ItemReducer from "./ItemReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    ItemReducer : ItemReducer,
    UserReducer : UserReducer
})

export default RootReducer;