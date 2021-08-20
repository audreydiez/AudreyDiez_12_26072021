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

class AverageWeeklyLine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.userID,
            userID: this.props.userID,
            errModal: false,
            userAverageSession: [],
            minValueYaxis: 0,
            maxValueYaxis: 0,
        }

        this.services = new AxiosAPIProvider()

        this.updateUserData = this.updateUserData.bind(this)
    }

    componentDidMount() {
        this.services.getUserAverageSession(this.state.userID, this.updateUserData)
    }

    updateUserData(data) {
        this.setState({
            userAverageSession: data.fail
                ? this.state.userAverageSession
                : data.content.userAverageSession,
            minValueYaxis: data.fail ? this.state.minValueYaxis : data.content.minValueYaxis,
            maxValueYaxis: data.fail ? this.state.maxValueYaxis : data.content.maxValueYaxis,
            loading: data.loading,
            errModal: data.fail,
        })
    }

    render() {
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
}
export default AverageWeeklyLine
