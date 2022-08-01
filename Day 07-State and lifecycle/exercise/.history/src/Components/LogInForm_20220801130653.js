import { Component } from "react";



class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: { email: "", password: "", isRemember: false },
            isValid: false,
            isLoggedIn: false
        }

        handleChange = (event) => {
            this.setState((state) => {
            const { form } = state
            form[event.target.name] = event.target.value
            return { form }
            }, () => this.checkValidForm())
            }
            
            handleChangeCheckbox = () => {
            this.setState((state) => {
            const { form } = state
            form.isRemember = !form.isRemember
            return { form }
            }, () => this.checkValidForm())
            }
            
            checkValidForm = () => {
            const { email, password } = this.state.form
            const value = email && password
            this.setState({ isValid: value })
            }
            
            handleSubmit = () => {
            if (this.state.isValid){
            this.setState({ isLoggedIn: true })
            }
            }
            
            handleLogOut = () => {
            this.setState({ isLoggedIn: false })
            }
    }
}

export default LogIn;
