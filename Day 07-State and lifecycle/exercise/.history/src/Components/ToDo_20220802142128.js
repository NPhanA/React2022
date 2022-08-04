import { useState } from "react";
export default function ToDo() {
    let [todo, setTodo] = useState([
        { title: "Learn JavaScript", date: "HI", content: "12" },
    ])

    const addTodo = ()  => {
        let currValue = document.getElementById("input-todo");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xxl-4"></div>
                <div className="col-xxl-4">
                    <h1>
                        Todo list
                    </h1>
                    <input type="text" className="form-control mb-3" id="input-todo" ></input>
                    <button className="btn btn-primary w-100" role="button" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">Add</button>
                </div>
                <div className="col-xxl-4"></div>
            </div>

        </div>
    )
}


