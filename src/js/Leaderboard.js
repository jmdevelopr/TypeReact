import React, {Component} from 'react';
import { connect } from 'react-redux';
import Scores from './Scores';

class Leaderboard extends Component {

    state = {
        scoresType: 'Any'
    }

    //this stuff obviously to optimalize

    setScoresTypeAny = () => {
        this.setState(state => { return {scoresType: 'Any'} });
    }

    setScoresTypePC = () => {
        this.setState(state => { return {scoresType: 'PC'} });
    }

    setScoresTypeMobile = () => {
        this.setState(state => { return {scoresType: 'Mobile'} });
    }

    render() {
        return (
            <section className="Leaderboard grid">
                <header className="header">
                    <h1>Leaderboard</h1>
                    <p>The best scores of all the time</p>
                </header>
                <main>
                    <div className="buttons">
                        <button id="all-btn" onClick={this.setScoresTypeAny}>All</button>
                        <button id="pc-btn" onClick={this.setScoresTypePC}>PC</button>
                        <button id="mobile-btn" onClick={this.setScoresTypeMobile}>Mobile</button>
                    </div>
                    <Scores device={this.state.scoresType} />
                </main>
            </section> 
        )
    }
}

const mapStateToProps = state => {
    return {
        scores: state.firestoreReducer.ordered.scores
    }
}

export default connect(mapStateToProps)(Leaderboard);