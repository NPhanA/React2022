import { Component } from "react";
class ToDo extends Component {





    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4"></div>
                    <div className="col-xxl-4">
                        <h1>
                            Todo list
                        </h1>
                        <div className="col">
                            <input type="text" className="form-control"></input>
                        <button className="btn btn-primary" role="button" type="submit">Add</button>
                        </div>
                    </div>
                    <div className="col-xxl-4"></div>
                </div>
            </div>

        )



    }

}
export default ToDo;