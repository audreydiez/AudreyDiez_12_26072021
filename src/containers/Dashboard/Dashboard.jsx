import { Component } from 'react'
import './Dashboard.scss'

import Navigation from 'components/Navigation/Navigation/'
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation'
import AverageWeeklyLine from 'components/Charts/AverageWeeklyWorkoutLine/AverageWeeklyLine'
import AverageThemeRadar from 'components/Charts/AverageThemeRadar/AverageThemeRadar'
import DailyTrackerBar from 'components/Charts/DailyTrackerBar/DailyTrackerBar'
import GoalTrackerPercentage from 'components/Charts/GoalTrackerPercentage/GoalTrackerPercentage'
import MacroTracker from 'components/Charts/MacroTracker/MacroTracker'
import Welcome from '../../components/Welcome/Welcome'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navLinks: this.props.data.mainNav.navLinks,
            sideNav: this.props.data.mainNav.sideNav,
            iconsToggled: false,
            key: 0,
        }
    }

    toggleResponsiveIcons = () => {
        const newKey = this.state.key + 1
        console.log('icon toggle')
        this.setState({ iconsToggled: !this.state.iconsToggled, key: newKey })
    }

    render() {
        return (
            <div className="wrapper">
                <Navigation
                    data={this.state.navLinks}
                    toggleResponsiveIcons={this.toggleResponsiveIcons}
                />
                <SideNavigation
                    data={this.state.sideNav}
                    iconsToggled={this.state.iconsToggled}
                    key={this.state.key}
                />
                <main className="main">
                    <Welcome />
                </main>
            </div>
        )
    }
}

export default Dashboard
