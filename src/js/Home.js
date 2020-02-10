import React, {Component} from 'react';
import Start from '../assets/Start.svg';
import Game from './Game';
import GameSummary from './GameSummary';
//import {connect} from 'react-redux';

class Home extends Component {

    render() {
        return (
            <section className="Home grid" >
                <header className="header">
                    <h1>Welcome to TypeReact!</h1>
                    <p>Test your typing reactions</p>
                </header>
                
                <main className="start">
                    <img src={Start} alt=""/>
                    <p>To start tap on your screen</p>
                </main>
                <Game />
                <GameSummary />
            </section> 
        )
    }
}



export default Home;