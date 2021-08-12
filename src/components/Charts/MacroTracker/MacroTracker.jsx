import { Component } from 'react'
import './MacroTracker.scss'

class MacroTracker extends Component {
    render() {
        return (
            <>
                {this.props.contentData.map((contentData, index) => (
                    <div className="macro-tracker" key={index}>
                        <div className="container">
                            <div className="icon-container">
                                <img src={'images/' + contentData.file} alt={contentData.alt} />
                            </div>
                            <div className="content-container">
                                {Object.entries(this.props.userData).map(([key, value]) => {
                                    if (key.toString() === contentData.name.toString()) {
                                        return (
                                            <>
                                                <span className="data">
                                                    {value.toString()}
                                                    {contentData.value}
                                                </span>
                                                <span className="legend">{contentData.alt}</span>
                                            </>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

export default MacroTracker
