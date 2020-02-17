import {combineReducers} from 'redux';
import gameReducer from './gameReducer';
import settingsReducer from './settingsReducer';
import scoresReducer from './scoresReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    gameReducer,
    settingsReducer,
    scoresReducer,
    firestoreReducer
});

export default rootReducer;