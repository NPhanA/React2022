import { Component } from "react";
import CalButton from "./CalButton";
import FormCal from "./FormComponent";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fValue: document.getElementById('inputTop').value,
            sValue: document.getElementById('inputBottom').value,
            result: 0
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4">
                    <FormCal type="number" className="form-control"></FormCal>
                    <p>Result: {this.state.result}</p>
                    <CalButton></CalButton>
                </div>
                </div>
            </div>
        )
    }




}

export default Calculator;
