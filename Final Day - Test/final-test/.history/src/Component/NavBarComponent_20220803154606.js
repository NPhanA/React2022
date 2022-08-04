export default function NavBarComponents(props) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div className="col-xxl-2">
                    <a className="navbar-brand " href="#">{props.contentTitle}</a>
                </div>
                <div className="col-xxl-9  fst-italic text-center fs-5">{props.contentText}</div>
                <div className="col-xxl-1">
                    <img src={props.img} alt="Avatar" className="avatar me-2"></img>
                   <span>{props.role}</span>
                   </div>
    </nav>
    )
    
}