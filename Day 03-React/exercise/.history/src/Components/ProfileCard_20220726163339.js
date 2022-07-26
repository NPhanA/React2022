import avatar from '../Pictures/Avatar.jpg';
import space from '../Pictures/Space.jpg';
function ProfileCard() {
    return (
      <div className="container">
            <div class="container d-flex justify-content-center align-items-center">
             
             <div class="card">
       
              <div class="upper">
       
                <img src={space} className="img-fluid">
                
              </div>
       
              <div class="user text-center">
       
                <div class="profile">
       
                  <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80">
                  
                </div>
       
              </div>
              </div>
       </div>
       </div>
    );
  }
  
  export default ProfileCard;