import { Component } from "react"
import Button from "./Button";

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