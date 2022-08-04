import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Avatar.css';
export default function TeacherManager() {




    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="col-xxl-2">
                    <a className="navbar-brand " href="#">VTI Teacher Manager</a>
                </div>
                <div className="col-xxl-9 f fst-italic text-center fs-5">Every thing has a start and an end</div>
                <div className="col-xxl-1">
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" class="avatar me-2"></img>
                    admin</div>
            </nav>
            <div className="row">
                <div className="col-xxl-1"></div>
            <div className="col-xxl-11">
                <div className="container">
                    <div className="fs-5 mt-3 d-flex ">
                       <div className="justify-content-start">TEACHER </div><button type="button" className="btn btn-info justify-content-end">Create New</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}