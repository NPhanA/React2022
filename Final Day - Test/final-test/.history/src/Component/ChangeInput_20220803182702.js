export default function TableRowInput(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>
                <input type="text" className="form-control" placeholder="Name" name="name" required="required"></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Age" name="Age" required="required"></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Address" name="Address" required="required"></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Phone Number" name="Phone Number" required="required"></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Class" name="Class" required="required"></input>
            </td>
        </tr>
    )
}