function SignInForm() {
    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-xs-12 col-xxl-4">
                    <form className="form-inline">
                        <div className="col-xs-12 col-xxl-12">
                            <input type="email" className="form-control form-control-sm mt-3 mb-4" placeholder="Email address" required></input>
                            <input type="password" className="form-control form-control-sm" placeholder="Password" required></input>
                        </div>
                        <div className="form-check mt-3  ">
                            <div className="d-flex justify-content-center fs-5">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" >
                                    Remember me
                                </label>
                                <span className="text-primary ms-5 ">Forgot password?</span>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary mt-2" type="button">Sign In</button>
                        </div>
                        <p className="text-center mt-4">Not a member?<a href="#" className="text-decoration-none">Register</a></p>
                        <p className="text-center ">or sign up with:</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;