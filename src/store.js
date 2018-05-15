import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';

import thunk from 'redux-thunk';

import ImageEditorReducer from './ImageEditor/ImageEditorReducer';

const mainReducer = 
    combineReducers({
        ImageEditorReducer,
        //Future Reducer
    });

const store = 
    createStore(
        mainReducer, 
        applyMiddleware(thunk)
    );

export default store;