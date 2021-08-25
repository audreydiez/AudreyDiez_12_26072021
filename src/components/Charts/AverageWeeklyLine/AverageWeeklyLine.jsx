import { Component } from 'react'

import './AverageWeeklyLine.scss'

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts'
import CustomTooltipLine from '../CustomTooltips/CustomTooltipLine/CustomTooltipLine'
import AxiosAPIProvider from '../../../Services/AxiosAPIProvider'
import Loader from '../../Loader/Loader'
import PropTypes from 'prop-types'

class AverageWeeklyLine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: this.props.userID,
            errModal: false,
            userAverageSession: [],
            minValueYaxis: 0,
            maxValueYaxis: 0,
        }

        this.apiProvider = new AxiosAPIProvider()
    }

    componentDidMount() {
        this.apiProvider.getUserAverageSession(this.state.userID).then((response) => {
            if (response.fail) {
                this.setState({
                    loading: response.loading,
                    message: response.errorMsg,
                    key: this.state.key + 1,
                })
            } else {
                this.setState({
                    userAverageSession: response.content.userAverageSession,
                    minValueYaxis: response.content.minValueYaxis,
                    maxValueYaxis: response.content.maxValueYaxis,
                    loading: response.loading,
                    key: this.state.key + 1,
                })
            }
        })
    }

    /**
     * Create the chart filled with website texts and user data
     * @return  {JSX.Element}
     */
    displayChart() {
        return (
            <div className="line-chart">
                <div className="average-sessions-chart-legend">{this.props.contentData.title}</div>
                <ResponsiveContainer width="99%" height={250}>
                    <LineChart
                        data={this.state.userAverageSession}
                        margin={{
                            top: 0,
                            right: 12,
                            left: 12,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                        <XAxis
                            tickLine={false}
                            axisLine={false}
                            stroke={'#FFF'}
                            dataKey="day"
                            tick={{
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                            stroke="rgba(255, 255, 255, 0.6)"
                        />
                        <YAxis
                            hide={true}
                            domain={[this.state.minValueYaxis, this.state.maxValueYaxis]}
                        />
                        <Tooltip
                            content={<CustomTooltipLine />}
                            cursor={{
                                stroke: 'rgba(0, 0, 0, 0.1)',
                                strokeWidth: 50,
                            }}
                        />
                        <Line
                            stroke="rgba(255, 255, 255, 0.6)"
                            strokeWidth={2}
                            type="monotone"
                            dataKey="sessionLength"
                            activeDot={{
                                stroke: 'rgba(255,255,255, 0.3)',
                                strokeWidth: 10,
                                r: 5,
                            }}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
    render() {
        return this.state.loading ? (
            <Loader fill="#e60000" message={this.state.message} key={this.state.key} />
        ) : (
            this.displayChart()
        )
    }
}

AverageWeeklyLine.propTypes = {
    contentData: PropTypes.object.isRequired,
    userID: PropTypes.string.isRequired,
}

export default AverageWeeklyLine
