import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min'

import websiteContentDefault from 'assets/data/content_default.json'

import AxiosAPIProvider from 'Services/AxiosAPIProvider'

import Dashboard from 'containers/Dashboard/Dashboard'
import InfoBox from 'components/InfoBox/InfoBox'
import ErrorPage from 'components/ErrorPage/ErrorPage'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: websiteContentDefault,
            loading: true,
            errModal: false,
            overlay: false,
            key: 0,
        }

        // Axios fetching service
        this.apiProvider = new AxiosAPIProvider()
    }

    componentDidMount() {
        this.apiProvider.getContentData().then((response) => {
            this.setState({})

            if (response.fail) {
                this.setState({
                    websiteContent: websiteContentDefault,
                    message: response.errorMsg + ' : Erreur de chargement du site',
                    errModal: response.fail,
                    loading: false,
                    overlay: response.fail,
                    key: this.state.key + 1,
                })
            } else {
                this.setState({
                    websiteContent: response.content,
                    loading: false,
                    key: this.state.key + 1,
                })
            }
        })
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
                                {this.state.overlay ? (
                                    <InfoBox
                                        loading={this.state.loading}
                                        errModal={this.state.errModal}
                                        message={this.state.message}
                                        key={this.state.key + 1}
                                    />
                                ) : (
                                    <Dashboard
                                        data={this.state.websiteContent}
                                        key={this.state.key}
                                        id={match.params.id}
                                    />
                                )}
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
