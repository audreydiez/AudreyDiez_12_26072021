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

import Services from '../../services/Services'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navLinks: this.props.data.mainNav.navLinks,
            sideNav: this.props.data.mainNav.sideNav,
            welcomeContent: this.props.data.welcome,
            macroTrackerContent: this.props.data.macroNutriments,
            iconsToggled: false,
            key: 0,
            id: 18,
            firstName: null,
            keyData: '',
            msg: 'Chargement en cours',
        }

        // Axios fetching service
        this.services = new Services()
    }

    componentDidMount() {
        this.services
            .getUserProfile(this.state.id)
            .then((r) => {
                console.log(r)
                this.setState({
                    id: this.props.id,
                    firstName: r.data.data.userInfos.firstName,
                    keyData: r.data.data.keyData,
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

    displayModalError = () => {
        return (
            <div className={`overlay-error ${this.state.errModal ? 'active' : ''}`}>
                <div className="overlay-error__modal">
                    <span>{this.state.errMsg}</span>
                    <button onClick={this.closeModalError}>Fermer</button>
                </div>
            </div>
        )
    }

    closeModalError = () => {
        this.setState({ errModal: false })
    }

    render() {
        return (
            <div className="wrapper">
                {this.displayModalError()}
                <MainNavigation
                    data={this.state.navLinks}
                    toggleResponsiveIcons={this.toggleResponsiveIcons}
                />
                <SideNavigation
                    data={this.state.sideNav}
                    iconsToggled={this.state.iconsToggled}
                    key={this.state.key}
                />
                <main className="main">
                    <Welcome
                        userData={this.state.firstName}
                        contentData={this.state.welcomeContent}
                    />
                    <div className="statistics">
                        <div className="statistics__column left">
                            <div className="column-inner">
                                <DailyTrackerBar />
                            </div>
                            <div className="column-inner">
                                <AverageWeeklyLine />
                            </div>
                            <div className="column-inner">
                                <AverageThemeRadar />
                            </div>
                            <div className="column-inner">
                                <GoalTrackerPercentage />
                            </div>
                        </div>
                        <div className="statistics__column right">
                            <MacroTracker
                                contentData={this.state.macroTrackerContent}
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
