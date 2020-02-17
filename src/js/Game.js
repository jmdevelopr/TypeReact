import React, { Component } from "react";
import { connect } from "react-redux";
import {addResult, setFinalAverage} from '../store/actions/gameActions';

class Game extends Component {
    letter = "";
    isGameStarted = false;
    
    ms = 0;
    s = 0;
    timer;

    //BUG! the redux store is delayed by one result
    //temporary solution to the bug:
    //catch the last result at the end manually and add it to the final array
    lastResult = 0;

    //copied from StackOverflow
    makeid = length => {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;

        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    switchToGame = () => {
        if (this.isGameStarted === false) {
            let homeScreen = document.querySelector('.start');
            homeScreen.style.opacity = '0';

            let gameScreen = document.querySelector('.game');
            gameScreen.style.opacity = '1';

            let menu = document.querySelector('.Menu');
            menu.style.pointerEvents = 'none';

            this.letter = this.gameStart();

            this.isGameStarted = true;
        }
    }

    gameStart = () => {
        let letter = this.makeid(1);

        let box = document.querySelector('.box');
        box.textContent = "";

        let header = document.querySelector('.header');
        header.style.opacity = 0;
    
        setTimeout(()=>{
            box.textContent = letter;
            this.timeStart();
        }, this.props.speed)
        //500 for testing purposes, will be changed to a random value
            
        return letter;
    }

    keyCodeDetect = e => {
        let x = String.fromCharCode(e.which);
        return x;
    }

    handleKeyPress = e => {
        //let letterType = this.keyCodeDetect(e);

        let letterType = e.target.value.split('').slice(-1)[0].toLowerCase();

        if (this.letter === letterType) {
            this.timeStop();

            if (this.props.results.length !== (this.props.letters - 1)) {
                this.letter = this.gameStart(); 
            } 
            else {
                this.gameFinish();
            }
        }
    }

    gameFinish = () => {
        this.isGameStarted = false;

        let average = document.querySelector('.average');
        average.textContent = '0.00 s';

        let game = document.querySelector('.game');
        game.style.pointerEvents = 'none';
        game.style.opacity = '0';

        let gameSummary = document.querySelector('.game-summary');
        gameSummary.style.opacity = '1';
        gameSummary.style.pointerEvents = 'all';

        let menu = document.querySelector('.Menu');
        menu.style.pointerEvents = 'all';
        
        this.props.setFinalAverage(this.timeAverage());
    }

    timeStart = () => {
        this.timer = setInterval(this.timeRun, 10);
    }
      
    timeStop = () => {
      let result = this.ms + this.s*100;
      this.props.addResult(result);

      //BUG! catch the last result
      this.lastResult = result;

      clearInterval(this.timer);

      let stopwatch = document.querySelector('.stopwatch');
      stopwatch.textContent = "0.00 s";
      let average = document.querySelector('.average');
      average.textContent = `Average: ${this.timeAverage()} s`;

      this.ms = 0;
      this.s = 0;
    }

    //Average to do in gameReducer.js
    //is here because of the lastResult bug
    timeAverage = () => {
        let average = this.props.results.length > 0 ? 
                      (this.props.results.reduce((a,b) => a+b) + this.lastResult) 
                      / (this.props.results.length + 1) :
                      this.lastResult;
        return Math.round(average)/100;
    }
      
    timeRun = () => {
      let stopwatch = document.querySelector('.stopwatch');
      stopwatch.textContent = this.s + "." + this.ms + " s";

      this.ms++;

      if (this.ms === 100) {
        this.ms = 0;
        this.s++;
      }
    }

    render() {

        return (
            <div className="game">
                <input type="text" className="input" onChange={this.handleKeyPress} onClick={this.switchToGame}/>
                <p className="average">Average: 0.00 s</p>
                <div className="box"></div>
                <div className="stopwatch">0.00 s</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isGameStarted: state.gameReducer.isGameStarted,
        results: state.gameReducer.results,
        average: state.gameReducer.average,
        letters: state.settingsReducer.numOfLetters,
        speed: state.settingsReducer.speed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addResult: result => dispatch(addResult(result)),
        setFinalAverage: average => dispatch(setFinalAverage(average))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);