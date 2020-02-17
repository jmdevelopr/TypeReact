const initState = {
    numOfLetters: 5,
    speed: 500
}

const settingsReducer = (state = initState, action) => {
    if (action.type === 'SET_LETTERS') {
        return Object.assign({}, state, {
            numOfLetters: action.letters
        });
    }
    if (action.type === 'SET_SPEED') {
        return Object.assign({}, state, {
            speed: action.speed
        });
    }
    return state;
}

export default settingsReducer;