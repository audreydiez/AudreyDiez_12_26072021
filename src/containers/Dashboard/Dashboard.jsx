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
            iconsToggled: false,
            key: 0,
            id: 18,
            firstName: null,
            keyData: null,
            loader: false,
        }

        this.services = new Services()
    }

    componentDidMount() {
        this.updateUserProfile().then((r) => {})
    }

    toggleResponsiveIcons = () => {
        const newKey = this.state.key + 1
        console.log('icon toggle')
        this.setState({ iconsToggled: !this.state.iconsToggled, key: newKey })
    }

    updateUserProfile = async () => {
        try {
            const data = await this.services.getUserProfile(this.state.id)
            console.log(data)
            this.setState({
                id: this.props.id,
                firstName: data.userInfos.firstName,
                keyData: data.keyData,
            })
        } catch (err) {}
    }

    render() {
        return (
            <div className="wrapper">
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
                            <div className="column-inner">average session</div>
                            <div className="column-inner">radar</div>
                            <div className="column-inner">score</div>
                        </div>
                        <div className="statistics__column right">
                            <div className="macro-tracker">Macrossss</div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard
