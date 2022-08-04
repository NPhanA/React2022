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