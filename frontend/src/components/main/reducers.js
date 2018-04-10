import { combineReducers } from 'redux';
import todoAppReducer from '../redux/todoApp/todoAppReducer';

const rootReducer = combineReducers({
    todo: todoAppReducer
});

export default rootReducer;