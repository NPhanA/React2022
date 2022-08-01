export default function FormType(props) {
    <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} id={props.id} onChange={props.change} ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className={props.className} id={props.dId} onChange={props.diffChange} ></input>
        </div>
    </form>
}