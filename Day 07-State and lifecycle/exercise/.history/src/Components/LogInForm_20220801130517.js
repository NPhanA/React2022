import { Component } from "react";



class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: { email: "", password: "", isRemember: false },
            sValue: 0,
            result: 0
        }
    }
}

export default LogIn;
