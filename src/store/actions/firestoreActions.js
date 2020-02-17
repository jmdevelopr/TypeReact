export const addScore = (name, time, device) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //async call
        const firestore = getFirestore();
        firestore.collection('scores').add({
            name,
            time,
            device
        }).then(() => {
            dispatch({type: 'ADD_SCORE'})
        }).catch(err => {
            console.log(err)
        })
    }
}