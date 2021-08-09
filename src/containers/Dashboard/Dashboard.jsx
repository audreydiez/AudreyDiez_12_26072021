import { Component } from 'react'
import './Dashboard.scss'

import MainNavigation from 'components/Navigation/MainNavigation/MainNavigation'
import Welcome from 'components/Welcome/Welcome'
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation'
import AverageWeeklyLine from 'components/Charts/AverageWeeklyWorkoutLine/AverageWeeklyLine'
import AverageThemeRadar from 'components/Charts/AverageThemeRadar/AverageThemeRadar'
import DailyTrackerBar from 'components/Charts/DailyTrackerBar/DailyTrackerBar'
import GoalTrackerPercentage from 'components/Charts/GoalTrackerPercentage/GoalTrackerPercentage'
import MacroTracker from 'components/Charts/MacroTracker/MacroTracker'

class Dashboard extends Component {
    render() {
        return (
            <div className="wrapper">
                <MainNavigation />
                <main className="dashboard">
                    <SideNavigation />
                    <div className="main-content">
                        <Welcome />
                        {/*<DailyTrackerBar />*/}
                        {/*<AverageWeeklyWorkoutLine />*/}
                        {/*<AverageThemeRadar />*/}
                        {/*<GoalTrackerPercentage />*/}
                        {/*<MacroTracker />*/}
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard
