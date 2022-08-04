import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function TableRow(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.address}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.teachedClass}</td>
            <td>
            <FontAwesomeIcon icon={faTrashAlt} />
            <FontAwesomeIcon icon={faPencilAlt} />
            </td>
        </tr>
    )
}