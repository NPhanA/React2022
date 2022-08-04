export default function SelectCard(props) {
    return (
        <div class="row g-3 align-items-center">
            <div class="col-auto">
                <label for={props.id} class="col-form-label">{props.Select}</label>
            </div>
            <div class="col-auto">
                <input type={props.type} id={props.id} class="form-control" aria-describedby="passwordHelpInline"></input>
            </div>
        </div>
    )
}