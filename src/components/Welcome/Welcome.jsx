import { Component } from 'react'
import './Welcome.scss'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>
                    Bonjour <span className="txt-colored">Poisson</span>
                </h1>
                <div className="mindset">
                    Alors ? on a peur de se noyer avec un verre d'eau ? 👏
                </div>
            </div>
        )
    }
}

export default Welcome
