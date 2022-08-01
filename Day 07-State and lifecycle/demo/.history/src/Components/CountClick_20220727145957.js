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
            <Button className="btn btn-info" labelName="Increase" ></Button>
            <Button className="btn btn-info" labelName="Decrease"></Button>
            </div>
        )
    }
}
export default CountClick;