export default function TableRowInput(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>
                <input type="text" className="form-control" placeholder="Name" name="name" required="required" defaultValue={editFormData.fullName}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" className="form-control" placeholder="Age" name="Age" required="required" 
                    defaultValue={editFormData.address}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" className="form-control" placeholder="Address" name="Address" required="required" value={editFormData.address}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" className="form-control" placeholder="Phone Number" name="PhoneNumber" required="required" value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" className="form-control" placeholder="Class" name="TeachedClass" required="required" value={editFormData.teachedClass}
                    onChange={handleEditFormChange}></input>
            </td>
            <td>
                <button type="submit" className="btn btn-primary" onClick={props.onSubmit}>Save</button>
            </td>
        </tr>
    )
}


import React from "react";

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an address..."
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a phone number..."
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    required="required"
                    placeholder="Enter an email..."
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;