function SignInForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                <input type="email" className="form-control form-control-sm" placeholder="Email address" required></input>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;