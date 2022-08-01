import { Component } from "react"

class AppState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpand: false
        }
    }
    handleEnxpandTrue = () => {
        this.setState({ isExpand: true })
    }

    handleEnxpandFalse = () => {
        this.setState({ isExpand: false })
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row text-center">
                <h1 className="title">Conditional Rendering</h1>
                </div>
            </div>
        )
    }
}

export default AppState;