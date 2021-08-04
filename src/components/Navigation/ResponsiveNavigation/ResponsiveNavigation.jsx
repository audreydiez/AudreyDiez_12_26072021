import { Component } from 'react'
import './ResponsiveNavigation.scss'

import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import yogaIcon from '../../../assets/images/yoga.svg'
import swimIcon from '../../../assets/images/swiming.svg'
import bicycleIcon from '../../../assets/images/vtt.svg'
import weightIcon from '../../../assets/images/weight.svg'

class ResponsiveNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            responsiveMenuToggle: false,
        }
    }
    componentDidMount() {
        this.setState({ responsiveMenuToggle: this.props.isActive })
    }

    render() {
        return (
            <div className={`menu-nav ${this.state.responsiveMenuToggle ? 'active' : ''}`}>
                <ul className="menu-link">
                    <li className="">
                        <Link to="/dashboard">Accueil</Link>
                    </li>
                    <li className="">
                        <Link to="/dashboard">Profil</Link>
                    </li>
                    <li className="">
                        <Link to="/dashboard">Réglage</Link>
                    </li>
                    <li className="">
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
        )
    }
}

export default ResponsiveNavigation
