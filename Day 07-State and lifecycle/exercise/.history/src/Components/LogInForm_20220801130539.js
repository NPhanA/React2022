import { Component } from "react";



class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: { email: "", password: "", isRemember: false },
            isValid: false,
            isLoggedIn: false,
        }
    }
}

export default LogIn;
