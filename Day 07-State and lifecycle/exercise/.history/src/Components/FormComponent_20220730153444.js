export default function FormCal(props) {
    return(
      <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} size={props.size}></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className={props.className} size={props.size}></input>
        </div>
    </form>  
    )
    
}