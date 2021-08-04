import { Component } from 'react'
import './SideNavigation.scss'

import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import yogaIcon from '../../../assets/images/yoga.svg'
import swimIcon from '../../../assets/images/swiming.svg'
import bicycleIcon from '../../../assets/images/vtt.svg'
import weightIcon from '../../../assets/images/weight.svg'

class SideNavigation extends Component {
    render() {
        return <nav role="sub" className="navigation__side-nav"></nav>
    }
}

export default SideNavigation
