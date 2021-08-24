import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ErrorPage from 'components/ErrorPage/ErrorPage'
import { Component } from 'react/cjs/react.production.min'
import Dashboard from 'containers/Dashboard/Dashboard'

import websiteContentDefault from './../../assets/data/content_default.json'

import AxiosAPIProvider from '../../Services/AxiosAPIProvider'
import Loader from '../../components/Loader/Loader'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: websiteContentDefault,
            loading: true,
            errModal: false,
            overlay: true,

            key: 0,
        }

        // Axios fetching service
        this.apiProvider = new AxiosAPIProvider()
    }

    componentDidMount() {
        this.apiProvider.getContentData().then((response) => {
            console.log(response)
            this.setState({
                websiteContent: response.fail ? websiteContentDefault : response.content,
                message: response.fail ? response.errorMsg : this.state.message,
                errModal: response.fail,
                loading: false,
                overlay: response.fail,
                key: this.state.key + 1,
            })
        })
    }

    displayInfoBox = () => {
        return (
            // Overlay - If loading => loader, if Error fetching => ErrModal
            <div className={`overlay ${this.state.overlay ? 'active' : ''}`}>
                {this.state.loading && <Loader />}

                {this.state.errModal && (
                    <div className="overlay__modal">
                        <span>{this.state.message}</span>
                        <button onClick={this.closeInfoBox}>Fermer</button>
                    </div>
                )}
            </div>
        )
    }

    closeInfoBox = () => {
        this.setState({ errModal: false, loading: false })
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
                                {this.displayInfoBox()}
                                <Dashboard
                                    data={this.state.websiteContent}
                                    key={this.state.key}
                                    id={match.params.id}
                                    displayInfoBox={this.displayInfoBox}
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
