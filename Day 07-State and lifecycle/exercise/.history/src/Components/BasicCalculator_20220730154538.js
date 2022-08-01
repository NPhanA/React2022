import { Component } from "react";
import CalButton from "./CalButton";
import FormCal from "./FormComponent";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fValue: document.getElementById('inputTop').value,
            sValue: document.getElementById('inputBot').value,
            result: 0
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4">
                    <form>
        <div className="mb-3">
            <input type="number" className="form-control" id="inputTop" ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className={props.className} id = "inputBot"></input>
        </div>
    </form> 
                    <p>Result: {this.state.result}</p>
                    <CalButton></CalButton>
                </div>
                </div>
            </div>
        )
    }




}

export default Calculator;
