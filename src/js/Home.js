import React, {Component} from 'react';
import Start from '../assets/Start.svg';
import {Stopwatch, timeStart, timeStop} from './Stopwatch';
import {gameStart, keyCodeDetect} from './Game';

class Home extends Component {
    letter = "";
    isGameStarted = false;

    gameSwitch = () => {
        if (this.isGameStarted === false) {
            let homeScreen = document.querySelector('.start');
            homeScreen.style.opacity = '0';

            let gameScreen = document.querySelector('.game');
            gameScreen.style.opacity = '1';

            this.letter = gameStart();

            this.isGameStarted = true;
        }
    }

    handleKeyPress = e => {
        let letterType = keyCodeDetect(e);
        if (this.letter === letterType) {
            timeStop();
            this.letter = gameStart();
        }
    }

    render() {
        return (
            <section className="Home grid" >
                <header className="header">
                    <h1>Welcome to TypeReact!</h1>
                    <p>Test your typing reactions</p>
                </header>
                <input type="text" onKeyPress={this.handleKeyPress} onClick={this.gameSwitch}/>
                <main className="start">
                    <img src={Start} alt=""/>
                    <p>To start tap on your screen</p>
                </main>
                <div className="game" onClick={timeStart} >
                    <p>Average: 0.89 s</p>
                    <div className="box"></div>
                    <Stopwatch />
                </div>
            </section> 
        )
    }
}

export default Home;