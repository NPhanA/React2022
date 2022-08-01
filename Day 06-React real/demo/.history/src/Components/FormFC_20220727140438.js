import { Component } from "react";
import InputFC from "./InputFunctionalComp";
class FormFc extends Component {
    render(){
        return (
        <div className="container">
            <h1>Email</h1>
            <InputFC type="email"></InputFC>
            <h1>Password</h1>
            <InputFC type="password"></InputFC>
            <br></br>
            <InputFC type="submit"></InputFC>
            </div>
       );
    }
    
}

export default FormFc;