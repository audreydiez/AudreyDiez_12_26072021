import { Component } from 'react'
import './DailyTrackerBar.scss'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltipBar from '../CustomTooltips/CustomTooltipBar/CustomTooltipBar'
import Services from '../../../Services/Services'

class DailyTrackerBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: this.props.userID,

            userActivity: [],
            minValueYaxisKg: 0,
            maxValueYaxisKg: 0,
            minValueYaxisKcal: 0,
            maxValueYaxisKcal: 0,

            errModal: false,
            loading: true,
        }

        this.services = new Services()

        this.updateUserData = this.updateUserData.bind(this)
    }

    componentDidMount() {
        this.services.getUserActivity(this.state.userID, this.updateUserData)
    }

    updateUserData(data) {
        this.setState({
            userActivity: data.fail ? this.state.userActivity : data.content.userActivity,
            minValueYaxisKg: data.fail ? this.state.minValueYaxisKg : data.content.minValueYaxisKg,
            maxValueYaxisKg: data.fail ? this.state.maxValueYaxisKg : data.content.maxValueYaxisKg,
            minValueYaxisKcal: data.fail
                ? this.state.minValueYaxisKcal
                : data.content.minValueYaxisKcal,
            maxValueYaxisKcal: data.fail
                ? this.state.maxValueYaxisKcal
                : data.content.maxValueYaxisKcal,
            loading: data.loading,
            errModal: data.fail,
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
