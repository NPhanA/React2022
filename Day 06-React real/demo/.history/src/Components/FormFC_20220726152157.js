import InputFC from "./InputFunctionalComp";
function FormFc(){
    return (
        <div className="container">
            <h1>Email</h1>
            <InputFC type="email"></InputFC>
            <h1>Password</h1>
            <InputFC type="password"></InputFC>
            </div>
       );
}

export default FormFc;