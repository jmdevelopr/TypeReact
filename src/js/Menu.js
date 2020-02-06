import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faTrophy, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <ul>
                    <NavLink exact to="/" className="option" activeClassName="active">
                        <li>
                            <FontAwesomeIcon icon={faHome} className="icon"/>
                            <h4>Home</h4>
                        </li>
                    </NavLink>
                
                    <NavLink to="/settings" className="option" activeClassName="active">
                        <li>
                            <FontAwesomeIcon icon={faCog} className="icon"/>
                            <h4>Settings</h4>
                        </li>
                    </NavLink>
                
                    <NavLink to="/leaderboard" className="option" activeClassName="active">
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="icon"/>
                            <h4>Leaderboard</h4>
                        </li>
                    </NavLink>
                
                    <NavLink to="/about" className="option" activeClassName="active">
                        <li>
                            <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
                            <h4>About</h4>
                        </li>
                    </NavLink>
                </ul>
            </div>
        )
    }
}

export default Menu;