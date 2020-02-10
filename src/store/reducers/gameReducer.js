const initState = {
    isGameStarted: false,
    results: [],
    average: 0
}

const gameReducer = (state = initState, action) => {
    if (action.type === 'ADD_RESULT') {
        ///console.log(state)
        let newResults = [...state.results, action.result];

        //console.log(newResults)

        return Object.assign({}, state, {
            results: newResults
        });

        //return {...state, results}
    }
    if (action.type === 'RESET_RESULTS') {
        return Object.assign({}, state, {
            results: []
        });
    }
    if (action.type === 'SET_FINAL_AVERAGE') {
        return Object.assign({}, state, {
            average: action.average
        });
    }
    return state;
}

export default gameReducer;