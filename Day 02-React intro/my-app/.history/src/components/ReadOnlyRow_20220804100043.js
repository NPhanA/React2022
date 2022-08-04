import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};


import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const TableRow = ({ contact, handleEditClick, handleDeleteClick, props }) => {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
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
export default ReadOnlyRow;