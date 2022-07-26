function ProfileCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-xxl-6">
        <div className="card w-50 " >
        <img className="card-img-top" src={"/Pictures/Avatar.jpg"} alt={'Face'}></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default ProfileCard;