import { Component } from "react"

class App extends Component {
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
            <div className="container">
                <h1 className="title"></h1>
            </div>
        )

    }



}