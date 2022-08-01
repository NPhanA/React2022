import { Component } from "react"
import CreateApp from "./ButtonComponent"

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
        if(this.state.isExpand == false){
            return (
            <CreateApp buttonContent="Xem giới thiệu"></CreateApp>
        )
        }else if (this.state.isExpand == true){
            <div className="container">
                <div className="row text-center">
                <h1 className="title">Conditional Rendering</h1>
                <button className="btn btn-primary">Đóng giới thiệu</button>
                </div>
            </div>
        }
        
    }
}

export default AppState;