export default function Button(props) {
    return(
        <button className={props.className} value={props.value} type={props.type}>{props.label}</button>
    )
    
}