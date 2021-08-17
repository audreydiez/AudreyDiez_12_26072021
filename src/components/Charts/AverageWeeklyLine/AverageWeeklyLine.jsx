import { Component } from 'react'
import './AverageWeeklyLine.scss'

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts'
import Services from '../../../services/Services'
import CustomTooltipLine from '../CustomTooltipLine/CustomTooltipLine'

class AverageWeeklyLine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.userID,
            errModal: false,
            userAverageSession: [],
            minValueYaxis: 0,
            maxValueYaxis: 0,
        }

        // Axios fetching service
        this.services = new Services()
    }

    componentDidMount() {
        this.services
            .getUserAverageSession(this.state.id)
            .then((r) => {
                let userAverageSession = []
                console.log(r.data.data.sessions)
                r.data.data.sessions.map((data) => {
                    userAverageSession.push({
                        day: this.getXAxis(data.day),
                        sessionLength: data.sessionLength,
                    })
                })
                this.setState({
                    userAverageSession: userAverageSession,
                    minValueYaxis: Math.min(
                        ...userAverageSession.map(({ sessionLength }) => sessionLength / 1.66),
                    ),
                    maxValueYaxis: Math.max(
                        ...userAverageSession.map(({ sessionLength }) => sessionLength * 1.5),
                    ),
                })
            })
            .catch((err) => {
                this.setState({
                    errModal: true,
                })
            })
    }

    getXAxis = (data) => {
        let value = ''
        switch (data) {
            case 1:
                value = 'L'
                break
            case 2:
                value = 'M'
                break
            case 3:
                value = 'M'
                break
            case 4:
                value = 'J'
                break
            case 5:
                value = 'V'
                break
            case 6:
                value = 'S'
                break
            case 7:
                value = 'D'
                break
            default:
                value = ''
        }
        return value
    }

    render() {
        const data = [
            {
                name: 'L',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: 'M',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: 'M',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: 'J',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: 'V',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: 'S',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: 'D',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
        ]

        return (
            <div className="line-chart">
                <div className="average-sessions-chart-legend">Durée moyenne des sessions</div>
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
