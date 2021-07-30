import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './../Home/Home'
import ErrorPage from './../../components/ErrorPage/ErrorPage'
import { Component } from 'react/cjs/react.production.min'
import Dashboard from '../../containers/Dashboard/Dashboard'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
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
