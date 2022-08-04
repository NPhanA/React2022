import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faS,faTrashAlt } from "@fortawesome/free-solid-svg-icons"
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
            <FontAwesomeIcon icon="fas fa-trash-alt" />
            </td>
        </tr>
    )
}