import React, {Component} from 'react';
import { connect } from 'react-redux';
import Scores from './Scores';

class Leaderboard extends Component {
    render() {
        return (
            <section className="Leaderboard grid">
                <header className="header">
                    <h1>Leaderboard</h1>
                    <p>The best scores of all the time</p>
                </header>
                <main>
                    <div className="buttons">
                        <button id="all-btn">All</button>
                        <button id="pc-btn">PC</button>
                        <button id="mobile-btn">Mobile</button>
                    </div>
                    <Scores />
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