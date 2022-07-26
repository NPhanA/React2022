import avatar from '../Pictures/Avatar.jpg';
import space from '../Pictures/Space.jpg';
function ProfileCard() {
    return (
        <div className="container ">
            <div className="row mx-auto">
                <div className="col-xs-12 col-xxl-6 mx-auto">
        <div className="card w-50 text-center" >
            <div className="card-image-top" style={{backgroundImage:"url(" + space + ")"}}>
        <img className="card-img-top rounded-circle" src={avatar} alt={'Space'} style={{width:'50px'}}></img>
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