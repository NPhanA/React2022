export default function FormCal(props) {
    return(
      <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className={props.className}></input>
        </div>
    </form>  
    )
    
}