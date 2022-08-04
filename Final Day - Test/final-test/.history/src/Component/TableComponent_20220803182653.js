import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function TableRowInput(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.address}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.teachedClass}</td>
            <td>
            <FontAwesomeIcon icon={faTrashAlt} className="me-3" onClick={props.enter}/>
            <FontAwesomeIcon icon={faPencilAlt} onClick={props.change}/>
            </td>
        </tr>
    )
}