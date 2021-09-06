import React, { Component } from 'react'
import './CustomTooltipBar.scss'
import PropTypes from 'prop-types'

class CustomTooltipBar extends Component {
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

CustomTooltipBar.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
}

export default CustomTooltipBar
