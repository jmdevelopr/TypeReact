import React, {Component} from 'react';
import Start from '../assets/Start.svg';

class Home extends Component {
    render() {
        return (
            <div className="Home grid">
                <div className="header">
                    <h1>Welcome to TypeReact!</h1>
                    <p>Test your typing reactions</p>
                </div>
                <div className="start">
                    <img src={Start} alt=""/>
                    <p>To start tap on your screen</p>
                </div>
            </div> 
        )
    }
}

export default Home;