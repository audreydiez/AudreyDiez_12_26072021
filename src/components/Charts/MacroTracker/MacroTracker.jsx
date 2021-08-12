import { Component } from 'react'
import './MacroTracker.scss'
import yogaIcon from '../../../assets/images/yoga.svg'

class MacroTracker extends Component {
    render() {
        return (
            <div className="macro-tracker">
                <div className="container">
                    <div className="icon-container">
                        <img src={yogaIcon} alt="" />
                    </div>
                    <div className="content-container">
                        <span className="data">1,852kCal</span>
                        <span className="legend">Calories</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MacroTracker
