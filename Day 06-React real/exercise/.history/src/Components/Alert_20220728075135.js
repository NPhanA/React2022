export default function AlertMe(props) {
    return (
        <div class="alert alert-primary alert-primary" role="alert">
            {props.content}
        </div>
    );
}
