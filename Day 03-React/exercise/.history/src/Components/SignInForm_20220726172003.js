function SignInForm() {
    return (
        <div className="container ">
            <div className="row justify-content-center">
                <form>
                <div className="col-xs-12 col-xxl-3">
                <input type="email" className="form-control form-control-sm mt-3 mb-4" placeholder="Email address" required></input>
                <input type="password" className="form-control form-control-sm" placeholder="Password" required></input>
                </div>
                </form>
                <form>
                    
                </form>
            </div>
        </div>
    );
}

export default SignInForm;