import { Component } from 'react'
import './ErrorPage.scss'

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-container">
                <div className="message">
                    <span>Page non trouvée !</span>
                </div>
            </div>
        )
    }
}

export default ErrorPage
