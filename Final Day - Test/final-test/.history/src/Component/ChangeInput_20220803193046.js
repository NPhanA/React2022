export default function TableRowInput(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>
                <input type="text" className="form-control" placeholder="Name" name="name" required="required" onChange={props.onChange} value={props.name}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Age" name="Age" required="required" onChange={props.onChangeAge} value={props.Age}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Address" name="Address" required="required" onChange={props.onChangeAddress} value={props.Address}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Phone Number" name="PhoneNumber" required="required" onChange={props.onChangePhone} value={props.PhoneNumber}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Class" name="TeachedClass" required="required" onChange={props.onChangeClass} value={props.TeachedClass}></input>
            </td>
            <td>
            <button type="submit" className="btn btn-primary">Save</button>
            </td>
        </tr>
    )
}