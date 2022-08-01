function SignInForm() {
    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <form className="form-inline">
                    <div className="col-xs-12 col-xxl-3">
                        <input type="email" className="form-control form-control-sm mt-3 mb-4" placeholder="Email address" required></input>
                        <input type="password" className="form-control form-control-sm" placeholder="Password" required></input>
                    </div>
                    <div class="form-check mt-3 ">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                        <span className="text-primary ms-5">Forgot password?</span>
                    </div>
                    <button className="btn btn-primary">SIGN IN</button>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;