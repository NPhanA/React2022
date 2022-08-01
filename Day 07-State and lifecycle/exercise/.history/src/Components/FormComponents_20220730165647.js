export default function formType(props) {
    <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} id={props.id} onChange={props.change} ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className="form-control" id="inputBot" onChange={props.diffChange} ></input>
        </div>
    </form>
}