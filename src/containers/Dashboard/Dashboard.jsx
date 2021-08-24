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

import AxiosAPIProvider from '../../Services/AxiosAPIProvider'
import InfoBox from '../../components/InfoBox/InfoBox'
import Loader from '../../components/Loader/Loader'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: this.props.data,
            iconsToggled: false,

            userID: this.props.id,
            firstName: '',
            macroNutriments: [],
            userScore: 0,

            errModal: false,
            loading: true,
            overlay: false,
            key: 0,
        }

        this.apiProvider = new AxiosAPIProvider()
    }

    componentDidMount() {
        this.apiProvider.getUserDetails(this.state.userID).then((response) => {
            if (response.fail) {
                this.setState({
                    message: response.errorMsg + ' : Erreur de chargement des données utilisateurs',
                    errModal: response.fail,
                    loading: false,
                    overlay: response.fail,
                    key: this.state.key + 1,
                })
            } else {
                this.setState({
                    firstName: response.content.firstName,
                    macroNutriments: response.content.macroNutriments,
                    userScore: response.content.userScore,
                    loading: false,
                    key: this.state.key + 1,
                })
            }
        })
    }

    // Allow display menu icons on middle devices screens with burger menu
    toggleResponsiveIcons = () => {
        const newKey = this.state.key + 1
        this.setState({ iconsToggled: !this.state.iconsToggled, key: newKey })
    }

    displayDashboard() {
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
                                    key={this.state.key}
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

    render() {
        return this.state.overlay ? (
            <InfoBox
                loading={this.state.loading}
                errModal={this.state.errModal}
                message={this.state.message}
                key={this.state.key + 1}
            />
        ) : (
            this.displayDashboard()
        )
    }
}

export default Dashboard
