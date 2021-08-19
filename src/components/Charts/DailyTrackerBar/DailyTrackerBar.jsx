import { Component } from 'react'
import './DailyTrackerBar.scss'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import Services_01 from '../../../Services/Services_01'
import CustomTooltipBar from '../CustomTooltips/CustomTooltipBar/CustomTooltipBar'

class DailyTrackerBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.userID,
            errModal: false,
            userActivity: [],
            minValueYaxisKg: 0,
            maxValueYaxisKg: 0,
            minValueYaxisKcal: 0,
            maxValueYaxisKcal: 0,
        }

        // Axios fetching service
        this.services = new Services_01()
    }

    componentDidMount() {
        this.services
            .getUserActivity(this.state.id)
            .then((r) => {
                let userActivity = []
                r.data.data.sessions.map((data) => {
                    userActivity.push({
                        day: data.day.slice(-1),
                        kg: data.kilogram,
                        kCal: data.calories,
                    })
                })
                this.setState({
                    userActivity: userActivity,
                    minValueYaxisKg: Math.min(...userActivity.map(({ kg }) => kg)) - 1,
                    maxValueYaxisKg: Math.max(...userActivity.map(({ kg }) => kg)) + 1,
                    minValueYaxisKcal: Math.min(...userActivity.map(({ kCal }) => kCal)) - 50,
                    maxValueYaxisKcal: Math.max(...userActivity.map(({ kCal }) => kCal)) + 50,
                })
            })
            .catch((err) => {
                this.setState({
                    errModal: true,
                })
            })
    }

    render() {
        return (
            <>
                <div className="activity-chart-legend">
                    <h2 className="chart-title">{this.props.contentData.title}</h2>
                    <div className="charts-legend">
                        <div className="legend">
                            <span className="bullet bullet__black" />
                            {this.props.contentData.weight}
                        </div>
                        <div className="legend">
                            <span className="bullet bullet__red" />
                            {this.props.contentData.CaloriesBurned}
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="99%" height="65%">
                    <BarChart
                        data={this.state.userActivity}
                        barCategoryGap="35%"
                        barGap={8}
                        margin={{ top: 0, right: 0, bottom: 10, left: 35 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        {/*Horizontal*/}
                        <XAxis
                            dy={15}
                            dataKey="day"
                            tickLine={false}
                            tick={{ fontSize: 16 }}
                            stroke={'#9B9EAC'}
                        />
                        {/*Vertical*/}
                        <YAxis
                            yAxisId="kg"
                            dataKey="kg"
                            axisLine={false}
                            orientation="right"
                            allowDecimals={false}
                            tickLine={false}
                            domain={[this.state.minValueYaxisKg, this.state.maxValueYaxisKg]}
                            tick={{ fontSize: 16 }}
                            stroke={'#9B9EAC'}
                        />
                        <YAxis
                            yAxisId="kCal"
                            dataKey="kCal"
                            hide={true}
                            domain={[this.state.minValueYaxisKcal, this.state.maxValueYaxisKcal]}
                        />
                        <Tooltip content={<CustomTooltipBar />} cursor={{ fill: '#e0e0e0' }} />

                        <Bar
                            yAxisId="kg"
                            dataKey="kg"
                            radius={[50, 50, 0, 0]}
                            fill="#000"
                            maxBarSize={7}
                        />
                        <Bar
                            yAxisId="kCal"
                            dataKey="kCal"
                            radius={[50, 50, 0, 0]}
                            fill="#e60000"
                            maxBarSize={7}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </>
        )
    }
}

export default DailyTrackerBar
