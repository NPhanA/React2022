export default function FormCal(props) {
    return(
      <form>
        <div className="mb-3">
            <input type={props.type} className={props.className} id="inputTop" ></input>
        </div>
        <div className="mb-3">
            <input type={props.type} className={props.className} id = "inputBot"></input>
        </div>
    </form>  
    )
    
}