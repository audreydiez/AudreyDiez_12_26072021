import { Component } from 'react'
import './MainNavigation.scss'

import logo from 'assets/images/logo.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class MainNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggledNav: false,
        }
    }

    /**
     * Create menu nav links from the props data already fetched
     * @return  {JSX.Element[]}
     */
    getNavLinks = () => {
        return this.props.data.map((link, index) => (
            <li key={index} className="main-nav__links">
                <Link to="#" title={link}>
                    {link}
                </Link>
            </li>
        ))
    }

    /**
     * Display the burger menu when window width is too small for menu
     * @return  {void}
     */
    toggleResponsiveMenu = () => {
        this.props.toggleResponsiveIcons()

        // If menu is hidden and burger displayed
        if (window.innerWidth <= 760) {
            if (this.state.toggledNav) this.setState({ toggledNav: false })
            if (!this.state.toggledNav) this.setState({ toggledNav: true })
        } else {
            this.setState({ toggledNav: false })
        }
    }

    render() {
        console.log(this.props.data)
        return (
            <nav className="navigation">
                <ul className="logo">
                    <li className="main-nav__links">
                        <Link to="#" className="main-nav--list--logo">
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

MainNavigation.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string),
}

export default MainNavigation
