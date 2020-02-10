export const addResult = result => {
    return {
        type: 'ADD_RESULT',
        result: result
    }
}

export const resetResults = () => {
    return {
        type: 'RESET_RESULTS'
    }
}

export const setFinalAverage = average => {
    return {
        type: 'SET_FINAL_AVERAGE',
        average
    }
}