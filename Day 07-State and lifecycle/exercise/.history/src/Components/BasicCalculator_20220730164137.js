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

    calPlus = ()=>{
        this.setState({ result: this.state.fValue + this.state.sValue});
    }

    calMinus = ()=>{
        this.setState({ result: this.state.fValue - this.state.sValue});
    }
    calMultiply = ()=>{
        this.setState({ result: this.state.fValue * this.state.sValue});
    }
    calDivide = ()=>{
        this.setState({ result: this.state.fValue / this.state.sValue});
    }


    updateInputValueT = (evt)=>{
        this.setState({ fValue: parseFloat(evt.target.value) });
    }

    updateInputValueB = (evt)=>{
        this.setState({ sValue: parseFloat(evt.target.value)});
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
                        <p>Result: {this.state.result}</p>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.calPlus}>+</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.calMinus}>-</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.calMultiply}>X</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.calDivide}>/</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




}

export default Calculator;
