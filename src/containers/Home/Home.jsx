import { Component } from 'react'
import './Home.scss'

import logo from './../../assets/images/logo.svg'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__popin">
                    <img src={logo} alt="Logo" className="home__popin--logo" />
                    <h1 className="home__popin--title">
                        Bienvenue <span className="text-color">Maurice</span>
                    </h1>
                    <button className="home__popin--btn">Voir mon dashboard</button>
                </div>
            </div>
        )
    }
}

export default Home
