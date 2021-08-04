import { Component } from 'react'
import './MainNavigation.scss'

import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import yogaIcon from '../../../assets/images/yoga.svg'
import swimIcon from '../../../assets/images/swiming.svg'
import bicycleIcon from '../../../assets/images/vtt.svg'
import weightIcon from '../../../assets/images/weight.svg'
import ResponsiveNavigation from '../ResponsiveNavigation/ResponsiveNavigation'

class MainNavigation extends Component {
    render() {
        return (
            <>
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
                        <li className="main-nav--list--hamburger">
                            <Link to="/dashboard">
                                <span />
                                <span />
                                <span />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ResponsiveNavigation />
            </>
        )
    }
}

export default MainNavigation
