
function Alert (props) {
        return (
            <div className={props.className} role={props.role}>{props.content}</div>   
       );
}
export default Alert;