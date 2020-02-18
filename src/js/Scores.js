import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons';

class Scores extends Component {

    //copied from StackOverflow
    compare( a, b ) {
      if ( a.time < b.time ){
        return -1;
      }
      if ( a.time > b.time ){
        return 1;
      }
      return 0;
    }

    mobileFilter(a) {
        if (a.device === "mobile")
            return a;
    }

    renderScores = () => {
        this.props.scores.sort(this.compare).map((score, key) => (
            <tr key={key}>
                <th>{key+1}</th>
                <th>{score.name}</th>
                <th>{score.time} s</th>
                <th>{ score.device==='Mobile' ? <FontAwesomeIcon icon={faMobileAlt} /> : <FontAwesomeIcon icon={faLaptop} /> }</th>                  
            </tr>
        ))
    }

    render() {
    return this.props.scores === undefined
        ?
        <div className="scores">
            <table cellSpacing="0" cellPadding="1" width="300">
                <tbody>
                    <tr>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
        :
        <div className="scores">
            <table cellSpacing="0" cellPadding="1" width="300">
                <tbody>
                {this.props.device === 'Any' ? 
                    this.props.scores.sort(this.compare).map((score, key) => (
                        <tr key={key}>
                            <th>{key+1}</th>
                            <th>{score.name}</th>
                            <th>{score.time} s</th>
                            <th>{ score.device==='Mobile' ? <FontAwesomeIcon icon={faMobileAlt} /> : <FontAwesomeIcon icon={faLaptop} /> }</th>                  
                        </tr>
                    ))
                    : 
                    this.props.device === 'PC' ? 
                    this.props.scores.sort(this.compare).filter(score => score.device === 'PC').map((score, key) => (
                        <tr key={key}>
                            <th>{key+1}</th>
                            <th>{score.name}</th>
                            <th>{score.time} s</th>
                            <th>{ score.device==='Mobile' ? <FontAwesomeIcon icon={faMobileAlt} /> : <FontAwesomeIcon icon={faLaptop} /> }</th>                  
                        </tr>
                    )) 
                    :
                    this.props.scores.sort(this.compare).filter(score => score.device === 'Mobile').map((score, key) => (
                        <tr key={key}>
                            <th>{key+1}</th>
                            <th>{score.name}</th>
                            <th>{score.time} s</th>
                            <th>{ score.device==='Mobile' ? <FontAwesomeIcon icon={faMobileAlt} /> : <FontAwesomeIcon icon={faLaptop} /> }</th>                  
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        scores: state.firestoreReducer.ordered.scores
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([{ collection: 'scores' }])
)(Scores);