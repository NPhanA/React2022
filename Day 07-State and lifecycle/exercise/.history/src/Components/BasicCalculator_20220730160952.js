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
    getInputTop = (obj) => {
        this.setState({ fValue: Number(obj.value) });
        console.log(this.state.fValue)
    }

    getInputBot = (obj) => {
        this.setState({ sValue: Number(obj.value) });
    }

    plusCalculate = ()=>{
        this.setState({ result: this.state.fValue + this.state.sValue});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputTop" onKeyUp={this.getInputTop}></input>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputBot" onKeyUp={this.getInputBot}></input>
                            </div>
                        </form>
                        <p>Result: {this.state.result}</p>
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
