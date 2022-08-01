export default function formType(props) {
    <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} id="inputTop" onChange={this.updateInputValueT} ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className="form-control" id="inputBot" onChange={this.updateInputValueB} ></input>
        </div>
    </form>
}