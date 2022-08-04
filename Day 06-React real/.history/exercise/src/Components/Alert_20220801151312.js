export default function AlertMe(props) {
    return (
        <div className={props.className} role={props.role}>
            {props.content}
        </div>
    );
}
