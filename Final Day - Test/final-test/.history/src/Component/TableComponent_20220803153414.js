export default function TableRow(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.address}</td>
            <td>Mark</td>
            <td>Otto</td>
        </tr>
    )
}