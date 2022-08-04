import { useState } from 'react';
import '../Avatar.css';
import NavBarComponents from '../Component/NavBarComponent';
import ButtonGroup from './ButtonGroupComponents';
import SelectCard from './SelectClass';
import StartEndComponents from './StartEndComponents';
import TableRow from './TableComponent';
export default function TeacherManager() {
    let [teacher, setTeachers] = useState([
        { id: 0, name: "John Smith", age: 31, address: "London", phoneNumber: "0918321", teachedClass: "English" },
    ])

    const addTeacher = () => {
        let currValue = document.getElementById("input-name").value;
        let currDate = document.getElementById("input-age").value;
        let currAddress = document.getElementById("input-address").value;
        let currNumbers = document.getElementById("input-phoneNumber").value;
        let currClass = document.getElementById("input-class").value;
        if (currValue.length == 0 || currDate.length == 0 || currAddress.length == 0 || currNumbers.length == 0 || currClass.length == 0) {
            alert("Please enter all field");
        } else {
            setTeachers([...teacher, { name: currValue, age: currDate, address: currAddress, phoneNumber: currNumbers, teachedClass: currClass }])
        }
    }


    const deleteItem=(id)=>setTeachers({
            teacher: teacher.filter(teacher=>teacher.id!=id)
    })


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
                            <table class="table table-striped table-dark mt-3 text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        teacher.map((currentValue, index) => (
                                            <TableRow key={index} name={currentValue.name} numbers={index} age={currentValue.age} address={currentValue.address} phoneNumber={currentValue.phoneNumber} teachedClass={currentValue.teachedClass} onClick={}  ></TableRow>
                                        ))
                                    }
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
                        <form>
                            <div className="modal-body">

                                <input type="text" className="form-control mb-3" placeholder="Name" id="input-name" required></input>
                                <input type="text" className="form-control mb-3" placeholder="Age" id="input-age" required></input>
                                <input type="text" className="form-control mb-3" placeholder="Address" id="input-address" required></input>
                                <input type="text" className="form-control mb-3" placeholder="Phone Number" id="input-phoneNumber" required></input>
                                <input type="text" className="form-control mb-3" placeholder="Class" id="input-class" required></input>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addTeacher} >Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}