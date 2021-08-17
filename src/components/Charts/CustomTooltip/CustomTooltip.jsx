import React, { Component } from 'react'
import './CustomTooltip.scss'

class CustomTooltip extends Component {
    render() {
        const { payload, active } = this.props

        if (active && payload) {
            return (
                <div className="tooltip-container">
                    <div className="weight">{`${payload[0].value}kg`}</div>
                    <div className="kcal">{`${payload[1].value}kCal`}</div>
                </div>
            )
        }

        return null
    }
}

export default CustomTooltip
