export default function TableRowInput(props) {
    return (
        <tr>
            <th scope="row">{props.numbers}</th>
            <td>
                <input type="text" className="form-control" placeholder="Name" name="name" required="required" onChange={props.onChange} defaultValue={props.name}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Age" name="Age" required="required" onChange={props.onChangeAge} defaultValue={props.age}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Address" name="Address" required="required" onChange={props.onChange} defaultValue={props.address}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Phone Number" name="PhoneNumber" required="required" onChange={props.onChange} defaultValue={props.phoneNumber}></input>
            </td>
            <td>
            <input type="text" className="form-control" placeholder="Class" name="TeachedClass" required="required" onChange={props.onChange} defaultValue={props.teachedClass}></input>
            </td>
            <td>
            <button type="submit" className="btn btn-primary" onClick={props.onSubmit}>Save</button>
            </td>
        </tr>
    )
}