import { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import './GoalTrackerPercentage.scss'
import Loader from 'components/Loader/Loader'
import PropTypes from 'prop-types'

class GoalTrackerPercentage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userScoreData: [
                { name: 'userScore', value: this.props.userScore, fillColor: '#ff0000' },
                { name: 'rest', value: 1 - this.props.userScore, fillColor: 'transparent' },
            ],
            userScorePercentage: this.props.userScore * 100,
            message: this.props.message,
        }
    }

    /**
     * Create the chart filled with website texts and user data
     * @return  {JSX.Element}
     */
    displayPieChart() {
        return (
            <div className="goalTrackerPercentage-chart">
                <div className="title">{this.props.contentData.title}</div>
                <ResponsiveContainer width="99%" height="100%">
                    <PieChart width={250} height={180}>
                        <Pie
                            data={this.state.userScoreData}
                            dataKey="value"
                            innerRadius={65}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={450}
                        >
                            {this.state.userScoreData.map((data, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={data.fillColor}
                                    cornerRadius="50%"
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="goal">
                    <div className="goal__percentage">{this.state.userScorePercentage}% </div>
                    <div className="goal__text">{this.props.contentData.goal}</div>
                </div>
            </div>
        )
    }

    render() {
        return this.props.userScore === null ? (
            <Loader fill="#e60000" message={this.state.message} />
        ) : (
            this.displayPieChart()
        )
    }
}

GoalTrackerPercentage.propTypes = {
    contentData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        goal: PropTypes.string.isRequired,
    }),
    userID: PropTypes.string.isRequired,
    userScore: PropTypes.number,
    message: PropTypes.string,
}

export default GoalTrackerPercentage
