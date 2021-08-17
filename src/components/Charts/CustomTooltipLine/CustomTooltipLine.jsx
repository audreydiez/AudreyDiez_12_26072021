import React, { Component } from 'react'
import './CustomTooltipLine.scss'

class CustomTooltipLine extends Component {
    render() {
        const { payload, active } = this.props

        if (active && payload) {
            return (
                <div className="tooltip-line-container">
                    <div className="min">{`${payload[0].value} min`}</div>
                </div>
            )
        }

        return null
    }
}

export default CustomTooltipLine
