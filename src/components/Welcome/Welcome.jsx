import { Component } from 'react'
import './Welcome.scss'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>
                    Bonjour <span className="txt-colored">Germaine</span>
                </h1>
                <div className="mindset">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
        )
    }
}

export default Welcome
