import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// export default function TableRow(props,teacher, handleEditClick) {
//     return (
//         <tr>
//             <th scope="row">{props.numbers}</th>
//             <td>{teacher.name}</td>
//             <td>{teacher.age}</td>
//             <td>{teacher.address}</td>
//             <td>{teacher.phoneNumber}</td>
//             <td>{teacher.teachedClass}</td>
//             <td>
//             <FontAwesomeIcon icon={faTrashAlt} className="me-3" onClick={props.enter}/>
//             <FontAwesomeIcon icon={faPencilAlt} onClick={(event) => handleEditClick(event, teacher)}/>
//             </td>
//         </tr>
//     )
// }



import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
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
  );
};

export default ReadOnlyRow;