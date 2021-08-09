import { Component } from 'react'
import './Navigation.scss'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    getNavLinks = () => {
        return this.props.data.map((link, index) => (
            <li key={index} className="main-nav__links">
                <Link to="/dashboard" title={link}>
                    {link}
                </Link>
            </li>
        ))
    }

    handleClickBurger = () => {
        console.log('clic')
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="main-nav">
                    <li className="main-nav__links">
                        <Link to="/" className="main-nav--list--logo">
                            <img src={logo} alt="SportSee" />
                        </Link>
                    </li>
                    {this.getNavLinks()}
                    <li className="main-nav__burger" onClick={this.handleClickBurger}>
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation
