import { Component } from 'react'
import './SideNavigation.scss'

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
                        <img src={yogaIcon} alt={this.props.data.menuIcon.yoga} />
                    </li>
                    <li>
                        <img src={swimIcon} alt={this.props.data.menuIcon.swim} />
                    </li>
                    <li>
                        <img src={bicycleIcon} alt={this.props.data.menuIcon.bicycle} />
                    </li>
                    <li>
                        <img src={weightIcon} alt={this.props.data.menuIcon.weightLift} />
                    </li>
                </ul>
                <Link to="/dashboard" className="side-bar__copyright">
                    {this.props.data.copyrights}
                </Link>
            </div>
        )
    }
}

export default SideNavigation
