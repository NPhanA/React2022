export default function TableRow(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.address}</td>
            <td>{props.phoneNumber}</td>
            <td>Otto</td>
        </tr>
    )
}