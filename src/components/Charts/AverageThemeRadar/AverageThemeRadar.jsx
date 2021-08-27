import { Component } from 'react'
import './AverageThemeRadar.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import AxiosAPIProvider from 'Services/AxiosAPIProvider'
import Loader from 'components/Loader/Loader'
import PropTypes from 'prop-types'

class AverageThemeRadar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: this.props.userID,
            userAverageThemeData: [{ subject: '', value: 0 }],
        }

        this.apiProvider = new AxiosAPIProvider()
    }

    componentDidMount() {
        // Fetching data from API and populate states
        this.apiProvider
            .getUserPerformance(this.state.userID)
            .then((response) => {
                this.setState({
                    userAverageThemeData: response.content,
                    loading: false,
                    key: this.state.key + 1,
                })
            })
            .catch((error) => {
                this.setState({
                    message: error.message,
                    loading: true,
                })
            })
    }

    /**
     * Create the chart filled with website texts and user data
     * @return  {JSX.Element}
     */
    displayRadarChart() {
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

    render() {
        return this.state.loading ? (
            <Loader fill="#e60000" message={this.state.message} key={this.state.key} />
        ) : (
            this.displayRadarChart()
        )
    }
}

AverageThemeRadar.propTypes = {
    userID: PropTypes.string.isRequired,
}

export default AverageThemeRadar
