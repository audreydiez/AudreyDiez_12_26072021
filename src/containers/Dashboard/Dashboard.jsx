import { Component } from 'react'
import './Dashboard.scss'

import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header'

class Dashboard extends Component {
    render() {
        return (
            <main className="dashboard">
                <div className="nav-container">
                    <Navigation />
                </div>
                <Header />
            </main>
        )
    }
}

export default Dashboard
