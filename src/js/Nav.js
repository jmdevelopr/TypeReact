import React, {Component} from 'react';
import Logo from '../assets/Logo.svg';

class Nav extends Component {
    render() {
        return (
            <div className="Nav grid">
                <img src={Logo} alt="TypeReact"/>
                <button>?</button>
            </div>
        )
    }
}

export default Nav;