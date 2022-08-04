export default function StartEndComponents(props) {
    return (
        <div className="fs-5 mt-3 d-flex ">
            <div className="col-xxl-3">
                <div>{props.ManageObject}</div>
            </div>
            <div className="col-xxl-8 d-flex justify-content-end">
                <button type="button" className="btn btn-info ms-5" onClick={props.onClick}>Create New</button>
            </div>
        </div>
    )
}