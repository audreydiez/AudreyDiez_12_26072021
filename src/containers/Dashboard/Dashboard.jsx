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

import Services_01 from '../../Services/Services_01'

import Services from '../../Services/Services'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: this.props.data,
            iconsToggled: false,
            key: 0,
            id: 18,
            firstName: null,
            keyData: '',
            dayScore: 0,

            isLoading: false,
        }

        // Axios fetching service old
        this.Services_01 = new Services_01()
    }

    componentDidMount() {
        this.Services_01.getUserProfile(this.state.id)
            .then((r) => {
                this.setState({
                    firstName: r.data.data.userInfos.firstName,
                    keyData: r.data.data.keyData,
                    dayScore: r.data.data.score,
                    errMsg: '',
                    errModal: false,
                })
            })
            .catch((err) => {
                this.setState({
                    errMsg: 'Erreur de chargement des données utilisateurs: ' + err,
                    errModal: true,
                })
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
                    key={this.state.key}
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
                                    userID={this.state.id}
                                    contentData={this.state.websiteContent.charts.DailyTrackerBar}
                                />
                            </div>
                            <div className="column-inner">
                                <AverageWeeklyLine
                                    userID={this.state.id}
                                    contentData={
                                        this.state.websiteContent.charts.AverageWeeklyWorkoutLine
                                    }
                                />
                            </div>
                            <div className="column-inner">
                                <AverageThemeRadar userID={this.state.id} />
                            </div>
                            <div className="column-inner">
                                <GoalTrackerPercentage
                                    userID={this.state.id}
                                    userScore={this.state.dayScore}
                                    contentData={
                                        this.state.websiteContent.charts.GoalTrackerPercentage
                                    }
                                />
                            </div>
                        </div>
                        <div className="statistics__column right">
                            <MacroTracker
                                contentData={this.state.websiteContent.macroNutriments}
                                userData={this.state.keyData}
                            />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard
