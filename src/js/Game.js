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
    console.log(x)
    return x;
}

const gameStart = e => {

    let letter = makeid(1);
    let box = document.querySelector('.box');
    box.textContent = "";

    setTimeout(()=>{
        box.textContent = letter;
        timeStart();
    }, 2000)
        
    return letter;
}

export { gameStart, keyCodeDetect };