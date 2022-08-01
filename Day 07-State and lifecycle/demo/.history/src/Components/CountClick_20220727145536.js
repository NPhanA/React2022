import { Component } from "react"
import Button from "./Button";


increaseCount = ()=> {
this.setState({count: this.count + 1});
}

class CountClick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
            <Button className="btn btn-info"></Button>
            <Button className="btn btn-info"></Button>
            </div>
        )
    }
}
export default CountClick;