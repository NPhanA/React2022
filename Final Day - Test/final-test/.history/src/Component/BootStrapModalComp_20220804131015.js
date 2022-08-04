export default function ModalBts(props){
return(
    <div className="modal" tabIndex="-1" id="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Teacher</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-3" placeholder="Name" id="input-name" required></input>
                            <input type="text" className="form-control mb-3" placeholder="Age" id="input-age" required></input>
                            <input type="text" className="form-control mb-3" placeholder="Address" id="input-address" required></input>
                            <input type="text" className="form-control mb-3" placeholder="Phone Number" id="input-phoneNumber" required></input>
                            <input type="text" className="form-control mb-3" placeholder="Class" id="input-class" required></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addTeacher} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
)
}