import { timeStart } from "./Stopwatch";

const makeid = length => {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const keyCodeDetect = e => {
    let x = String.fromCharCode(e.which);
    return x;
}

const gameStart = e => {

    let letter = makeid(1);
    let box = document.querySelector('.box');

    //set a random time
    //count down
    //if (time === 0) {
        box.textContent = letter;
        timeStart();
    //}
    return letter;
}

export { gameStart, keyCodeDetect };