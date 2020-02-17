const initState = {
    scores: []
}

const scoresReducer = (state = initState, action) => {
    if (action.type === 'ADD_SCORE') {
        console.log('succesfully added a score')
    }
    return state;
}

export default scoresReducer;