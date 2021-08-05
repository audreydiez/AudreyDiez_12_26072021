import { Component } from 'react'
import './SideNavigation.scss'

import Icons from '../../Icons/Icons'

import yogaIcon from './../../../assets/images/yoga.svg'
import swimIcon from './../../../assets/images/swiming.svg'
import bicycleIcon from './../../../assets/images/vtt.svg'
import weightIcon from './../../../assets/images/weight.svg'

class SideNavigation extends Component {
    render() {
        const iconsToDisplay = [yogaIcon, swimIcon, bicycleIcon, weightIcon]

        return (
            <nav role="side-nav" className="side-nav-container">
                <div className="activities">
                    <Icons workouts={iconsToDisplay} />
                </div>
                <div className="copyright">Copiryght, SportSee 2021</div>
            </nav>
        )
    }
}

export default SideNavigation
