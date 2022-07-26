import avatar from '../Pictures/Avatar.jpg';
import space from '../Pictures/Space.jpg';
function ProfileCard() {
    return (
        <div className="container ">
            <div className="row mx-auto">
                <div className="col-xs-12 col-xxl-6 mx-auto">
        <div className="card w-50 text-center" >
        <img className="card-img-top position-absolute z-index-3" src={space} alt={'Space'}></img>
        <img className="card-img-top rounded-circle position-relative" src={avatar} alt={'Face'} style={{width: ""}}></img>
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