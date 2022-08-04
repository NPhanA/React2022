export default function TableRow(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>
                <input type="text" className="form-control" placeholder="Name" name="name" required="required"></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}