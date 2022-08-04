import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function TableRow(props,teacher, handleEditClick) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>{teacher.name}</td>
            <td>{teacher.age}</td>
            <td>{teacher.address}</td>
            <td>{teacher.phoneNumber}</td>
            <td>{teacher.teachedClass}</td>
            <td>
            <FontAwesomeIcon icon={faTrashAlt} className="me-3" onClick={props.enter}/>
            <FontAwesomeIcon icon={faPencilAlt} onClick={(event) => handleEditClick(event, teacher)}/>
            </td>
        </tr>
    )
}