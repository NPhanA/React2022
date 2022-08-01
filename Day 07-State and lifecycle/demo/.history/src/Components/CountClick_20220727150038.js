import { Component } from "react"
import Button from "./Button";




class CountClick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increaseCount = ()=> {
        this.setState({count: this.state.count + 1});
        }
        
        decreaseCount = ()=> {
            this.setState({count: this.state.count - 1});
            }
    render() {
        return (
            <div>
            <Button className="btn btn-info" labelName="Increase" onclick={this.increaseCount} ></Button>
            <p>{this.state.count}</p>
            <Button className="btn btn-info" labelName="Decrease" onclick={this.decreaseCount} ></Button>

            </div>
        )
    }
}
export default CountClick;