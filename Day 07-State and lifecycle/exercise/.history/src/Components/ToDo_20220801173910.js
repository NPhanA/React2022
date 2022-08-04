import { Component } from "react";
class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                { title: "", date: "", content: "" }
            ]
        }
    }


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
                        <button className="btn btn-primary w-100" role="button" type="submit"  data-bs-toggle="modal" data-bs-target="#exampleModalLabel">Add</button>
                    </div>
                    <div className="col-xxl-4"></div>
                </div>

                <div className="modal" tabindex="-1" id="exampleModalLabel">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
export default ToDo;