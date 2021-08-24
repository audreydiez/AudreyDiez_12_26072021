import { Component } from 'react'
import './Loader.scss'
import AxiosAPIProvider from '../../Services/AxiosAPIProvider'

class Loader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: this.props.message,
        }
    }

    render() {
        return (
            <div className="dots-container">
                <svg
                    version="1.1"
                    id="L4"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 0 0"
                    className="loader-dots"
                >
                    <circle fill="{this.props.fill}" stroke="none" cx="30" cy="50" r="6">
                        <animate
                            attributeName="opacity"
                            dur="1s"
                            values="0;1;0"
                            repeatCount="indefinite"
                            begin="0.1"
                        />
                    </circle>
                    <circle ill="{this.props.fill}" stroke="none" cx="50" cy="50" r="6">
                        <animate
                            attributeName="opacity"
                            dur="1s"
                            values="0;1;0"
                            repeatCount="indefinite"
                            begin="0.2"
                        />
                    </circle>
                    <circle ill="{this.props.fill}" stroke="none" cx="70" cy="50" r="6">
                        <animate
                            attributeName="opacity"
                            dur="1s"
                            values="0;1;0"
                            repeatCount="indefinite"
                            begin="0.3"
                        />
                    </circle>
                </svg>
                <div className="dots-msg">{this.state.message}</div>
            </div>
        )
    }
}

export default Loader
