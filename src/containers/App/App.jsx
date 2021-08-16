import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './../Home/Home'
import ErrorPage from 'components/ErrorPage/ErrorPage'
import { Component } from 'react/cjs/react.production.min'
import Dashboard from 'containers/Dashboard/Dashboard'

import websiteContent from './../../assets/data/content.json'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            websiteContent: websiteContent['fr-FR'],
        }
    }

    //todo fetch
    //didmount -> fetch (promise avec fail, sucess) puis setstate + spinner

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home data={this.state.websiteContent} />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard data={this.state.websiteContent} />
                    </Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
