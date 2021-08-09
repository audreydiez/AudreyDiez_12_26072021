import { Component } from 'react'
import './Navigation.scss'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import yogaIcon from '../../assets/images/yoga.svg'
import swimIcon from '../../assets/images/swiming.svg'
import bicycleIcon from '../../assets/images/vtt.svg'
import weightIcon from '../../assets/images/weight.svg'

class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="main-nav">
                    <li>
                        <Link to="/" className="main-nav--list--logo">
                            <img src={logo} alt="Page d'accueil" />
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
        )
    }
}

export default Navigation
