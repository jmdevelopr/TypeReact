import {combineReducers} from 'redux';
import gameReducer from './gameReducer';
import settingsReducer from './settingsReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    gameReducer,
    settingsReducer,
    firestoreReducer
});

export default rootReducer;