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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }




}

export default Calculator;
