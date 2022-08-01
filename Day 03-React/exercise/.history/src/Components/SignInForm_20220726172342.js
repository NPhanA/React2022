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
                <form className="form-inline">
                <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                     Default checkbox
                </label>
                <span className="text-primary">.text-primary</span>
</div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;