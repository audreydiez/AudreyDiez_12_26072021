import { Component } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

import './GoalTrackerPercentage.scss'
import Services from '../../../services/Services'

class GoalTrackerPercentage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.userID,
            errModal: false,
            userScoreData: [{ subject: '', value: 0 }],
            userScorePercentage: 0,
        }

        // Axios fetching service
        this.services = new Services()
    }

    componentDidMount() {
        this.services
            .getUserProfile(this.state.id)
            .then((r) => {
                let userScoreData = [
                    { name: 'userScore', value: r.data.data.score, fillColor: '#ff0000' },
                    { name: 'rest', value: 1 - r.data.data.score, fillColor: 'transparent' },
                ]
                this.setState({
                    userScoreData: userScoreData,
                    userScorePercentage: r.data.data.score * 100,
                })
            })
            .catch((err) => {
                this.setState({
                    errMsg: 'Erreur de chargement des données utilisateurs: ' + err,
                    errModal: true,
                })
            })
    }

    render() {
        const data = [{ name: 'Group A', value: 400 }]
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

        return (
            <div className="goalTrackerPercentage-chart">
                <div className="title">Score</div>
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
                    <div className="goal__text">de votre objectif</div>
                </div>
            </div>
        )
    }
}

export default GoalTrackerPercentage
