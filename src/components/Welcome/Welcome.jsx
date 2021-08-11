import { Component } from 'react'
import './Welcome.scss'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.contentData.title}{' '}
                    <span className="txt-colored">{this.props.userData}</span>
                </h1>
                <div className="mindset">{this.props.contentData.subTitle}</div>
            </div>
        )
    }
}

export default Welcome
