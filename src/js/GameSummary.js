import React, {Component} from 'react';
import { connect } from 'react-redux';
import { resetResults } from '../store/actions/gameActions';
import { addScore } from '../store/actions/firestoreActions';

class GameSummary extends Component {

    switchToStart = () => {
        this.homeReset();
        this.props.addScore('testName', this.props.average, 'testPC');
        this.props.resetResults();
    }

    homeReset = () => {
        let start = document.querySelector('.start');
        start.style.opacity = '1';

        let header = document.querySelector('.header');
        header.style.opacity = 1;

        let gameSummary = document.querySelector('.game-summary');
        gameSummary.style.opacity = '0';
        gameSummary.style.pointerEvents = 'none';

        let game = document.querySelector('.game');
        game.style.pointerEvents = 'all';
    }

    render() {
        return (
            <div className="game-summary">
                <h1>Well done!</h1>
                <p>You finished with an average of {this.props.average > 0 ? this.props.average : '0.00'} s</p>
                <button onClick={this.switchToStart}>Go back</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        average: state.gameReducer.average
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetResults: () => dispatch(resetResults()),
        addScore: (name, time, device) => dispatch(addScore(name, time, device))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSummary)