import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';

import thunk from 'redux-thunk';

import ImageEditorReducer from './ImageEditor/ImageEditorReducer';
import CanvasGridReducer from './CanvasGridTest/CanvasGridReducer';


const middlewares = [thunk];

const mainReducer = 
    combineReducers({
        ImageEditorReducer,
        CanvasGridReducer
        //Future Reducer
    });

const store = 
    createStore(
        mainReducer, 
        applyMiddleware(...middlewares)
    );

export default store;