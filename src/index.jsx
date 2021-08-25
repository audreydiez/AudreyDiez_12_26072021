import React from 'react'
import ReactDOM from 'react-dom'

import 'index.scss'
import 'assets/styles/Normalize.css'
import 'assets/styles/_variables.scss'

import App from 'containers/App/App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
