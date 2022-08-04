import { useState } from 'react';
import '../Avatar.css';
import NavBarComponents from '../Component/NavBarComponent';
import ButtonGroup from './ButtonGroupComponents';
export default function TeacherManager() {
    let [teacher, setTeachers] = useState([
        { id: "", name: "", age: 0, address: "", phoneNumber: 0, class: "" },
    ])
    return (
        <div>
            <NavBarComponents contentTitle="VTI Teacher Manager" contentText="Every things has a start and an end" role="admin" img="https://www.w3schools.com/w3images/avatar2.png"></NavBarComponents>
            <div className="row">
                <div className="col-xxl-1"></div>
                <div className="col-xxl-11">
                    <div className="container">
                        <div className="fs-5 mt-3 d-flex ">
                            <div className="col-xxl-3">
                                <div>TEACHER</div>
                            </div>
                            <div className="col-xxl-8 d-flex justify-content-end">
                                <button type="button" className="btn btn-info ms-5">Create New</button>
                            </div>
                        </div>
                        <div className="fs-5 mt-5 d-flex ">
                            <div className="col-xxl-4 d-inlne">
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Select class name :</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 d-flex justify-content-end">
                                <ButtonGroup class="btn btn-success" buttonContent="Print"></ButtonGroup>
                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-dark ">Import</button>
                                    <button type="button" class="btn btn-dark me-2">↓</button>
                                </div>
                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-info">Export</button>
                                    <button type="button" class="btn btn-info">↓</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}