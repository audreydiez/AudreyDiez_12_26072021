import { Component } from 'react'
import './Icons.scss'

import { Link } from 'react-router-dom'

class Icons extends Component {
    render() {
        return (
            <>
                {this.props.workouts.map((src, index) => (
                    <Link className="icon-container" to="/dashboard" key={index}>
                        <img src={src} alt={src} className="icon" />
                    </Link>
                ))}
            </>
        )
    }
}

export default Icons
