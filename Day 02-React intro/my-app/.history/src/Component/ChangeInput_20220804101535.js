import React from "react";
const TableRowInput = ({
    editFormData,
    handleEditFormChange,
}) =>  {
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
                <button type="submit" className="btn btn-primary" >Save</button>
            </td>
        </tr>
    )
}






export default TableRowInput;