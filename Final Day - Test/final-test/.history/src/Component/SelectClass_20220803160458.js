export default function SelectCard(props) {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for={props.id} className="col-form-label">{props.Select}</label>
            </div>
            <div className="col-auto">
                <input type={props.type} id={props.id} className="form-control"></input>
            </div>
        </div>
    )
}
