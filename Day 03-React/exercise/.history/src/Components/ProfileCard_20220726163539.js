import avatar from '../Pictures/Avatar.jpg';
import space from '../Pictures/Space.jpg';
function ProfileCard() {
    return (
        <div className="container ">
            <div className="row mx-auto">
                <div className="col-xs-12 col-xxl-6 mx-auto">
        <div className="card w-50 text-center" >
        <div class="upper">

                <img src={space} class="img-fluid"></img>
                
              </div>

              <div class="user text-center">

                <div class="profile">

                  <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"></img>
                  
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