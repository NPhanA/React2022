export default function AlertMe(props) {
    return (
        <div class="alert alert-primary alert-warning" role="alert">
            {props.content}
        </div>
    );
}
