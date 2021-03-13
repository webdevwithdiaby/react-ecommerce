import {combineReducers} from 'redux';
import categoryReducer from './category/category.reducer';
import collectionReducer from './collection/collection.reducer';

const rootReducer = combineReducers({
    categoryReducer,
    collectionReducer
});

export default rootReducer;