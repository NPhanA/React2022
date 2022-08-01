import { Component } from "react";


class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fValue: 0,
            sValue: 0,
            result: 0
        }
    }

    plusCalculate = ()=>{
        let value = this.state.fValue;
        let sValue = this.state.sValue;
        this.setState({ result: parseFloat(value+sValue)});
    }

    updateInputValueT = (evt)=>{
        this.setState({ fValue: evt.target.value});
    }

    updateInputValueB = (evt)=>{
        this.setState({ sValue: evt.target.value});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputTop"  onChange={this.updateInputValueT} ></input>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputBot"  onChange={this.updateInputValueB} ></input>
                            </div>
                        </form>
                        <p>Result: parseFloat({this.state.result}) </p>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.plusCalculate}>+</button>
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
