import data from './collection.data';

const INITIAL_STATE = {
    collections: data,
};

const collectionReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state
    }
}

export default collectionReducer;