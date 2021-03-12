import {combineReducers} from 'redux';
import categoryReducer from './category/category.reducer';

const rootReducer = combineReducers({
    categoryReducer
});

export default rootReducer;