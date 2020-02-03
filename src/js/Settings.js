import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component {
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
                            <p>Number of letters: 10</p>
                            <div className="setup">
                                <FontAwesomeIcon icon={faMinus} />
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </li>
                        <li className="grid">
                            <p>Speed: Medium</p>
                            <div className="setup">
                                <FontAwesomeIcon icon={faMinus} />
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </li>
                    </ul>
                </main>
            </section>
        )
    }
}

export default Settings;