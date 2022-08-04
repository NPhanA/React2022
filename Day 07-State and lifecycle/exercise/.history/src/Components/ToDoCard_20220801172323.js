


function ToDoCard(props) {
    return (
        <div className="container" >
            <div className="row">
                <div className="col-xxl-12">
                    <h5>{props.title}</h5>
                    <div>{props.date}</div>
                </div>
            </div>
        </div>
    )

}


export default ToDoCard;