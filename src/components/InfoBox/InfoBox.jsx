import { Component } from 'react'
import './InfoBox.scss'
import Loader from 'components/Loader/Loader'
import PropTypes from 'prop-types'

class InfoBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: this.props.loading,
            errModal: this.props.errModal,
            overlay: true,
            msg: this.props.message,
        }
    }

    render() {
        return (
            // Overlay - If loading => loader, if Error fetching => ErrModal
            <div className={`overlay ${this.state.overlay ? 'active' : ''}`}>
                {this.state.loading && <Loader fill="#fff" />}

                {this.state.errModal && (
                    <div className="overlay__modal">
                        <span>{this.state.msg}</span>
                        <button onClick={() => this.setState({ overlay: false })}>Fermer</button>
                    </div>
                )}
            </div>
        )
    }
}

InfoBox.propTypes = {
    loading: PropTypes.bool.isRequired,
    errModal: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}

export default InfoBox
