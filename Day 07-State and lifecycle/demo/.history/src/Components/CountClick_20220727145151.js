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
            <Button></Button>
        )
    }
}
export default CountClick;