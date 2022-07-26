import avatar from '../Pictures/Avatar.jpg';
import space from '../Pictures/Space.jpg';

function ProfileCard() {
    return (
        <div className="container ">
            <div className="row mx-auto">
                <div className="col-xs-12 col-xxl-6 mx-auto">
        <div className="card w-50 text-center" >
        <div className="upper">
                <img src={space} className="img-fluid"></img> 
              </div>
              <div className="user text-center">
                <div className="profile">
                  <img src={avatar} className="rounded-circle position-absolute" width="80" style={{
        top:"-20px",
        left: "38%",
        height: "90px",
        width: "90px",
        border:"3px solid #fff",
        borderradius: "50%"}}></img>
                </div>
              </div>
        <div className="card-body">      
          <h5 className="card-title">Phan Anh</h5>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default ProfileCard;