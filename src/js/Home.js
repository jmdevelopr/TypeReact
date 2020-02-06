import React, {Component} from 'react';
import Start from '../assets/Start.svg';
import {Stopwatch, timeStart, timeStop} from './Stopwatch';
import {gameStart, keyCodeDetect} from './Game';

class Home extends Component {
    letter = "";

    gameSwitch = () => {
        let homeScreen = document.querySelector('.start');
        let gameScreen = document.querySelector('.game');

        homeScreen.style.opacity = '0';
        //homeScreen.style.pointerEvents = 'none';
        gameScreen.style.opacity = '1';
        //gameScreen.style.pointerEvents = 'all';

        this.letter = gameStart();
    }

    handleKeyPress = e => {
        let letterType = keyCodeDetect(e);
        if (this.letter === letterType) {
            timeStop();
        }
    }

    render() {
        return (
            <section className="Home grid" onClick={this.gameSwitch}>
                <header className="header">
                    <h1>Welcome to TypeReact!</h1>
                    <p>Test your typing reactions</p>
                </header>
                <main className="start">
                    <img src={Start} alt=""/>
                    <p>To start tap on your screen</p>
                    <input type="text" size="40" onKeyPress={this.handleKeyPress} />
                </main>
                <div className="game" onClick={timeStart} >
                    <p>Average: 0.89 s</p>
                    <div className="box">R</div>
                    <Stopwatch />
                </div>
            </section> 
        )
    }
}

export default Home;