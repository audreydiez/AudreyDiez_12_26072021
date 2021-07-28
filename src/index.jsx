import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import './../src/assets/styles/Normalize.css'
import './../src/assets/styles/_variables.scss'

import App from './containers/App/App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
