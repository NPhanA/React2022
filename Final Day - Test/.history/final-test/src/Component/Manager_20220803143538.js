import { useState } from 'react';
import '../Avatar.css';
import NavBarComponents from '../Component/NavBarComponent';
import ButtonGroup from './ButtonGroupComponents';
import SelectCard from './SelectClass';
import StartEndComponents from './StartEndComponents';
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
                        <StartEndComponents ManageObject="TEACHER"></StartEndComponents>
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
                                <SelectCard type="text" id="input-select" Select="Select class name :"></SelectCard>
                            </div>
                            <div className="col-xxl-7 d-flex justify-content-end">
                                <ButtonGroup className="btn btn-secondary bg-success" buttonContent="Print"></ButtonGroup>
                                <ButtonGroup className="btn btn-dark" buttonContent="Import"></ButtonGroup>
                                <ButtonGroup className="btn btn-info" buttonContent="Export"></ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}