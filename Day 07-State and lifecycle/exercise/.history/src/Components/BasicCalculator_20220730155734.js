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
        this.setState({ fValue: obj.value });
    }

    getInputBot = (obj) => {
        this.setState({ sValue: obj.value });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4">
                        <form>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="inputTop" onKeyUp={getInputTop(this)}></input>
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="inputBot" onKeyUp={getInputTop(this)}></input>
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
