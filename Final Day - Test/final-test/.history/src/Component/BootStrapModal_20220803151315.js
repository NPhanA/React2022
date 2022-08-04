export default function ModalBT(){
    return(
        <div className="modal" tabIndex="-1" id="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Teacher</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-3" placeholder="n\Name" id="input-name"></input>
                            <input type="text" className="form-control mb-3" placeholder="Age" id="input-age"></input>
                            <input type="text" className="form-control mb-3" placeholder="Address" id="input-address"></input>
                            <input type="text" className="form-control mb-3" placeholder="Phone Number" id="input-phoneNumber"></input>
                            <input type="text" className="form-control mb-3" placeholder="Class" id="input-class"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}