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
    render() {
        return (
            <div className="wrapper">
                <Navigation />
                <SideNavigation />
                <main className="main">
                    <Welcome />
                </main>
            </div>
        )
    }
}

export default Dashboard
