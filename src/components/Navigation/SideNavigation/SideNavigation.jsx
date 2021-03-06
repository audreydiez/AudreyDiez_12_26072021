import { Component } from 'react'
import './SideNavigation.scss'

import yogaIcon from 'assets/images/yoga.svg'
import swimIcon from 'assets/images/swiming.svg'
import bicycleIcon from 'assets/images/vtt.svg'
import weightIcon from 'assets/images/weight.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SideNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            iconsToggled: this.props.iconsToggled,
            windowWidth: window.innerWidth,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimension)
    }

    /**
     * Change browser dimensions states when resizing
     * @return  {void}
     */
    updateDimension = () => {
        this.setState({ windowWidth: window.innerWidth })
        this.setState({ iconsToggled: false })
    }

    render() {
        const iconsMenu = this.state.windowWidth <= 1024 ? 'hidden' : ''
        const toggleMenu = this.state.iconsToggled ? 'active' : ''

        return (
            <div className={`side-bar ${iconsMenu} ${toggleMenu}`}>
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
                <Link to="#" className="side-bar__copyright">
                    {this.props.data.copyrights}
                </Link>
            </div>
        )
    }
}

SideNavigation.propTypes = {
    data: PropTypes.shape({
        copyrights: PropTypes.string.isRequired,
        menuIcon: PropTypes.shape({
            yoga: PropTypes.string.isRequired,
            swim: PropTypes.string.isRequired,
            bicycle: PropTypes.string.isRequired,
            weightLift: PropTypes.string.isRequired,
        }),
    }),
}

export default SideNavigation
