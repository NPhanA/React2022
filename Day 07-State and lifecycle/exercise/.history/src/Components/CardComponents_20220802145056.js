export default function TodoCard(props){
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    )
}