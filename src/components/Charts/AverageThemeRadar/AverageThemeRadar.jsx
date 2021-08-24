import { Component } from 'react'
import './AverageThemeRadar.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import AxiosAPIProvider from '../../../Services/AxiosAPIProvider'

class AverageThemeRadar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: this.props.userID,
            errModal: false,
            userAverageThemeData: [{ subject: '', value: 0 }],
        }

        this.services = new AxiosAPIProvider()

        this.updateUserData = this.updateUserData.bind(this)
    }

    componentDidMount() {
        this.services.getUserPerformance(this.state.userID, this.updateUserData)
    }

    updateUserData(data) {
        this.setState({
            userAverageThemeData: data.fail ? this.state.userAverageThemeData : data.content,

            loading: data.loading,
            errModal: data.fail,
        })
    }

    render() {
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
