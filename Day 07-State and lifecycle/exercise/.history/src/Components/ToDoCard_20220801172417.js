


function ToDoCard(props) {
    return (
        <div className="container" >
            <div className="row">
                <div className="col-xxl-12">
                    <h5>{props.title}</h5>
                    <p>{props.date}</p>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )

}


export default ToDoCard;