import { Component } from 'react'
import './MainNavigation.scss'

import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import yogaIcon from '../../../assets/images/yoga.svg'
import swimIcon from '../../../assets/images/swiming.svg'
import bicycleIcon from '../../../assets/images/vtt.svg'
import weightIcon from '../../../assets/images/weight.svg'

class MainNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            responsiveMenuToggle: false,
            key: 0,
        }
    }

    handleClickBurger = () => {
        const newKey = this.state.key + 1
        this.setState({
            responsiveMenuToggle: !this.state.responsiveMenuToggle,
            key: newKey,
        })
    }

    renderResponsiveMenu = () => {}

    render() {
        return (
            <>
                {/*Main menu top*/}
                <nav role="main" className="main-nav">
                    <ul className="main-nav--list">
                        <li>
                            <Link to="/" className="main-nav--list--logo">
                                <img src={logo} alt="Page d'accueil" />
                            </Link>
                        </li>
                        <li className="main-nav--list--link">
                            <Link to="/dashboard">Accueil</Link>
                        </li>
                        <li className="main-nav--list--link">
                            <Link to="/dashboard">Profil</Link>
                        </li>
                        <li className="main-nav--list--link">
                            <Link to="/dashboard">Réglage</Link>
                        </li>
                        <li className="main-nav--list--link">
                            <Link to="/dashboard">Communauté</Link>
                        </li>
                        <li className="main-nav--list--hamburger" onClick={this.handleClickBurger}>
                            <Link to="/dashboard">
                                <span
                                    className={`hamburger ${
                                        this.state.responsiveMenuToggle ? 'active' : ''
                                    }`}
                                />
                                <span
                                    className={`hamburger ${
                                        this.state.responsiveMenuToggle ? 'active' : ''
                                    }`}
                                />
                                <span
                                    className={`hamburger ${
                                        this.state.responsiveMenuToggle ? 'active' : ''
                                    }`}
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/*Responsive menu*/}
                <div className={`menu-nav ${this.state.responsiveMenuToggle ? 'active' : ''}`}>
                    <ul className="menu-link">
                        <li>
                            <Link to="/dashboard">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Profil</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Réglage</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Communauté</Link>
                        </li>
                    </ul>
                    <div className="menu-activity">
                        <div className="menu-activity__icon">
                            <img src={yogaIcon} alt="Page d'accueil" />
                        </div>
                        <div className="menu-activity__icon">
                            <img src={swimIcon} alt="Page d'accueil" />
                        </div>
                        <div className="menu-activity__icon">
                            <img src={bicycleIcon} alt="Page d'accueil" />
                        </div>
                        <div className="menu-activity__icon">
                            <img src={weightIcon} alt="Page d'accueil" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MainNavigation
