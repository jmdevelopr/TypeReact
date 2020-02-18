import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {setLetters, setSpeed} from '../store/actions/settingsActions';

class Settings extends Component {

    decreaseLetters = () => {
        if (this.props.letters !== 5) {
            let newLetters = this.props.letters-5;
            this.props.setLetters(newLetters);
        }
    }

    increaseLetters = () => {
        if (this.props.letters !== 15) {
            let newLetters = this.props.letters+5;
            this.props.setLetters(newLetters);
        }
    }

    decreaseSpeed = () => {
        if (this.props.speed !== 1500) {
            let newSpeed = this.props.speed+500;
            this.props.setSpeed(newSpeed);
        }
    }

    increaseSpeed = () => {
        if (this.props.speed !== 500) {
            let newSpeed = this.props.speed-500;
            this.props.setSpeed(newSpeed);
        }
    }

    render() {
        return (
            <section className="Settings grid">
                <header className="header">
                    <h1>Set up your TypeReact!</h1>
                    <p>Change the gamemode</p>
                </header>
                <main className="setups">
                    <ul>
                        <li className="grid">
                            <p>Number of letters: {this.props.letters}</p>
                            <div className="setup">
                                <FontAwesomeIcon icon={faMinus} className="fas" onClick={this.decreaseLetters}/>
                                <div className="bar"></div>
                                <div className="bar" style={{opacity: this.props.letters >= 10 ? '1' : '.5'}}></div>
                                <div className="bar" style={{opacity: this.props.letters === 15 ? '1' : '.5'}}></div>
                                <FontAwesomeIcon icon={faPlus} className="fas" onClick={this.increaseLetters}/>
                            </div>
                        </li>
                        <li className="grid">
                            <p>Speed: {this.props.speed === 500 ? 'High' : this.props.speed === 1000 ? 'Medium' : 'Low'}</p>
                            <div className="setup">
                                <FontAwesomeIcon icon={faMinus} className="fas" onClick={this.decreaseSpeed}/>
                                <div className="bar"></div>
                                <div className="bar" style={{opacity: this.props.speed <= 1000 ? '1' : '.5'}}></div>
                                <div className="bar" style={{opacity: this.props.speed === 500 ? '1' : '.5'}}></div>
                                <FontAwesomeIcon icon={faPlus} className="fas" onClick={this.increaseSpeed}/>
                            </div>
                        </li>
                    </ul>
                </main>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        letters: state.settingsReducer.numOfLetters,
        speed: state.settingsReducer.speed
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setLetters: letters => dispatch(setLetters(letters)),
        setSpeed: speed => dispatch(setSpeed(speed))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);