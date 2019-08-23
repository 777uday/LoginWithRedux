import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import countReducer from './countReducer';
import isLoading from './common/isloading';

export default combineReducers({
    loginReducer : loginReducer,
    count : countReducer,
    isLoading : isLoading
});