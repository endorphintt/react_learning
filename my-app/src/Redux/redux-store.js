import DialogsReducer from "./dialogs_reducer";
import ProfileReducer from "./profile_reducer";
import { combineReducers, legacy_createStore } from "redux";


let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagesPage: DialogsReducer,
});

let store = legacy_createStore(reducers);

export default store;