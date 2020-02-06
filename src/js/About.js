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
                    <p>TypeReact created by Jakub Makuch.
                        <br/>
                        2020 &copy; All rights reserved.
                        <br/><br/>
                        Icons by <a href='https://dryicons.com/icon/tap-icon-12872'>Dryicons</a> and <a href="https://fontawesome.com/license/free">Font Awesome</a>.</p>
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
                </main>
            </section> 
        )
    }
}

export default About;