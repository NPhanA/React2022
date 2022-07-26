function ProfileCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-xxl-6 ">
        <div className="card w-50 text-center" >
        <img className="card-img-top" src={'./Pictures/Avatar.jpg'} alt={'Face'}></img>
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