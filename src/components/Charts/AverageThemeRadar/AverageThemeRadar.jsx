import { Component } from 'react'
import './AverageThemeRadar.scss'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
import Services from '../../../services/Services'

class AverageThemeRadar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.userID,
            errModal: false,
            userAverageThemeData: [{ subject: '', value: 0 }],
        }

        // Axios fetching service
        this.services = new Services()
    }

    componentDidMount() {
        this.services
            .getUserPerformance(this.state.id)
            .then((r) => {
                console.log(r.data.data)
                let userAverageThemeData = []
                r.data.data.data.map((data, index) => {
                    userAverageThemeData.push({
                        subject:
                            r.data.data.kind[index + 1].charAt(0).toUpperCase() +
                            r.data.data.kind[index + 1].slice(1),
                        value: data.value,
                    })
                })

                this.setState({
                    userAverageThemeData: userAverageThemeData,
                })
            })
            .catch((err) => {
                this.setState({
                    errModal: true,
                })
            })
    }

    render() {
        const data = [
            {
                subject: 'Math',
                A: 120,
                B: 110,
                fullMark: 150,
            },
            {
                subject: 'Chinese',
                A: 98,
                B: 130,
                fullMark: 150,
            },
            {
                subject: 'English',
                A: 86,
                B: 130,
                fullMark: 150,
            },
            {
                subject: 'Geography',
                A: 99,
                B: 100,
                fullMark: 150,
            },
            {
                subject: 'Physics',
                A: 85,
                B: 90,
                fullMark: 150,
            },
            {
                subject: 'History',
                A: 65,
                B: 85,
                fullMark: 150,
            },
        ]
        console.log(data)
        console.log(this.state.userAverageThemeData)

        return (
            <div className="radar-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        data={this.state.userAverageThemeData}
                    >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            dataKey="subject"
                            stroke="white"
                            tickLine={false}
                            tick={{
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        />

                        <Radar
                            name="Mike"
                            dataKey="value"
                            fill="#ff0101"
                            fillOpacity={0.7}
                            stroke="transparent"
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
export default AverageThemeRadar
