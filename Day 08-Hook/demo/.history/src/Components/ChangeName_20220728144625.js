import { useState } from "react";
export default function ChangeName(){
    const [Name, setName] = useState("Hoa");
    return(
     <div className="container">
        <span>{Name}</span>
        <button className="btn btn-primary btn-sm" onClick={() =>{setName("Lan")}}>Change name</button>
     </div>


    )
}
