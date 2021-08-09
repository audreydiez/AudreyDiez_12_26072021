import { Component } from 'react'
import './Navigation.scss'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    getNavLinks = () => {
        return this.props.data.map((link, index) => (
            <li key={index}>
                <Link to="/dashboard" title={link}>
                    {link}
                </Link>
            </li>
        ))
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="main-nav">
                    <li>
                        <Link to="/" className="main-nav--list--logo">
                            <img src={logo} alt="SportSee" />
                        </Link>
                    </li>
                    {this.getNavLinks()}
                </ul>
            </nav>
        )
    }
}

export default Navigation
