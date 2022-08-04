export default function AlertMe(props) {
    return (
        <div className="alert alert-warning " role="alert">
            {props.content}
        </div>
    );
}
