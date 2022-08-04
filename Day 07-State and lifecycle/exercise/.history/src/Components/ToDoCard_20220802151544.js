


function ToDoCard(props) {
    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col-xxl-12">
                    <h5>{props.title}</h5>
                    <p className="text-muted">{props.date}</p>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )

}


export default ToDoCard;