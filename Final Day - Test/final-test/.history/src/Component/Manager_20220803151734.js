import { useState } from 'react';
import '../Avatar.css';
import NavBarComponents from '../Component/NavBarComponent';
import ModalBT from './BootStrapModal';
import ButtonGroup from './ButtonGroupComponents';
import SelectCard from './SelectClass';
import StartEndComponents from './StartEndComponents';
export default function TeacherManager() {
    let [teacher, setTeachers] = useState([
        { id: 0, name: "", age: 0, address: "", phoneNumber: 0, class: "" },
    ])

    const addTeacher = () => {
        let currValue = document.getElementById("input-name").value;
        let currDate = document.getElementById("input-age").value;
        let contentNow = document.getElementById("input-content").value;
        let currAddress = document.getElementById("input-address").value;
        let currNumbers = document.getElementById("input-phoneNumber").value;
        let currClass = document.getElementById("input-class").value;
        setTeachers([...teacher, { title: currValue, date: currDate, content: contentNow }])
    }




    return (
        <div>
            <NavBarComponents contentTitle="VTI Teacher Manager" contentText="Every things has a start and an end" role="admin" img="https://www.w3schools.com/w3images/avatar2.png"></NavBarComponents>
            <div className="row">
                <div className="col-xxl-1"></div>
                <div className="col-xxl-11">
                    <div className="container">
                        <StartEndComponents ManageObject="TEACHER"></StartEndComponents>
                        <div className="fs-5 mt-5 d-flex ">
                            <div className="col-xxl-4 d-inlne">
                                <SelectCard type="text" id="input-select" Select="Select class name :"></SelectCard>
                            </div>
                            <div className="col-xxl-7 d-flex justify-content-end">
                                <ButtonGroup className="btn btn-secondary bg-success" buttonContent="Print"></ButtonGroup>
                                <ButtonGroup className="btn btn-dark" buttonContent="Import"></ButtonGroup>
                                <ButtonGroup className="btn btn-info" buttonContent="Export"></ButtonGroup>
                            </div>
                        </div>
                        <div className="col-xxl-11">
                        <table class="table table-striped table-dark mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Class</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td> 
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" tabIndex="-1" id="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Teacher</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-3" placeholder="Name" id="input-name"></input>
                            <input type="text" className="form-control mb-3" placeholder="Age" id="input-age"></input>
                            <input type="text" className="form-control mb-3" placeholder="Address" id="input-address"></input>
                            <input type="text" className="form-control mb-3" placeholder="Phone Number" id="input-phoneNumber"></input>
                            <input type="text" className="form-control mb-3" placeholder="Class" id="input-class"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}