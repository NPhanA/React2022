import { Component } from "react";
import CalButton from "./CalButton";
import FormCal from "./FormComponent";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fValue: 0,
            sValue: 0,
            result: 0
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <FormCal></FormCal>
                    <p>Result: </p>
                    <CalButton></CalButton>
                </div>
            </div>
        )
    }




}

export default Calculator;
