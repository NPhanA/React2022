export default function AlertMe(props) {
    return (
        <div className="alert alert-warning " role={props.role}>
            {props.content}
        </div>
    );
}
