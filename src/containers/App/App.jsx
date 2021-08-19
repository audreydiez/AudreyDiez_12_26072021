import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ErrorPage from 'components/ErrorPage/ErrorPage'
import { Component } from 'react/cjs/react.production.min'
import Dashboard from 'containers/Dashboard/Dashboard'

import websiteContentDefault from './../../assets/data/content_default.json'

import Services from '../../Services/Services'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: websiteContentDefault,
            loading: true,
            message: 'Chargement des données',
            errModal: false,
            key: 0,
        }

        // Axios fetching service
        this.services = new Services()

        this.updateContentData = this.updateContentData.bind(this)
    }

    componentDidMount() {
        this.services.getContentData(this.updateContentData)
    }

    updateContentData(data) {
        this.setState({
            websiteContent: data.fail ? websiteContentDefault : data.content,
            loading: data.loading,
            message: data.fail ? data.errorMsg : this.state.message,
            errModal: data.fail,
            key: this.state.key + 1,
        })
    }

    displayModalError = () => {
        return (
            <div className={`overlay-error ${this.state.errModal ? 'active' : ''}`}>
                <div className="overlay-error__modal">
                    <span>{this.state.message}</span>
                    <button onClick={this.closeModalError}>Fermer</button>
                </div>
            </div>
        )
    }

    closeModalError = () => {
        this.setState({ errModal: false })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/:id"
                        render={({ match }) => (
                            <>
                                {this.displayModalError()}
                                <Dashboard
                                    data={this.state.websiteContent}
                                    key={this.state.key}
                                    id={match.params.id}
                                />
                            </>
                        )}
                    />
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
