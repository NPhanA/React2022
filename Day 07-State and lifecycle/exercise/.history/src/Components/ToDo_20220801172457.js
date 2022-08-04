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
                        <input type="text" className="form-control mb-3"></input>
                        <button className="btn btn-primary w-100" role="button" type="submit">Add</button>
                    </div>
                    <div className="col-xxl-4"></div>
                </div>
            </div>
        )
    }
}
export default ToDo;