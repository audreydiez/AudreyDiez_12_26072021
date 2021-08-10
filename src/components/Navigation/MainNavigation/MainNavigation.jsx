import { Component } from 'react'
import './MainNavigation.scss'

import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

class MainNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggledNav: false,
        }
    }
    getNavLinks = () => {
        return this.props.data.map((link, index) => (
            <li key={index} className="main-nav__links">
                <Link to="/dashboard" title={link}>
                    {link}
                </Link>
            </li>
        ))
    }

    toggleResponsiveMenu = () => {
        this.props.toggleResponsiveIcons()

        // If menu is hidden and burger displayed
        if (window.innerWidth <= 760) {
            console.log('yes')
            if (this.state.toggledNav) this.setState({ toggledNav: false })
            if (!this.state.toggledNav) this.setState({ toggledNav: true })
        } else {
            this.setState({ toggledNav: false })
        }
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="logo">
                    <li className="main-nav__links">
                        <Link to="/" className="main-nav--list--logo">
                            <img src={logo} alt="SportSee" className="main-nav-logo" />
                        </Link>
                    </li>
                </ul>
                <ul className={`main-nav ${this.state.toggledNav ? 'active' : ''}`}>
                    {this.getNavLinks()}
                </ul>

                <ul className="burger">
                    <li className="burger__element" onClick={this.toggleResponsiveMenu}>
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default MainNavigation
