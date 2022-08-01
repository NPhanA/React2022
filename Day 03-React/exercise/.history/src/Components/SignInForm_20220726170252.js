function SignInForm() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-xs-12 col-xxl-3">
                <input type="email" className="form-control form-control-sm mt-3 mb-4" placeholder="Email address" required></input>
                <input type="password" className="form-control form-control-sm" placeholder="Password" required></input>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;