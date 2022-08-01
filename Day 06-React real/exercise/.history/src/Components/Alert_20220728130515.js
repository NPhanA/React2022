export default function AlertMe(props) {
    return (
        <div class="alert alert-warning " role="alert">
            {props.content}
        </div>
    );
}
