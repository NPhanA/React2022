export default function FormCal(props) {
    return(
      <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} id={props.id} ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className={props.className} id = {props.sid}></input>
        </div>
    </form>  
    )
    
}