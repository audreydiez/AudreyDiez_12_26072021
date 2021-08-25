import React, { Component } from 'react'
import './CustomTooltipLine.scss'
import PropTypes from 'prop-types'

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

CustomTooltipLine.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
}

export default CustomTooltipLine
