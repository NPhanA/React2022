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
            <CreateApp buttonContent="Xem giới thiệu"></CreateApp>
        )
        }else if (this.state.isExpand == true){
            <CreateContent></CreateContent>
        }
        
    }
}

export default AppState;