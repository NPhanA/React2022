import { Component } from "react";
import CalButton from "./CalButton";

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
                                <input type="number" className="form-control" id="inputBot" ></input>
                            </div>
                        </form>
                        <p>Result: {this.state.result}</p>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button">+</button>
                            <button className="btn btn-outline-secondary" type="button">-</button>
                            <button className="btn btn-outline-secondary" type="button">X</button>
                            <button className="btn btn-outline-secondary" type="button">/</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




}

export default Calculator;
