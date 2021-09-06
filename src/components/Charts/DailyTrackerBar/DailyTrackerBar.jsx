import { Component } from 'react'
import './DailyTrackerBar.scss'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltipBar from '../CustomTooltips/CustomTooltipBar/CustomTooltipBar'
import AxiosAPIProvider from 'Services/AxiosAPIProvider'
import Loader from 'components/Loader/Loader'
import PropTypes from 'prop-types'

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

            loading: true,
            key: 0,
        }

        this.apiProvider = new AxiosAPIProvider()
    }

    componentDidMount() {
        // Fetching data from API and populate states
        this.apiProvider
            .getUserActivity(this.state.userID)
            .then((response) => {
                this.setState({
                    userActivity: response.content.userActivity,
                    minValueYaxisKg: response.content.minValueYaxisKg,
                    maxValueYaxisKg: response.content.maxValueYaxisKg,
                    minValueYaxisKcal: response.content.minValueYaxisKcal,
                    maxValueYaxisKcal: response.content.maxValueYaxisKcal,
                    loading: false,
                    key: this.state.key + 1,
                })
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    message: error.message,
                    key: this.state.key + 1,
                })
            })
    }

    /**
     * Create the bar chart, filled with website texts and user data
     * @return  {JSX.Element}
     */
    displayBarChart() {
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

    render() {
        return this.state.loading ? (
            <Loader fill="#e60000" message={this.state.message} key={this.state.key} />
        ) : (
            this.displayBarChart()
        )
    }
}

DailyTrackerBar.propTypes = {
    contentData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        CaloriesBurned: PropTypes.string.isRequired,
    }),
    userID: PropTypes.string.isRequired,
}

export default DailyTrackerBar
