import { useState } from "react";
export default function ToDo  {
    let [todo, setTodo] = useState([
        { title: "Learn JavaScript", date: "HI", content: "12" },
    ])
    const addTodo = () => {
        let currValue = document.getElementById("input-todo")
        setTodo(...todo)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xxl-4"></div>
                <div className="col-xxl-4">
                    <h1>
                        Todo list
                    </h1>
                    <input type="text" className="form-control mb-3" id="input-todo" onChange={this.updateInput} ></input>
                    <button className="btn btn-primary w-100" role="button" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">Add</button>
                </div>
                <div className="col-xxl-4"></div>
            </div>
            <div className="modal" tabIndex="-1" id="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.state.todo[0].title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-3" placeholder="Date"></input>
                            <input type="text" className="form-control mb-3" placeholder="Content"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


