import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import TableRow from "./Component/TableComponent";
import TableRowInput from "./Component/ChangeInput";
const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    console.log(newContacts[index]);
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    // <div className="app-container">
    //   <form onSubmit={handleEditFormSubmit}>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Name</th>
    //           <th>Address</th>
    //           <th>Phone Number</th>
    //           <th>Email</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {contacts.map((contact) => (
    //           <Fragment>
    //             {editContactId === contact.id ? (
    //               <EditableRow
    //                 editFormData={editFormData}
    //                 handleEditFormChange={handleEditFormChange}
    //                 handleCancelClick={handleCancelClick}
    //               />
    //             ) : (
    //               <ReadOnlyRow
    //                 contact={contact}
    //                 handleEditClick={handleEditClick}
    //                 handleDeleteClick={handleDeleteClick}
    //               />
    //             )}
    //           </Fragment>
    //         ))}
    //       </tbody>
    //     </table>
    //   </form>

    //   <h2>Add a Contact</h2>
    //   <form onSubmit={handleAddFormSubmit}>
    //     <input
    //       type="text"
    //       name="fullName"
    //       required="required"
    //       placeholder="Enter a name..."
    //       onChange={handleAddFormChange}
    //     />
    //     <input
    //       type="text"
    //       name="address"
    //       required="required"
    //       placeholder="Enter an addres..."
    //       onChange={handleAddFormChange}
    //     />
    //     <input
    //       type="text"
    //       name="phoneNumber"
    //       required="required"
    //       placeholder="Enter a phone number..."
    //       onChange={handleAddFormChange}
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       required="required"
    //       placeholder="Enter an email..."
    //       onChange={handleAddFormChange}
    //     />
    //     <button type="submit">Add</button>
    //   </form>
    // </div>







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
                            <form onSubmit={handleEditFormSubmit}>
                                <table class="table table-striped table-dark mt-3 text-center" >
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
                                                <Fragment >
                                                    {editContactID === currentValue.id ? <TableRowInput  ></TableRowInput> : <TableRow ></TableRow>}
                                                </Fragment>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </form>
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

                    </div>
                </div>
            </div>
        </div>
  );
};

export default App;
