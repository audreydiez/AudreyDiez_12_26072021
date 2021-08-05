import { Component } from 'react'
import './Dashboard.scss'

import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation'
import Header from '../../components/Header/Header'
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation'

class Dashboard extends Component {
    render() {
        return (
            <div className="wrapper">
                <MainNavigation />
                <main className="dashboard">
                    <SideNavigation />
                    <div className="main-content">
                        <Header />
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard
