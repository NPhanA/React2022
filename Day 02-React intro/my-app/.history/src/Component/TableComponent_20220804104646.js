import React from "react";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const TableRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <th scope="row">{contact.id}</th>
            <td>{contact.name}</td>
            <td>{contact.age}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.teachedClass}</td>
            <td>
            <FontAwesomeIcon icon={faTrashAlt} className="me-3" onClick={(event) => handleEditClick(event, contact)}/>
            <FontAwesomeIcon icon={faPencilAlt} onClick={() => handleDeleteClick(contact.id)}/>
            </td>
        </tr>
    )
}
export default TableRow;