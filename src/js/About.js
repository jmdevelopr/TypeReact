import React, {Component} from 'react';
import Newsie from '../assets/Newsie.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    render() {
        return (
            <section className="About grid">
                <header className="header">
                    <h1>About</h1>
                    <p>TypeReact created by Jakub Makuch.</p>
                </header>
                <main className="links">
                    <div className="social">
                        <h1>My social media</h1>
                        <div className="icons">
                            <a href="facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="facebook.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="facebook.com" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="facebook.com" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                    </div>
                    <div className="project">
                        <p>Also check out my Newsie project!</p>
                        <button> <img src={Newsie} alt="Newsie"/><span>Newsie</span></button>
                    </div>
                    <div className="subheader">
                        <p>2020 &copy; All rights reserved.
                        <br/><br/>
                        Icons by <a href='https://dryicons.com/icon/tap-icon-12872'>Dryicons</a> and <a href="https://fontawesome.com/license/free">Font Awesome</a>.</p>
                    </div>
                </main>
            </section> 

            // <section className="About grid">
            // <header className="header">
            //     <h1>Set up your TypeReact!</h1>
            //     <p>Change the gamemode</p>
            // </header>
            // <main className="setups">
            //     <ul>
            //         <li className="grid">
            //             <p>Number of letters: {this.props.letters}</p>
            //             <div className="setup">
            //                 <FontAwesomeIcon icon={faMinus} className="fas" onClick={this.decreaseLetters}/>
            //                 <div className="bar"></div>
            //                 <div className="bar"></div>
            //                 <div className="bar"></div>
            //                 <FontAwesomeIcon icon={faPlus} className="fas" onClick={this.increaseLetters}/>
            //             </div>
            //         </li>
            //         <li className="grid">
            //             <p>Speed: {this.props.speed === 500 ? 'High' : this.props.speed === 1000 ? 'Medium' : 'Low'}</p>
            //             <div className="setup">
            //                 <FontAwesomeIcon icon={faMinus} className="fas" onClick={this.decreaseSpeed}/>
            //                 <div className="bar"></div>
            //                 <div className="bar"></div>
            //                 <div className="bar"></div>
            //                 <FontAwesomeIcon icon={faPlus} className="fas" onClick={this.increaseSpeed}/>
            //             </div>
            //         </li>
            //     </ul>
            // </main>
            // </section>
        )
    }
}

export default About;