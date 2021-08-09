import { Component } from 'react'
import './Home.scss'

import logo from './../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__popin">
                    <img src={logo} alt="Logo" className="home__popin--logo" />
                    <h1 className="home__popin--title">
                        {this.props.data.connexion.title}{' '}
                        <span className="text-color">Maurice </span>
                    </h1>

                    <Link to="/dashboard">
                        <button className="home__popin--btn">
                            {this.props.data.connexion.button}
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home
