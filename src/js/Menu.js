import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faTrophy, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <ul>
                    <li className="option">
                        <FontAwesomeIcon icon={faHome} className="icon"/>
                        <h4>Home</h4>
                    </li>
                    <li className="option">
                        <FontAwesomeIcon icon={faCog} className="icon"/>
                        <h4>Settings</h4>
                    </li>
                    <li className="option">
                        <FontAwesomeIcon icon={faTrophy} className="icon"/>
                        <h4>Leaderboard</h4>
                    </li>
                    <li className="option">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
                        <h4>About</h4>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;