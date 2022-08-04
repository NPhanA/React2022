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
                            <div className="col-xxl-3">
                                <div className="">TEACHER</div>
                            </div>
                            <div className="col-xxl-8 d-flex justify-content-end">
                                <button type="button" className="btn btn-info ms-5">Create New</button>
                            </div>
                        </div>
                        <div className="fs-5 mt-5 d-flex ">
                            <div className="col-xxl-3 d-inlne">
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Password</label>
                                    </div>
                                </div>
                                <div className="col-xxl-8 d-flex justify-content-end">
                                    <button type="button" className="btn btn-info ms-5">Create New</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}