import { Component } from 'react'
import './MacroTracker.scss'

class MacroTracker extends Component {
    render() {
        return (
            <>
                {/*Create all trackers*/}
                {this.props.contentData.map((contentData, index) => (
                    <div className="macro-tracker" key={index}>
                        <div className="container">
                            <div className="icon-container">
                                <img src={'images/' + contentData.file} alt={contentData.alt} />
                            </div>
                            <>
                                {/*// If fetching data failed*/}
                                {typeof this.props.userData.length === 'undefined' ? (
                                    <>
                                        {/*Match content value (name) with userData */}
                                        {Object.entries(this.props.userData).map(([key, value]) => {
                                            if (key.toString() === contentData.name.toString()) {
                                                return (
                                                    <div className="content-container" key={value}>
                                                        <span className="data">
                                                            {value.toString()}
                                                            {contentData.value}
                                                        </span>
                                                        <span className="legend">
                                                            {contentData.alt}
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <div className="content-container">
                                            <span className="legend">Pas de données</span>
                                        </div>
                                    </>
                                )}
                            </>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

export default MacroTracker
