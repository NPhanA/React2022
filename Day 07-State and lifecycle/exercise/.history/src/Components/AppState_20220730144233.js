import { Component } from "react"
import CreateApp from "./ButtonComponent"
import CreateContent from "./ButtonContent"

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
           
                <div className="container">
        <div className="row text-center">
            <h1 className="title">Conditional Rendering</h1> 
            <button className="btn btn-primary" onClick={this.handleEnxpandTrue}>Xem giới thiệu</button>
        </div>
    </div>
             
           
        )
        }else if (this.state.isExpand == true){
            <div>
                <CreateContent content="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"></CreateContent>
                <button className="btn btn-primary" onClick = {this.handleEnxpandFalse}>Đóng giới thiệu</button>
            </div>
            
        }
        
    }
}

export default AppState;