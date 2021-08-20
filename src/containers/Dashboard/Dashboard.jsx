import { Component } from 'react'
import './Dashboard.scss'

import MainNavigation from 'components/Navigation/MainNavigation/MainNavigation'
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation'
import AverageWeeklyLine from 'components/Charts/AverageWeeklyLine/AverageWeeklyLine'
import AverageThemeRadar from 'components/Charts/AverageThemeRadar/AverageThemeRadar'
import DailyTrackerBar from 'components/Charts/DailyTrackerBar/DailyTrackerBar'
import GoalTrackerPercentage from 'components/Charts/GoalTrackerPercentage/GoalTrackerPercentage'
import MacroTracker from 'components/Charts/MacroTracker/MacroTracker'
import Welcome from '../../components/Welcome/Welcome'

import Services from '../../Services/Services'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: this.props.data,
            iconsToggled: false,
            key: 0,

            userID: this.props.id,
            firstName: '',
            macroNutriments: [],
            userScore: 0,
            errModal: false,
            loading: true,
        }

        this.services = new Services()

        this.updateUserData = this.updateUserData.bind(this)
    }

    componentDidMount() {
        this.services.getUserDetails(this.state.userID, this.updateUserData)
    }

    updateUserData(data) {
        this.setState({
            firstName: data.fail ? this.state.firstName : data.content.firstName,
            macroNutriments: data.fail ? this.state.macroNutriments : data.content.macroNutriments,
            userScore: data.fail ? this.state.userScore : data.content.userScore,
            loading: data.loading,
            errModal: data.fail,
            key: this.state.key + 1,
        })
    }

    // Allow display menu icons on middle devices screens with burger menu
    toggleResponsiveIcons = () => {
        const newKey = this.state.key + 1
        this.setState({ iconsToggled: !this.state.iconsToggled, key: newKey })
    }

    render() {
        return (
            <div className="wrapper">
                <MainNavigation
                    data={this.state.websiteContent.navLinks}
                    toggleResponsiveIcons={this.toggleResponsiveIcons}
                />
                <SideNavigation
                    data={this.state.websiteContent.sideNav}
                    iconsToggled={this.state.iconsToggled}
                />
                <main className="main">
                    <Welcome
                        userData={this.state.firstName}
                        contentData={this.state.websiteContent.welcome}
                    />
                    <div className="statistics">
                        <div className="statistics__column left">
                            <div className="column-inner">
                                <DailyTrackerBar
                                    userID={this.state.userID}
                                    contentData={this.state.websiteContent.charts.DailyTrackerBar}
                                />
                            </div>
                            <div className="column-inner">
                                <AverageWeeklyLine
                                    userID={this.state.userID}
                                    contentData={
                                        this.state.websiteContent.charts.AverageWeeklyWorkoutLine
                                    }
                                />
                            </div>
                            <div className="column-inner">
                                <AverageThemeRadar userID={this.state.userID} />
                            </div>
                            <div className="column-inner">
                                <GoalTrackerPercentage
                                    userID={this.state.userID}
                                    userScore={this.state.userScore}
                                    contentData={
                                        this.state.websiteContent.charts.GoalTrackerPercentage
                                    }
                                />
                            </div>
                        </div>
                        <div className="statistics__column right">
                            <MacroTracker
                                contentData={this.state.websiteContent.macroNutriments}
                                userData={this.state.macroNutriments}
                            />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard
