import { Component } from 'react'
import './Navigation.scss'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import yogaIcon from '../../assets/images/yoga.svg'
import swimIcon from '../../assets/images/swiming.svg'
import bicycleIcon from '../../assets/images/vtt.svg'
import weightIcon from '../../assets/images/weight.svg'

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <nav role="main" className="nav navigation__main-nav">
                    <ul className="navigation__main-nav--list">
                        <li>
                            <Link to="/">
                                <img src={logo} alt="Page d'accueil" className="" />
                            </Link>
                        </li>
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
                </nav>
                <nav className="nav navigation__side-nav" role="sub">
                    <ul className="navigation__side-nav--list">
                        <li>
                            <Link to="/dashboard"></Link>
                            <img src={yogaIcon} alt="Page d'accueil" />
                        </li>
                        <li>
                            <Link to="/dashboard"></Link>
                            <img src={swimIcon} alt="Page d'accueil" />
                        </li>
                        <li>
                            <Link to="/dashboard"></Link>
                            <img src={bicycleIcon} alt="Page d'accueil" />
                        </li>
                        <li>
                            <Link to="/dashboard"></Link>
                            <img src={weightIcon} alt="Page d'accueil" />
                        </li>
                    </ul>
                    <Link className="navigation__side-nav--copyright" to="/dashboard">
                        Copyright, SportSee 2021
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Navigation
