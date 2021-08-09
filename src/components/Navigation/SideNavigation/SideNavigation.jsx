import { Component } from 'react'
import './SideNavigation.scss'

import Icons from '../../Icons/Icons'

import yogaIcon from './../../../assets/images/yoga.svg'
import swimIcon from './../../../assets/images/swiming.svg'
import bicycleIcon from './../../../assets/images/vtt.svg'
import weightIcon from './../../../assets/images/weight.svg'
import { Link } from 'react-router-dom'

class SideNavigation extends Component {
    render() {
        return (
            <div className="side-bar">
                <ul className="side-bar__icons">
                    <li>
                        <img src={yogaIcon} alt="Page d'accueil" />
                    </li>
                    <li>
                        <img src={yogaIcon} alt="Page d'accueil" />
                    </li>
                    <li>
                        <img src={yogaIcon} alt="Page d'accueil" />
                    </li>
                    <li>
                        <img src={yogaIcon} alt="Page d'accueil" />
                    </li>
                </ul>
                <Link to="/dashboard" className="side-bar__copyright">
                    Copiryght, SportSee 2020
                </Link>
            </div>
        )
    }
}

export default SideNavigation
